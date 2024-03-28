const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true
}

producto.imagen = "imagen.jpg";
console.log(producto);

delete producto.disponible;
console.log(producto);