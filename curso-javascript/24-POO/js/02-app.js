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

const oswaldo = new Cliente('Oswaldo', 500);

console.log(Cliente.bienvenida());

console.log(oswaldo);
console.log(oswaldo.imprimirSaldo());

oswaldo.retirarSaldo(400);
console.log(oswaldo.imprimirSaldo());

