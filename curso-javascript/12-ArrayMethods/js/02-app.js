const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

meses.forEach((mes, indice) => {
    if(mes === 'marzo') {
        console.log(`encontrado en el indice: ${indice}`);
    }
});

const index1 = meses.findIndex(mes => mes === 'marzo');
console.log(index1);

const index2 = carrito.findIndex( producto => producto.nombre === 'celular');
console.log(index2);