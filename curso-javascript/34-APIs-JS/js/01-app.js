const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('el resultado es ', resultado);
        })
})

const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('esta es la notificación', { 
            icon: 'img/ccj.png',
            body: 'texto extra'
        });

        notificacion.onclick = function() {
            window.open('la notificacion')
        }

    }
})
