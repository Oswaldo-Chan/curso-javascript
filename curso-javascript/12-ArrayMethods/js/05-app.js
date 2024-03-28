const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]
let resultado1;

carrito.forEach((producto, index) => {
    if(producto.nombre === 'teclado') {
        resultado1 = carrito[index];
    }
});

console.log(resultado1);

const resultado2 = carrito.find(producto => producto.nombre === 'teclado');
console.log(resultado2);