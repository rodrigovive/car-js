import {BaseElement} from './ui/base-element.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends BaseElement {
  constructor() {
    super();
  }

  createElement() {
    super.createElement();
    let i = new Image('../images/drone.jpg');
    i.appentToElement(this.element)

    let b = new Button('Selft Driving Cars')
    b.appentToElement(this.element);


  }

  getElementString(){
    return `<div style="text-align: center"></div>`
  }
}