iniciarApp();

function iniciarApp(){
    console.log('iniciando aplicación...');
    establecerConexion();
}

function establecerConexion(){
    console.log('estableciendo conexiones de red...');
    autenticarUsuario('oswaldo_chan123');
}

function autenticarUsuario(usuario) {
    console.log('autenticando usuario...');
    console.log(`bienvenido, ${usuario}`);
}