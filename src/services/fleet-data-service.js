import {DataError} from './data-error';

export class FleetDataService {

  constructor() {
    this.cars = [];
    this.drone = [];
    this.errors = []
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case `car`:
          let car = this.loadCar(data)
          this.cars.push(car);
          break;
        case 'drone':
          this.drone.push(data);
          break;
        default:
          let e = new DataError(`Invalido vehiculo`,data);
          this.errors.push(data)
          break
      }

    }
  }

  loadCar(car){
    try{
      let c = new Car;
      c.miles = car.miles
      c.make = car.make
      return c
    }catch (e) {
      this.errors.push(new DataError(`Error Load Car`,car))
    }

  }
}