class Cliente {
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tienes un saldo de $${this.saldo}`;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const oswaldo = new Cliente('Oswaldo', 500);

//console.log(oswaldo.#nombre);
console.log(oswaldo.getNombre());

oswaldo.setNombre('Nuevo')
console.log(oswaldo);