import React, { useState, useCallback } from 'react';
import { Mouse } from 'lucide-react';
import { ClickParticle } from './ClickParticle';

interface ClickButtonProps {
  onClick: () => void;
  isAnimating: boolean;
}

export const ClickButton: React.FC<ClickButtonProps> = ({ onClick, isAnimating }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticle = {
      id: Date.now(),
      x,
      y,
    };
    
    setParticles(prev => [...prev, newParticle]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
    
    onClick();
  }, [onClick]);

  return (
    <div className="flex justify-center mb-12">
      <div className="relative z-0">
        {particles.map(particle => (
          <ClickParticle key={particle.id} x={particle.x} y={particle.y} />
        ))}
        
        <button
          onClick={handleClick}
          className={`relative transform transition-all duration-200 active:scale-95 ${
            isAnimating ? 'scale-95' : 'scale-100'
          }`}
        >
          <div className="relative bg-white neo-border rounded-full p-8">
            <Mouse size={64} className="text-black" />
          </div>
          
          {/* Effet de pulsation permanent */}
          <div className="absolute inset-0 rounded-full animate-pulse-1 opacity-20 bg-yellow-400" />
          <div className="absolute inset-0 rounded-full animate-pulse-2 opacity-20 bg-yellow-400" />
        </button>
      </div>
    </div>
  );
};