function *crearGenerador() {
    yield 1;
    yield 'Oswaldo';
    yield 2+2;
    yield true;
}

const generador = crearGenerador();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);

function *nuevoGenerador(carrito) {
    for( let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
const generador2 = nuevoGenerador(carrito);

console.log(generador2.next());
console.log(generador2.next());
console.log(generador2.next());
console.log(generador2.next());
console.log(generador2.next());