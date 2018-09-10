import $ from 'jquery';
import {FleetDataService} from './services/fleet-data-service.js';
import {fleet} from './services/fleet-data.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';

export class App extends ApplicationBase {
  constructor() {
    super('Gestion de vehiculos');
    // this.dataService = new FleetDataService();
    // this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
  }

}

export let application = new App();
application.show($('body'));


// let headersCars = 'license make model miles Latlong'.split(' ');
// let dtCars = new DataTable(headersCars, dataService.cars);
// dtCars.appentToElement($('body'));
// $('body').append(`<br>Drone<hr>`);
// let headersDrone = 'license model airTimeHours base Latlong'.split(' ');
// let dtDrone = new DataTable(headersDrone, dataService.drone);
// dtDrone.appentToElement($('body'));
//
// let centerOfMap = {lat: -18.006569, lng: -70.246277};
// let map = new GoogleMap(centerOfMap, dataService.drone);
//
// map.appentToElement($('body'));