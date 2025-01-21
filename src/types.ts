export interface Upgrade {
  id: string;
  nameKey: string;
  descriptionKey: string;
  basePrice: number;
  pointsPerSecond: number;
  owned: number;
  multiplier: number;
  type: 'pps' | 'multiplier';
}

export interface GameState {
  points: number;
  pointsPerSecond: number;
  totalClicks: number;
  startTime: number;
  upgrades: Upgrade[];
  globalMultiplier: number;
}