import { Upgrade } from './types';

export const INITIAL_UPGRADES: Upgrade[] = [
  // Améliorations de PPS (Points Par Seconde)
  {
    id: 'concrete-block',
    nameKey: 'upgrades.concreteBlock.name',
    descriptionKey: 'upgrades.concreteBlock.description',
    basePrice: 15,
    pointsPerSecond: 0.1,
    owned: 0,
    multiplier: 1,
    type: 'pps'
  },
  {
    id: 'steel-beam',
    nameKey: 'upgrades.steelBeam.name',
    descriptionKey: 'upgrades.steelBeam.description',
    basePrice: 100,
    pointsPerSecond: 1,
    owned: 0,
    multiplier: 1,
    type: 'pps'
  },
  {
    id: 'brutalist-tower',
    nameKey: 'upgrades.brutalistTower.name',
    descriptionKey: 'upgrades.brutalistTower.description',
    basePrice: 1100,
    pointsPerSecond: 8,
    owned: 0,
    multiplier: 1,
    type: 'pps'
  },
  {
    id: 'concrete-factory',
    nameKey: 'upgrades.concreteFactory.name',
    descriptionKey: 'upgrades.concreteFactory.description',
    basePrice: 12000,
    pointsPerSecond: 47,
    owned: 0,
    multiplier: 1,
    type: 'pps'
  },
  // Multiplicateurs de clics
  {
    id: 'raw-concrete',
    nameKey: 'upgrades.rawConcrete.name',
    descriptionKey: 'upgrades.rawConcrete.description',
    basePrice: 500,
    pointsPerSecond: 0,
    owned: 0,
    multiplier: 2,
    type: 'multiplier'
  },
  {
    id: 'exposed-aggregate',
    nameKey: 'upgrades.exposedAggregate.name',
    descriptionKey: 'upgrades.exposedAggregate.description',
    basePrice: 3000,
    pointsPerSecond: 0,
    owned: 0,
    multiplier: 3,
    type: 'multiplier'
  },
  {
    id: 'board-formed',
    nameKey: 'upgrades.boardFormed.name',
    descriptionKey: 'upgrades.boardFormed.description',
    basePrice: 10000,
    pointsPerSecond: 0,
    owned: 0,
    multiplier: 4,
    type: 'multiplier'
  },
  {
    id: 'monolithic-mass',
    nameKey: 'upgrades.monolithicMass.name',
    descriptionKey: 'upgrades.monolithicMass.description',
    basePrice: 50000,
    pointsPerSecond: 0,
    owned: 0,
    multiplier: 5,
    type: 'multiplier'
  },
];

export const CLICK_POWER = 1;
export const PRICE_INCREASE_RATE = 1.15;