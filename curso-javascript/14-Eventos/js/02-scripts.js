//eventos con mouse
const nav = document.querySelector('.navegacion');
nav.addEventListener('click', () => {
    console.log('click');
});

nav.addEventListener('dblclick', () => {
    console.log('doble click');
});

nav.addEventListener('mousedown', () => {
    console.log('mousedown');
});

nav.addEventListener('mouseup', () => {
    console.log('mouseup');
});

nav.addEventListener('mouseenter', () => {
    console.log('entrando');
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo');
});