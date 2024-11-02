import { create } from 'zustand';
import { GameState } from '../types/game';

const INITIAL_EQUIPMENT = [
  {
    id: 'basic-gpu',
    name: 'Basic GPU',
    hashPower: 10,
    price: 100,
    level: 1,
    image: '🎮'
  },
  {
    id: 'advanced-gpu',
    name: 'Advanced GPU',
    hashPower: 25,
    price: 250,
    level: 1,
    image: '🖥️'
  },
  {
    id: 'mining-rig',
    name: 'Mining Rig',
    hashPower: 50,
    price: 500,
    level: 1,
    image: '⚡'
  },
  {
    id: 'data-center',
    name: 'Data Center',
    hashPower: 100,
    price: 1000,
    level: 1,
    image: '🏢'
  }
];

export const useGameStore = create<GameState>((set) => ({
  tokens: 0,
  hashPower: 0,
  equipment: INITIAL_EQUIPMENT,
  ownedEquipment: [],
  
  addTokens: (amount) => set((state) => ({ 
    tokens: state.tokens + amount 
  })),
  
  purchaseEquipment: (equipmentId) => set((state) => {
    const equipment = state.equipment.find(e => e.id === equipmentId);
    if (!equipment || state.tokens < equipment.price) return state;
    
    return {
      tokens: state.tokens - equipment.price,
      hashPower: state.hashPower + equipment.hashPower,
      ownedEquipment: [...state.ownedEquipment, equipment]
    };
  }),
  
  upgradeEquipment: (equipmentId) => set((state) => {
    const equipmentIndex = state.ownedEquipment.findIndex(e => e.id === equipmentId);
    if (equipmentIndex === -1) return state;
    
    const equipment = state.ownedEquipment[equipmentIndex];
    const upgradeCost = equipment.price * 1.5;
    
    if (state.tokens < upgradeCost) return state;
    
    const updatedEquipment = {
      ...equipment,
      level: equipment.level + 1,
      hashPower: equipment.hashPower * 1.5,
      price: upgradeCost
    };
    
    const newOwnedEquipment = [...state.ownedEquipment];
    newOwnedEquipment[equipmentIndex] = updatedEquipment;
    
    return {
      tokens: state.tokens - upgradeCost,
      hashPower: state.hashPower + (updatedEquipment.hashPower - equipment.hashPower),
      ownedEquipment: newOwnedEquipment
    };
  })
}));