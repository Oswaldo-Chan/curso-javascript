document.addEventListener('visibilitychange', e => {
    console.log(document.visibilityState);

    if(document.visibilityState === 'visible') {
        console.log('funcion para reproducir video');
    } else {
        console.log('pausando video');
    }
});