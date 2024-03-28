const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

let resultado;

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);
resultado = carrito.filter( producto => producto.precio < 300);
console.log(resultado);
resultado = carrito.filter(producto => producto.nombre !== 'teclado');
console.log(resultado);
resultado = carrito.filter(producto => producto.nombre === 'celular');
console.log(resultado);