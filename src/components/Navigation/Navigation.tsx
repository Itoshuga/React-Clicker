import React from 'react';
import { ShoppingBag, BarChart3, Settings } from 'lucide-react';

interface NavigationProps {
  onOpenShop: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenShop, onOpenStats, onOpenSettings }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-3 border-black">
      <div className="max-w-4xl mx-auto flex justify-around items-center p-3">
        <button
          onClick={onOpenShop}
          className="p-3 hover:bg-yellow-100 rounded-xl neo-border-sm transition-colors"
          aria-label="Ouvrir la boutique"
        >
          <ShoppingBag size={28} />
        </button>
        <button
          onClick={onOpenStats}
          className="p-3 hover:bg-yellow-100 rounded-xl neo-border-sm transition-colors"
          aria-label="Voir les statistiques"
        >
          <BarChart3 size={28} />
        </button>
        <button
          onClick={onOpenSettings}
          className="p-3 hover:bg-yellow-100 rounded-xl neo-border-sm transition-colors"
          aria-label="Ouvrir les options"
        >
          <Settings size={28} />
        </button>
      </div>
    </div>
  );
};