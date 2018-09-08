import {Button as MainButton} from './ui/button.js';
import { Image } from './ui/image.js';
import $ from 'jquery';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table';
import {FleetDataService} from './services/fleet-data-service';
import {fleet} from './services/fleet-data';

let dataService = new FleetDataService();

dataService.loadData(fleet)

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
for(let car of dataService.cars){

}