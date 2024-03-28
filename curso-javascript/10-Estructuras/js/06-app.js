const cliente = true;
const pedidoPagado = false;

if (cliente && pedidoPagado) {
    console.log('preparando envio del producto');
} else if (!cliente && !pedidoPagado) {
    console.log('realiza un pedido');
} else if (!pedidoPagado) {
    console.log('por favor, completa el pago del pedido');
} else if (!cliente) {
    console.log('Cliente no identificado');
}