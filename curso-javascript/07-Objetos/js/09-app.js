"use strict"; 

const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true
}

//seal permite solo editar las propiedades
Object.seal(producto);

producto.precio = 1000;
console.log(producto);
console.log(Object.isSealed(producto));