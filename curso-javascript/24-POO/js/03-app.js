class Cliente { 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tienes un saldo de $${this.saldo}`;
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida(){ 
        return `Bienvenido a la empresa`;
    }
}

const oswaldo = new Cliente('Oswaldo', 500);
console.log(oswaldo.imprimirSaldo());

const empresa = new Empresa('Loopcrack', 50000, 1234567890, 'Mantenimiento');

console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
console.log(empresa.imprimirSaldo());