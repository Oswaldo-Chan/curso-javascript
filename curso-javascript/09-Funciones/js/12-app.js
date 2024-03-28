const carrito = [
    { nombre: 'teclado', precio: 2000},
    { nombre: 'monitor', precio: 12000},
    { nombre: 'television', precio: 20000},
    { nombre: 'mouse', precio: 1000}
];

const nuevoArreglo = carrito.map((producto) => {
    return  `${ producto.nombre } ${producto.precio}`;
});

console.log(nuevoArreglo);
 
carrito.forEach(producto => {
    console.log(`${producto.nombre} - ${producto.precio}`);
});

const nuevoArreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
 
console.log(nuevoArreglo2);
