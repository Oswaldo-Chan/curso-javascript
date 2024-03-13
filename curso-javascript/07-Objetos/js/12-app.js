const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

//object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('tablet', 200);

console.log(producto);
console.log(producto2);
