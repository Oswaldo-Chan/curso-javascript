const carrito = new Set();
carrito.add('Camisa');
carrito.add('Lentes');
carrito.add('Bermuda');
console.log(carrito);
carrito.clear();
console.log(carrito);
carrito.add('Camisa');
carrito.add('Lentes');
console.log(carrito.has('Camisa'));
carrito.delete('Camisa');
console.log(carrito);

carrito.forEach((producto, index, pertenece) => {
    console.log(`${index} : ${producto}`);
    console.log(pertenece);
});

const numeros = [1,2,3,4,4,4,4,5,4,6,5];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);