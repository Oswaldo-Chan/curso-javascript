const autenticado = true;

if(autenticado) {
    console.log('usuario autenticado');
}

const puntaje = 200;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('puntaje excelente');
        return;
    } 

    if(puntaje > 300) {
        console.log('buen puntaje');
        return;
    }

    if(puntaje > 150) {
        console.log('puntaje suficiente');
        return;
    }
}

revisarPuntaje();