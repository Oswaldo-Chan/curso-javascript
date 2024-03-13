///for of
const pendientes = ['curso javascript', 'comer', 'proyecto'];

const carrito = [
    { nombre: 'monitor curvo', precio: 5000},
    { nombre: 'ipad', precio: 20000},
    { nombre: 'television', precio: 12000},
    { nombre: 'teclado', precio: 2000},
]
//itera sobre arreglos
for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito) {
    console.log(producto.nombre);
}