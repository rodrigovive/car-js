import {Vehicule} from './vehicule.js';

export class Car extends Vehicule {

  constructor(license, model, latLong){

    super(license,model,latLong)
    this.miles = null
    this.make = null
  }
}