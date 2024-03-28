const enLinea = navigator.onLine;
console.log(enLinea);

window.addEventListener('online', updateNetState);
window.addEventListener('offline', updateNetState);

function updateNetState() {
    if(navigator.onLine) {
        console.log('si estas conectado')
    } else {
        console.log('conexion perdida')
    }
}
