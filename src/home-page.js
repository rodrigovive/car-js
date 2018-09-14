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
    let i = new Image('../images/drone.jpeg');
    i.appentToElement(this.element)

    let styleString = 'width: 300px;height: 80px;font-size: 12px;'
    let b = new Button('Self Driving Cars')
    b.setStyleString(styleString)
    b.appentToElement(this.element);

    b = new Button('Drones')
    b.setStyleString(styleString)
    b.appentToElement(this.element);
  }

  getElementString(){
    return `<div style="text-align: center"></div>`
  }
}