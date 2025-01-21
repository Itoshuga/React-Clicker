import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShopItem } from './ShopItem';
import { Modal } from '../Modal/Modal';
import { Upgrade } from '../../types';

interface ShopProps {
  upgrades: Upgrade[];
  onBuy: (id: string) => void;
  onClose: () => void;
  currentPoints: number;
  isClosing: boolean;
  onCloseStart: () => void;
}

export const Shop: React.FC<ShopProps> = ({ 
  upgrades, 
  onBuy, 
  onClose, 
  currentPoints,
  isClosing,
  onCloseStart
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'pps' | 'multiplier'>('pps');

  const filteredUpgrades = upgrades.filter(upgrade => upgrade.type === activeTab);

  return (
    <Modal 
      title={t('shop.title')}
      onClose={onClose}
      isClosing={isClosing}
      onCloseStart={onCloseStart}
    >
      <div className="space-y-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('pps')}
            className={`flex-1 py-3 neo-border-sm font-bold uppercase transition-colors ${
              activeTab === 'pps' 
                ? 'bg-yellow-400 hover:bg-yellow-500' 
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {t('shop.tabs.upgrades')}
          </button>
          <button
            onClick={() => setActiveTab('multiplier')}
            className={`flex-1 py-3 neo-border-sm font-bold uppercase transition-colors ${
              activeTab === 'multiplier' 
                ? 'bg-yellow-400 hover:bg-yellow-500' 
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {t('shop.tabs.multipliers')}
          </button>
        </div>

        <div className="bg-black text-white p-4 neo-border">
          <p className="text-sm">
            {t(`shop.descriptions.${activeTab}`)}
          </p>
        </div>

        <div className="space-y-4">
          {filteredUpgrades.length > 0 ? (
            filteredUpgrades.map(upgrade => (
              <ShopItem
                key={upgrade.id}
                upgrade={upgrade}
                onBuy={onBuy}
                currentPoints={currentPoints}
              />
            ))
          ) : (
            <div className="text-center py-4 text-gray-500">
              {t('shop.noUpgrades')}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};