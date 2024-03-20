const cliente = new Map();

cliente.set('Nombre', 'Oswaldo');
cliente.set('Tipo', 'Premium');
cliente.set('Saldo', 500);

console.log(cliente);
console.log(cliente.get('Nombre'));
console.log(cliente.get('Tipo'));
console.log(cliente.get('Saldo'));
console.log(cliente.size);
console.log(cliente.has('Nombre'));
cliente.delete('Nombre');
console.log(cliente.has('Nombre'));
console.log(cliente.get('Nombre'));
console.log(cliente.size);
cliente.clear();
console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('Nombre', 'Oswaldo');
console.log(paciente);

paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});