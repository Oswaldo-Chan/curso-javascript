const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();