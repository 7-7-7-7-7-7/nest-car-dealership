import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Nissan',
      model: 'Kashfka',
    },
    {
      id: 3,
      brand: 'Mercedes Benz',
      model: 'A3',
    }
  ];

  findAll() {
    return this.cars;
  }

  findById(id: number) {

    const car = this.cars.find((car) => car.id === id);

    if(!car) {
      throw new NotFoundException(`Car with id ${id} not found!`);
    }

    return car;
  }
}