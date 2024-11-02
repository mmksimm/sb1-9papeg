import React, { useEffect, useState } from 'react';
import { useGameStore } from '../store/gameStore';

export const MiningProgress = () => {
  const [progress, setProgress] = useState(0);
  const { hashPower, addTokens } = useGameStore();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (hashPower * 0.5);
        if (newProgress >= 100) {
          addTokens(hashPower * 0.1);
          return 0;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [hashPower, addTokens]);

  return (
    <div className="w-full mb-6">
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-50"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
          Mining Progress: {progress.toFixed(1)}%
        </div>
      </div>
    </div>
  );
};