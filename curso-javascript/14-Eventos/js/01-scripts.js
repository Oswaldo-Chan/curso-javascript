console.log('no cargado');

//sucede cuando solo necesariamente el html y el dom se han cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('cargado');
});

console.log('aun cargado');