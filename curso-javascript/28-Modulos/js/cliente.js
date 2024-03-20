"use strict";

(function() {
    const nombreCliente =  'Oswaldo';
    let ahorro = 500;
})();

export const nombreCliente =  'Oswaldo';
export const ahorro = 500

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: $${ahorro}`;
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: $${this.ahorro}`;
    }
}

//solo un export default por archivo
export default function funcion() {
    console.log('Funcion por default')
}

/* export default function() {
    console.log('Funcion por default')
} */