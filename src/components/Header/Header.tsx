import React from 'react';
import { Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../utils';

interface HeaderProps {
  points: number;
  pointsPerSecond: number;
}

export const Header: React.FC<HeaderProps> = ({ points, pointsPerSecond }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-8 bg-white p-6 neo-border rounded-xl transform hover:scale-[1.02] transition-transform">
      <div className="relative">
        <h1 className="text-4xl font-bold mb-6 uppercase relative inline-block">
          <span className="relative z-10">{t('header.title')}</span>
          <div className="absolute inset-0 bg-yellow-300 -rotate-2 -z-10" />
        </h1>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm uppercase font-bold text-gray-500">{t('header.points')}</div>
          <div className="bg-black text-white px-6 py-3 rounded-xl text-3xl font-bold neo-border-sm">
            {formatNumber(points)}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-lg neo-border-sm">
            <Zap className="text-yellow-600" size={20} />
            <span className="text-sm font-bold">{formatNumber(pointsPerSecond)}{t('header.perSecond')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};