import React from 'react';
import { useGameStore } from '../store/gameStore';
import { ArrowUpCircle, ShoppingCart } from 'lucide-react';

export const Equipment = () => {
  const { equipment, ownedEquipment, tokens, purchaseEquipment, upgradeEquipment } = useGameStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Available Equipment
        </h2>
        <div className="space-y-4">
          {equipment.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.image}</span>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.hashPower} H/s</p>
                </div>
              </div>
              <button
                onClick={() => purchaseEquipment(item.id)}
                disabled={tokens < item.price}
                className={`px-4 py-2 rounded-lg font-medium ${
                  tokens >= item.price
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {item.price} Tokens
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ArrowUpCircle className="w-5 h-5" />
          Your Equipment
        </h2>
        <div className="space-y-4">
          {ownedEquipment.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.image}</span>
                <div>
                  <h3 className="font-medium">{item.name} Lvl {item.level}</h3>
                  <p className="text-sm text-gray-600">{item.hashPower.toFixed(1)} H/s</p>
                </div>
              </div>
              <button
                onClick={() => upgradeEquipment(item.id)}
                disabled={tokens < item.price * 1.5}
                className={`px-4 py-2 rounded-lg font-medium ${
                  tokens >= item.price * 1.5
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Upgrade ({(item.price * 1.5).toFixed(0)})
              </button>
            </div>
          ))}
          {ownedEquipment.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No equipment yet. Purchase some to start mining!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};