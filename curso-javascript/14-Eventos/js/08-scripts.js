//evitar la propagacion con contenido creado
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

//segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'concierto de rock';
parrafo2.classList.add('titulo');

//3er parrafo
const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear el div
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';

//crear el Card
const contenedorCard = document.createElement('DIV');
contenedorCard.classList.add('contenedorCard');

//asignar la imagen al card
contenedorCard.appendChild(imagen);

//info
contenedorCard.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info
