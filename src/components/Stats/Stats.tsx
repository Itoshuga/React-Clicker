import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '../Modal/Modal';
import { formatNumber, formatTime } from '../../utils';

interface StatsProps {
  totalClicks: number;
  startTime: number;
  globalMultiplier: number;
  onClose: () => void;
  isClosing: boolean;
  onCloseStart: () => void;
}

export const Stats: React.FC<StatsProps> = ({ 
  totalClicks, 
  startTime, 
  globalMultiplier, 
  onClose,
  isClosing,
  onCloseStart
}) => {
  const { t } = useTranslation();

  return (
    <Modal 
      title={t('stats.title')}
      onClose={onClose}
      isClosing={isClosing}
      onCloseStart={onCloseStart}
    >
      <div className="space-y-4">
        <div className="bg-yellow-100 neo-border rounded-lg p-4">
          <p className="flex justify-between items-center">
            <span className="font-bold uppercase">{t('stats.playTime')}</span>
            <span className="bg-black text-white px-3 py-1 rounded">
              {formatTime(Date.now() - startTime)}
            </span>
          </p>
        </div>
        <div className="bg-yellow-100 neo-border rounded-lg p-4">
          <p className="flex justify-between items-center">
            <span className="font-bold uppercase">{t('stats.totalClicks')}</span>
            <span className="bg-black text-white px-3 py-1 rounded">
              {formatNumber(totalClicks)}
            </span>
          </p>
        </div>
        <div className="bg-yellow-100 neo-border rounded-lg p-4">
          <p className="flex justify-between items-center">
            <span className="font-bold uppercase">{t('stats.multiplier')}</span>
            <span className="bg-black text-white px-3 py-1 rounded">
              x{globalMultiplier}
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};