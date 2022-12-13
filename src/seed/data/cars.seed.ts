import { Car } from "../../cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    uuid: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    uuid: uuid(),
    brand: 'Nissan',
    model: 'Kashfka',
  },
  {
    uuid: uuid(),
    brand: 'Mercedes Benz',
    model: 'A3',
  }
];
