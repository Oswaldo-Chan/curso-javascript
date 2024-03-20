function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const oswaldo = new Cliente('Oswaldo', 500);
console.log(oswaldo);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de $${saldo}`;
}

console.log(formatearCliente(oswaldo));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const miEmpresa = new Empresa('Empresa de Oswaldo', 500, 'JS');
console.log(miEmpresa);
