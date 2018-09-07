import {Button as MainButton} from './ui/button.js';
import { Image } from './ui/image.js';
import $ from 'jquery';
import {TitleBar} from './ui/title-bar.js';

// let b = new MainButton('Click me');
//
// b.appentToElement($('body'));
//
// let i = new Image('images/drone.jpeg');
//
// i.appentToElement($('body'));
//

let tb = new TitleBar('Aplicacion')

tb.addLink('Home','/')
tb.addLink('Drones','/')
tb.addLink('Cars','/')
tb.addLink('Map','/')

tb.appentToElement($('body'))