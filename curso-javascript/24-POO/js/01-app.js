class Cliente { 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const oswaldo = new Cliente('Oswaldo', 500);
console.log(oswaldo);



const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const oswaldo2 = new Cliente2('Oswaldo', 500);
console.log(oswaldo2);