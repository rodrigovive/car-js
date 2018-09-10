import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
  constructor(title) {
    this.title = title;
    this.titlebar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;

  }

  activateRoute(route) {
    let content = this.titlebar.element.find('.page-content');
    content.empty();

    this.routeMap[route].appentToElement(content);
  }

  show(element) {
    this.titlebar.appentToElement(element);
    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

  addRoute(id, pageObject, defaultRoute = false) {
    this.titlebar.addLink(id, '');
    this.routeMap[id] = pageObject;

    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }

}