//for in
const automovil = {
    modelo: 'camaro',
    año: 1969,
    motor: '6.5'
}

//itera sobre objetos
for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

//es7
for(let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave} : ${valor}`);
}