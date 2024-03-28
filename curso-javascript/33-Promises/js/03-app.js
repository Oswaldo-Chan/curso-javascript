const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('descuento aplicado');
    } else {
        reject('no se pudo aplicar el descuento');
    }
});

aplicarDescuento
    .then(resultado => {
        descuento();
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });

console.log(aplicarDescuento);

function descuento() {
    console.log('aplicando descuento...');
}
