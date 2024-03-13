"use strict"; 

const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true
}

//al congelarlo no permite modificar las propiedades del objeto
Object.freeze(producto);
console.log(Object.isFrozen(producto));