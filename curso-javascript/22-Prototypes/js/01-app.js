const cliente = {
    nombre: 'Oswaldo',
    saldo: 500
}


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const oswaldo = new Cliente('Oswaldo', 500);
console.log(oswaldo); 