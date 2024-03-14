//eventos de scroll
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();//devuelve la ubicacion del elemento

    if(ubicacion.top < 784) {
        console.log('visible');
    } else {
        console.log('aun no');
    }
});
