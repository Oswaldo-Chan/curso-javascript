const mascota = {
    nombre: 'alana', 
    tipo: 'perro'
}

const {nombre, tipo} = mascota;

//destructuring en arrays

const numeros = [1,2,3,4,5];

const [ , ,tercero] = numeros;
console.log(tercero);

const [primero, , ,...cuarto] = numeros;
console.log(cuarto);