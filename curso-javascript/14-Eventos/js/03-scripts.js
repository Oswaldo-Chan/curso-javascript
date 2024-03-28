//eventos de teclado
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('presionado');
});

busqueda.addEventListener('keyup', () => {
    console.log('no presionado');
});

busqueda.addEventListener('blur', () => {
    console.log('blur');
});

busqueda.addEventListener('copy', () => {
    console.log('copiado');
});

busqueda.addEventListener('paste', () => {
    console.log('pegado');
});

busqueda.addEventListener('cut', () => {
    console.log('cortado');
});

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
});