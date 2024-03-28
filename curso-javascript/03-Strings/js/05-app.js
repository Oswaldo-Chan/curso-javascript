const producto = 'monitor de 30 pulgadas';
console.log(producto);

//reemplazar subcadena de la cadena
console.log(producto.replace('pulgadas', '"'));

//cortar subcadena de la cadena

//con inicio y fin personalizados
console.log(producto.slice(0,10));
//con inicio personalizado hasta donde termina la cadena
console.log(producto.slice(2));

console.log(producto.substring(0,10));

// extraer caracter de posicion especifica
console.log(producto.charAt(0));
