import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor() { }

  getRedond(valor, decimales) {
    let valorRedond;
    let factor = Math.pow(10, decimales);
    if(valor < 0) {
      valorRedond = (Math.round(valor * -1 * factor) / factor) * -1;
    } else {
      valorRedond = Math.round(valor * factor) / factor;
    }
    return valorRedond;
  }

  getFormat(valor, decimales) {
    let valorFormat = new Intl.NumberFormat('de-DE', {minimumFractionDigits: decimales}).format(valor) + ' €';
    return valorFormat;
  }

}
