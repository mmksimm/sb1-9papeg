import React from 'react';
import { Activity, Coins, Zap } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const MiningStats = () => {
  const { tokens, hashPower } = useGameStore();

  return (
    <div className="grid grid-cols-3 gap-4 w-full mb-6">
      <div className="bg-blue-500 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Coins className="w-5 h-5" />
          <span className="font-medium">Tokens</span>
        </div>
        <p className="text-2xl font-bold">{tokens.toFixed(2)}</p>
      </div>
      
      <div className="bg-purple-500 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5" />
          <span className="font-medium">Hash Power</span>
        </div>
        <p className="text-2xl font-bold">{hashPower.toFixed(1)} H/s</p>
      </div>
      
      <div className="bg-green-500 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-5 h-5" />
          <span className="font-medium">Per Second</span>
        </div>
        <p className="text-2xl font-bold">{(hashPower * 0.1).toFixed(2)}</p>
      </div>
    </div>
  );
};