import React, { useState, useCallback } from 'react';
import { Header } from './components/Header/Header';
import { ClickButton } from './components/ClickButton/ClickButton';
import { Navigation } from './components/Navigation/Navigation';
import { Shop } from './components/Shop/Shop';
import { Stats } from './components/Stats/Stats';
import { Settings } from './components/Settings/Settings';
import { useGameState } from './hooks/useGameState';

export default function App() {
  const { gameState, handleClick, buyUpgrade, resetGame, redeemCode } = useGameState();
  const [clickAnimation, setClickAnimation] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleClickWithAnimation = useCallback(() => {
    setClickAnimation(true);
    setTimeout(() => setClickAnimation(false), 100);
    handleClick();
  }, [handleClick]);

  const handleOpenModal = (modalType: 'shop' | 'stats' | 'settings') => {
    if (isModalClosing) return;
    if (modalType === 'shop') setShowShop(true);
    if (modalType === 'stats') setShowStats(true);
    if (modalType === 'settings') setShowSettings(true);
  };

  const handleCloseModal = (onClose: () => void) => {
    if (isModalClosing) return;
    setIsModalClosing(true);
    setTimeout(() => {
      onClose();
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-400 pb-24">
      <div className="relative max-w-4xl mx-auto px-4 py-8">
        <div className="fixed inset-0 opacity-50 pointer-events-none bg-noise" />
        
        <div className="relative">
          <Header 
            points={gameState.points}
            pointsPerSecond={gameState.pointsPerSecond}
          />

          <ClickButton
            onClick={handleClickWithAnimation}
            isAnimating={clickAnimation}
          />

          <Navigation
            onOpenShop={() => handleOpenModal('shop')}
            onOpenStats={() => handleOpenModal('stats')}
            onOpenSettings={() => handleOpenModal('settings')}
          />

          {showShop && (
            <Shop
              upgrades={gameState.upgrades}
              onBuy={buyUpgrade}
              onClose={() => setShowShop(false)}
              currentPoints={gameState.points}
              isClosing={isModalClosing}
              onCloseStart={() => handleCloseModal(() => setShowShop(false))}
            />
          )}

          {showStats && (
            <Stats
              totalClicks={gameState.totalClicks}
              startTime={gameState.startTime}
              globalMultiplier={gameState.globalMultiplier}
              onClose={() => setShowStats(false)}
              isClosing={isModalClosing}
              onCloseStart={() => handleCloseModal(() => setShowStats(false))}
            />
          )}

          {showSettings && (
            <Settings
              onClose={() => setShowSettings(false)}
              onReset={resetGame}
              onRedeemCode={redeemCode}
              isClosing={isModalClosing}
              onCloseStart={() => handleCloseModal(() => setShowSettings(false))}
            />
          )}
        </div>
      </div>
    </div>
  );
}