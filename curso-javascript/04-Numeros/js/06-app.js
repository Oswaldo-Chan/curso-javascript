const num1 = '15';
const num2 = '15.5';
const num3 = 15;
const num4 = 'quince';

//convertir string a numero
const numInt = Number.parseInt(num1);
const numFloat = Number.parseFloat(num2);
console.log(numInt);
console.log(numFloat);

//revisar si es entero
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));