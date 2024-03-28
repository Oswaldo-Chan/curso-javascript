const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
        console.log(`pago mediante ${metodo}`);
        break;
    case 'tarjeta':
        console.log(`pago mediante ${metodo}`);
        break;
    default:
        console.log('metodo de pago no disponible');
        break;
}