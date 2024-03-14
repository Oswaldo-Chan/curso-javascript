//eventos de form
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('validando');
}