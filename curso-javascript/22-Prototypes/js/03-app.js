function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

Cliente.prototype.retirarSaldo = function(retiro) {
    this.saldo -= retiro;
}

const oswaldo = new Cliente('Oswaldo', 500);


console.log (oswaldo.tipoCliente());
console.log (oswaldo.nombreClienteSaldo());

oswaldo.retirarSaldo(100);
console.log (oswaldo.nombreClienteSaldo());
