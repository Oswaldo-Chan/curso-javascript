const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

//comprueba si todos los elementos cumplan la condicion
const resultado1 = carrito.every( producto => producto.precio < 900);
console.log(resultado1);
const resultado2 = carrito.every( producto => producto.precio < 400);
console.log(resultado2);
