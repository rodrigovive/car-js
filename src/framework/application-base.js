import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titlebar = new TitleBar(this.title);
  }

  show(elememt) {
    this.titlebar.appentToElement(element);
  }

}