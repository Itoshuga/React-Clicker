import React from 'react';
import { useTranslation } from 'react-i18next';
import { Upgrade } from '../../types';
import { formatNumber, calculateUpgradePrice } from '../../utils';

interface ShopItemProps {
  upgrade: Upgrade;
  onBuy: (id: string) => void;
  currentPoints: number;
}

export const ShopItem: React.FC<ShopItemProps> = ({ upgrade, onBuy, currentPoints }) => {
  const { t } = useTranslation();
  const price = calculateUpgradePrice(upgrade.basePrice, upgrade.owned);
  const isMultiplierOwned = upgrade.type === 'multiplier' && upgrade.owned > 0;

  return (
    <div className="bg-yellow-100 neo-border rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg uppercase">{t(upgrade.nameKey)}</h3>
          <p className="text-sm">{t(upgrade.descriptionKey)}</p>
          <p className="text-xs mt-1 bg-black text-white inline-block px-2 py-1 rounded">
            {t('shop.owned')}: {upgrade.owned} | {
              upgrade.type === 'pps' 
                ? `${t('shop.pps')}: +${formatNumber(upgrade.pointsPerSecond)}`
                : `${t('shop.multiplier')}: x${upgrade.multiplier}`
            }
          </p>
        </div>
        <button
          onClick={() => onBuy(upgrade.id)}
          disabled={currentPoints < price || isMultiplierOwned}
          className={`w-full sm:w-auto px-6 py-3 neo-border-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-100 transition-colors text-center uppercase font-bold ${
            isMultiplierOwned ? 'bg-gray-200' : 'bg-white hover:bg-yellow-100'
          }`}
        >
          {isMultiplierOwned ? t('shop.alreadyOwned') : formatNumber(price)}
        </button>
      </div>
    </div>
  );
};