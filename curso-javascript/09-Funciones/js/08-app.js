//multiples funciones que se le pasan valores
function sumar(a,b){
    return a + b;
}

const resultado = sumar(1,2);
console.log(resultado);

//ejemplo avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(200);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(totalPagar);