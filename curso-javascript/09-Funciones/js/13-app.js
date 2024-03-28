const reproductor = {
    cancion: '',
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
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);   
    },
    set nuevaCancion(cancion){
        this.cancion = cancion;
    }
}

reproductor.nuevaCancion = 'beg forgiveness';
reproductor.obtenerCancion;