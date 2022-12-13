import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Car } from "./interfaces/car.interface";
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from "./dto";

@Injectable()
export class CarsService {
  private cars: Car[] = [
    /*
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
     */
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {

    const car = this.cars.find((car) => car.uuid === id);

    if(!car) {
      throw new NotFoundException(`Car with id ${id} not found!`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car = {
      uuid: uuid(),
      ...createCarDto
    };
    this.cars.push(car);
    return car;
  }

  update(uuid: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(uuid);

    if(updateCarDto.uuid && updateCarDto.uuid !== uuid) {
      throw new BadRequestException('Car UUID is not valid!');
    }

    this.cars = this.cars.map((car) => {
      if (car.uuid === uuid) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          uuid,
        }
      }
      return car;
    });

    return carDB;
  }

  delete(uuid: string) {
    const carDB = this.findById(uuid);
    this.cars = this.cars.filter((car) => car.uuid !== carDB.uuid);

    return {
      message: `DELETE on #${uuid} success!`
    }
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
