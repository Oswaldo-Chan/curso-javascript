const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500},
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200 },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

meses.forEach(mes => {
    if(mes === 'enero') {
        console.log('si existe');
    }
});

const resultadoMes = meses.includes('enero');
console.log(resultadoMes);

const resultado1 = carrito.some(producto => producto.nombre === 'celular');
console.log(resultado1);
const resultado2 = meses.some(mes => mes === 'enero');
console.log(resultado2);