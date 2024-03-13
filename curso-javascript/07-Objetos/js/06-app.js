const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true,
    info: {
        tipo: 'curvo', 
        marca: 'samsung',
        fabricacion: {
            pais: 'mexico'
        }
    }
}

//destructuring
const {nombre, info:{tipo, marca, fabricacion:{pais}}} = producto;
console.log(nombre);
console.log(tipo);
console.log(marca);
console.log(pais);