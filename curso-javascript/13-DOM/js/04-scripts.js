//halla un elemento mediante el selector dado
const card = document.querySelector('.card');
console.log(card);
//selectores especificos tipo css
const info = document.querySelector('.premium .info');
console.log(info);
//segundo card de hospedaje
const hospedaje2 = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(hospedaje2);
//con id
const formulario = document.querySelector('#formulario');
console.log(formulario);
//con etiqueta HTML
const nav = document.querySelector('nav');
console.log(nav);