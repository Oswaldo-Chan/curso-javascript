//elimina el elemento
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

//eliminar desde el padre
const nav = document.querySelector('.navegacion');
nav.removeChild(nav.children[2]);