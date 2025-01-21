import React from 'react';

interface ClickParticleProps {
  x: number;
  y: number;
}

export const ClickParticle: React.FC<ClickParticleProps> = ({ x, y }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Particules qui s'envolent */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            animation: `particle-${i} 1s forwards ease-out`,
            transform: `rotate(${i * 60}deg) translateY(-20px)`,
          }}
        />
      ))}
      
      {/* Effet d'onde */}
      <div className="absolute w-12 h-12 rounded-full border-2 border-yellow-400 animate-click-wave" />
    </div>
  );
};