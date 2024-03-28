//style hace referencia a los estilos css
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'green';
encabezado.style.fontFamily = 'Times New Roman';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nuevaClase', 'segundaClase');
card.classList.remove('nuevaClase');
console.log(card.classList);