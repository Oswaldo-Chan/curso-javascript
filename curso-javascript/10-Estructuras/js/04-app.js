const saldo = 100;
const totalPagar = 250;
const tarjeta = true;

if(dinero >= totalPagar) {
    console.log('saldo suficiente');
} else if(tarjeta) {
    console.log('pago con tarjeta disponible');
}
  else {
    console.log('saldo insuficiente');
}