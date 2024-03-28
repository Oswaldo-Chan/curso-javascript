const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


console.log(encabezado.innerText); //no lo encuentra si visibility: hidden
console.log(encabezado.textContent); //si lo encuentra si visibility: hidden
console.log(encabezado.innerHTML); //devuelve el html

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

//actualizar imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';