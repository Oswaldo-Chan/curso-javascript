const producto = {
    nombre: 'monitor de 30 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso : '1kg',
    medida: '3m'
}

const resultado = Object.assign(producto, medidas);

//crea una copia de los objetos y se le agrega a resultadoSpread
const resultadoSpread = {...producto, ...medidas};