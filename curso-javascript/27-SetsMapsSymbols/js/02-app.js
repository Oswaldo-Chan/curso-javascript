var ws = new WeakSet();

const cliente = {
    nombre: 'Oswaldo',
    saldo: 500
}

//solo objetos
ws.add(cliente); 
console.log(ws.has(cliente)); 
ws.delete(cliente);
console.log(ws.has(cliente)); 