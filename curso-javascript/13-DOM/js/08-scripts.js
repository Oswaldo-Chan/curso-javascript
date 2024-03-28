const navegacion = document.querySelector('.navegacion');

navegacion.childNodes;//considera espacios en blanco
navegacion.children[0];//solo considera elementos reales
navegacion.children[0].nodeName;//etiqueta
navegacion.children[0].nodeType;//res: elemento,atributo,texto,comentario,documento,fragmento

const card = document.querySelector('.card');
card.children[1].children[1].textContent = "traversing";
card.children[0].children.src = 'img/hacer3.jpg';
console.log(card);

console.log(navegacion.firstElementChild);//primer elemento
console.log(navegacion.lastElementChild);//ultimo elemento
console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);