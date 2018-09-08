import {DataError} from './data-error';
import {Drone} from '../classes/drone';

export class FleetDataService {

  constructor() {
    this.cars = [];
    this.drone = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case `car`:
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if(car){
              this.cars.push(car);
            }
          } else {
            let e = new DataError('invalid car data', data);
            this.errors.push(e);
          }
          break;
        case 'drone':
          if (this.validateDroneData(data)) {
            let drone = this.loadDrone(data);
            this.drone.push(drone);
          } else {
            let e = new DataError('invalid drone data', data);
            this.errors.push(e);
          }
          break;
        default:
          let e = new DataError(`Invalido vehiculo`, data);
          this.errors.push(data);
          break;
      }

    }
  }

  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (e) {
      this.errors.push(new DataError(`Error Load Car`, car));
    }
    return null
  }

  loadDrone(drone) {
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch (e) {
      this.errors.push(new DataError(`Error Load Drone`, drone));
    }
  }

  validateCarData(car) {
    let requireProps = 'license model latLong miles make'.split(' ');
    let hasErrors = false;
    for (let field of requireProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, car));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat('invalid mileage', car))) {
      this.errors.push(new DataError('invalid message', car));
      hasErrors = true;
    }

    return !hasErrors;
  }

}