const mascotas = [
    { nombre: 'alana', tipo: 'perro'},
    { nombre: 'sakura', tipo: 'gato'},
    { nombre: 'coco', tipo: 'reptil'}
];

//crea una copia del arreglo
const nuevoArreglo = mascotas.map( function(mascota) {
    return  `${mascota.nombre} es un ${mascota.tipo}`;
});
 
console.log(nuevoArreglo);