const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

const producto = {
    nombre: 'mouse', 
    precio: 500
}

//arreglos
const meses2 = [...meses, 'agosto'];
console.log(meses2);

//objetos
const carrito2 = [...carrito, producto];
console.log(carrito2);