localStorage.setItem('nombre', 'Oswaldo');
sessionStorage.setItem('nombre', 'Oswaldo');

const producto = {
    nombre: 'tableta',
    precio: 200
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
