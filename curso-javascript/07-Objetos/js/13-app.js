const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true
}

//devuelve array de las keys del objeto
console.log(Object.keys(producto));
//devuelve un array de los valores del objeto
console.log(Object.values(producto));
//devuelve un array donde cada array tiene el nombre de la propiedad y su valor
console.log(Object.entries(producto));