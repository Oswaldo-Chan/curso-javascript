const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log(`pausando cancion...`);
    },
    borrar: function(){
        console.log(`borrando cancion con el id ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`creando playlist de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('r&b');