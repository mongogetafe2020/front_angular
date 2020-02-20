import { AbstractControl } from '@angular/forms';

const letras = ['a','b','c','d'];

export function ValidateCif (control: AbstractControl) {
    let validPrLetra = false;

    letras.forEach((letra, i) =>{
        if(control.value.toLowerCase().startsWith(letras[i])) {
            validPrLetra = true;
        }
    })
    if (validPrLetra === false) {
        return { validCif: true, mensaje: 'El cif debe comenzar por A, B, C o D'}
    } else if(control.value.length < 9) {
        return { validCif: true, mensaje: 'El cif debe tener 9 caracteres'}
    } else if(control.value.length > 9) {
        return { validCif: true, mensaje: 'Aunque lo truques no pasa :)'}
    }
    return null;
}