const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

let total = 0;
carrito.foreach(producto => total+= producto.precio);
console.log(total);

//Primero afecta al incremento, luego se escribe el valor actual
let resultado = carrito.reduce((total, producto) => total + producto.precio, 100); //valor inicial de total = 100
console.log(resultado);