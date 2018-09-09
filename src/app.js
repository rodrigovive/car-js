import {Button as MainButton} from './ui/button.js';
import {Image} from './ui/image.js';
import $ from 'jquery';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {fleet} from './services/fleet-data.js';
import {GoogleMap} from './ui/google-map.js';

let dataService = new FleetDataService(fleet);

// dataService.loadData(fleet);

// let b = new MainButton('Click me');
//
// b.appentToElement($('body'));
//
// let i = new Image('images/drone.jpeg');
//
// i.appentToElement($('body'));
//
//let headers = 'License Make Model Miles'.split(' ');

//let dt = new DataTable(headers, data);
for (let e of dataService.errors) {
  console.log(e.message, e.data);
}

// dataService.getCarByLicense('')

// let cars = dataService.filteredByMake('2');

let headersCars = 'license make model miles Latlong'.split(' ');
let dtCars = new DataTable(headersCars, dataService.cars);
dtCars.appentToElement($('body'));
$('body').append(`<br>Drone<hr>`)
let headersDrone = 'license model airTimeHours base Latlong'.split(' ');
let dtDrone = new DataTable(headersDrone, dataService.drone);
dtDrone.appentToElement($('body'));

let centerOfMap = { lat: -18.006569, lng: -70.246277}
let map = new GoogleMap(centerOfMap, dataService.drone);

map.appentToElement($('body'))
