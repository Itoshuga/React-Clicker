import { useState, useCallback, useEffect } from 'react';
import { GameState } from '../types';
import { INITIAL_UPGRADES, CLICK_POWER } from '../gameConfig';
import { calculateUpgradePrice } from '../utils';

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('clickerGameState');
    if (saved) {
      const parsedState = JSON.parse(saved);
      // S'assurer que tous les upgrades ont le type correct
      parsedState.upgrades = INITIAL_UPGRADES.map(upgrade => ({
        ...upgrade,
        owned: parsedState.upgrades.find((u: any) => u.id === upgrade.id)?.owned || 0
      }));
      return parsedState;
    }
    return {
      points: 0,
      pointsPerSecond: 0,
      totalClicks: 0,
      startTime: Date.now(),
      upgrades: INITIAL_UPGRADES,
      globalMultiplier: 1,
    };
  });

  useEffect(() => {
    localStorage.setItem('clickerGameState', JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        points: prev.points + prev.pointsPerSecond,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      points: prev.points + (CLICK_POWER * prev.globalMultiplier),
      totalClicks: prev.totalClicks + 1,
    }));
  }, []);

  const buyUpgrade = useCallback((upgradeId: string) => {
    setGameState(prev => {
      const upgrade = prev.upgrades.find(u => u.id === upgradeId);
      if (!upgrade) return prev;

      // Vérifier si c'est un multiplicateur déjà acheté
      if (upgrade.type === 'multiplier' && upgrade.owned > 0) {
        return prev;
      }

      const price = calculateUpgradePrice(upgrade.basePrice, upgrade.owned);
      if (prev.points < price) return prev;

      const updatedUpgrades = prev.upgrades.map(u => 
        u.id === upgradeId ? { ...u, owned: u.owned + 1 } : u
      );

      // Calculer le nouveau multiplicateur global (produit des multiplicateurs)
      const globalMultiplier = updatedUpgrades
        .filter(u => u.type === 'multiplier')
        .reduce((total, u) => total * Math.pow(u.multiplier, u.owned), 1);

      // Calculer les nouveaux points par seconde
      const pointsPerSecond = updatedUpgrades
        .filter(u => u.type === 'pps')
        .reduce((total, u) => total + (u.pointsPerSecond * u.owned), 0);

      return {
        ...prev,
        points: prev.points - price,
        pointsPerSecond,
        globalMultiplier,
        upgrades: updatedUpgrades,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      points: 0,
      pointsPerSecond: 0,
      totalClicks: 0,
      startTime: Date.now(),
      upgrades: INITIAL_UPGRADES,
      globalMultiplier: 1,
    });
  }, []);

  const redeemCode = useCallback((code: string) => {
    if (code === 'BRUTAL') {
      setGameState(prev => ({
        ...prev,
        points: prev.points + 50000
      }));
    }
  }, []);

  return {
    gameState,
    handleClick,
    buyUpgrade,
    resetGame,
    redeemCode
  };
};