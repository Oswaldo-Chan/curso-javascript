const carrito = [
    { nombre: 'monitor curvo', precio: 5000},
    { nombre: 'ipad', precio: 20000, descuento: true},
    { nombre: 'television', precio: 12000},
    { nombre: 'teclado', precio: 2000},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}