import $ from 'jquery';

export class BaseElement {
  constructor() {
    this.element = null; //Jquery
  }

  appentToElement(el) {
    this.createElement();
    el.append(this.element);
    this.enableJS()
  }

  createElement() {
    let s = this.getElementString();
    this.element = $(s);
  }

  getElementString() {
    throw 'Error';
  }

  enableJS(){
    componentHandler.upgradeElement(this.element[0]);
  }
}