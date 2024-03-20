const ciudades = ['Nueva York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 434, 343]);
const datos = new Map();
datos.set('nombre', 'oswaldo');
datos.set('ocupacion', 'estudiante');

for(let ciudad of ciudades){
    console.log(ciudad);
}

for(let orden of ordenes){
    console.log(orden);
}
for(let dato of datos){
    console.log(dato);
}

//Entries

for(let entry of ciudades.entries()){
    console.log(entry);
}

for(let entry of ordenes.entries()){
    console.log(entry);
}

for(let entry of datos.entries()){
    console.log(entry);
}

//Values
for(let values of ciudades.values()){
    console.log(values);
}

for(let values of ordenes.values()){
    console.log(values);
}

for(let values of datos.values()){
    console.log(values);
}

//Keys
for(let keys of ciudades.keys()){
    console.log(keys);
}

for(let keys of ordenes.keys()){
    console.log(keys);
}

for(let keys of datos.keys()){
    console.log(keys);
}

// Iterar en string
const mensaje = 'Aprendiendo JavaScript';

// Forma vieja
for(let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}

// forma nueva
for(let letra of mensaje) {
    console.log(letra);
}

// Iterar en un NODE LIST
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace.href);
}