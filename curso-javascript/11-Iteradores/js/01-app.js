for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(`el numero ${i} es par`);
    } else {
        console.log(`el numero ${i} es impar`);
    }
}

const carrito = [
    { nombre: 'monitor curvo', precio: 5000},
    { nombre: 'ipad', precio: 20000},
    { nombre: 'television', precio: 12000},
    { nombre: 'teclado', precio: 2000},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} cuesta $${carrito[i].precio}`);
}