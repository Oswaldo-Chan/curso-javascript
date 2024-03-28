const mascotas = [null];

const mascota1 = {
    nombre: 'alana', 
    tipo: 'perro'
}

const mascota2 = {
    nombre: 'sakura', 
    tipo: 'gato'
}

const mascota3 = {
    nombre: 'coco', 
    tipo: 'reptil'
}
mascotas.push(mascota1);
mascotas.push(mascota2);
mascotas.push(mascota3);

//saca el ultimo elemento
mascotas.pop();
console.log(mascotas);

//saca el primer elemento
mascotas.shift();
console.log(mascotas);

//saca los elementos en el rango dado
mascotas.push(mascota3);
mascotas.unshift(mascota1);
mascotas.splice(1,2);
console.log(mascotas);