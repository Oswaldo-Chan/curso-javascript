const pendientes = ['curso javascript', 'comer', 'proyecto'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    { nombre: 'monitor curvo', precio: 5000},
    { nombre: 'ipad', precio: 20000},
    { nombre: 'television', precio: 12000},
    { nombre: 'teclado', precio: 2000},
]

carrito.forEach(producto => {
    console.log(producto.nombre);
});

const nuevoArreglo = carrito.map(producto => producto.nombre);
console.log(nuevoArreglo);