export interface Equipment {
  id: string;
  name: string;
  hashPower: number;
  price: number;
  level: number;
  image: string;
}

export interface GameState {
  tokens: number;
  hashPower: number;
  equipment: Equipment[];
  ownedEquipment: Equipment[];
  addTokens: (amount: number) => void;
  purchaseEquipment: (equipmentId: string) => void;
  upgradeEquipment: (equipmentId: string) => void;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  requirement: number;
  reward: number;
  completed: boolean;
}