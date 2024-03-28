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

let resultado;

//hace copia del arreglo con el elemento al final
resultado = [...mascotas, mascota1];
console.log(resultado);

resultado = [...resultado, mascota2]
console.log(resultado);

//hace copia del arreglo con el elemento al principio
resultado = [mascota3, ...resultado];
console.log(resultado);
