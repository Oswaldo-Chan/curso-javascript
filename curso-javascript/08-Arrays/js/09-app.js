const mascotas = [
    { nombre: 'alana', tipo: 'perro'},
    { nombre: 'sakura', tipo: 'gato'},
    { nombre: 'coco', tipo: 'reptil'}
];

for(let i = 0; i < mascotas.length; i++ ){
    console.log( `${ mascotas[i].nombre } es un ${mascotas[i].tipo}`);
}

mascotas.forEach( function(mascota) {
    console.log( `${mascota.nombre} es un ${mascota.tipo}`);
});