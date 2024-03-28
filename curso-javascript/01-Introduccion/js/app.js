/*
Le pregunta al usuario su nombre
*/
 
const nombre = prompt('cual es tu nombre:');

// toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo js moderno`; 

// asigna el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';

function holaMundo() {
    console.log('hola');
    console.log('mundo');
}