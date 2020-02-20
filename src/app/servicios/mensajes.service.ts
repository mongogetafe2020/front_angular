import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  texto: string;
  tipoMensaje: string;
  private mensajeIn = new BehaviorSubject<any>({texto:'', tipoMensaje:''});

  get isMensajeIn() {
    return this.mensajeIn.asObservable();
  }

  constructor() { }

  setMensaje(texto, tipoMensaje) {
    this.mensajeIn.next({texto: texto, tipoMensaje: tipoMensaje});
  }

}
