//boton inteligente
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultar);

function mostrarOcultar(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'idioma y moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'x cerrar';
    }
}