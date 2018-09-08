import {Vehicule} from './vehicule.js';

export class Drone extends Vehicule {

  constructor(license, model, latLong) {

    super(license, model, latLong);
    this.airTimeHours = null;
    this.base = null;
  }
}