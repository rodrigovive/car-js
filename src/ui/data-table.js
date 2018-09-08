import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {
  constructor(headers, data) {
    super();
    this.headers = headers;
    this.data = data;

  }

  getElementString() {
    let thTags = '';
    for (let h of this.headers) {
      thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>`;
    }
    let trTags = '';
    for (let r of this.data) {
      let keysR = Object.keys(r);
      trTags += `<tr>`;
      let tdTags = '';
      for (let property of this.headers) {
        let key = keysR.filter(
            (val) => val.toLowerCase() === property.toLowerCase());
        let field = r[key];
        trTags += `<td class="mdl-data-table__cell--non-numeric">${field}</td>`;
      }
      trTags += '</tr>';
    }
    return `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
          ${thTags}
        </tr>
      </thead>
      <tbody>
        ${trTags}
      </tbody>
    </table>`;
  }
}