import {Button as MainButton} from './ui/button.js';
import $ from 'jquery'
let b = new MainButton('Click me')

b.appentToElement($('body'))