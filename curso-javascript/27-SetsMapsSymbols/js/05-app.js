const sym = Symbol();
const sym2 = Symbol();

const nombre = Symbol();
const apellido = Symbol();

console.log(Symbol() === Symbol());

const persona = {};

persona[nombre] = 'Oswaldo';
persona[apellido] = 'Chan';
persona.tipo = 'Premium';
persona.saldo = 500;

console.log(persona[nombre]);

const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};
cliente[nombreCliente] = 'Nuevo';
console.log(cliente[nombreCliente]);