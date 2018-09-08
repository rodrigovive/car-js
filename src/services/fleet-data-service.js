export class FleetDataService {

  constructor() {
    this.cars = [];
    this.drone = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case `car`:
          this.cars.push(data);
          break;
        case 'drone':
          this.drone.push(data);
          break;
      }
    }
  }
}