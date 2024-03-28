let DB;

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita')

let editando = false;

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        if(tipo === 'error') {
             alerta.classList.add('alert-danger');
        } else {
             alerta.classList.add('alert-success');
        }

        alerta.textContent = mensaje;
        document.querySelector('#contenido').insertBefore(alerta, document.querySelector('.agregar-cita'));

        setTimeout( () => {
            alerta.remove();
        }, 3000);
    }

    imprimirCitas() { 
        this.limpiarHTML();

        const objectStore = DB.transaction('citas').objectStore('citas');
        const total = objectStore.count();

        total.onsuccess = function() {
            console.log(total.result);
        }

        objectStore.openCursor().onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {
                const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value;

                const divCita = document.createElement('div');
                divCita.classList.add('cita', 'p-3');
                divCita.dataset.id = id;

                const mascotaParrafo = document.createElement('h2');
                mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                mascotaParrafo.innerHTML = `${mascota}`;

                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

                const telefonoParrafo = document.createElement('p');
                telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

                const fechaParrafo = document.createElement('p');
                fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

                const horaParrafo = document.createElement('p');
                horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

                const btnEliminar = document.createElement('button');
                btnEliminar.onclick = () => eliminarCita(id);
                btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
                btnEliminar.innerHTML = 'Eliminar Cita';

                const btnEditar = document.createElement('button');
                btnEditar.onclick = () => cargarEdicion(cursor.value);
                btnEditar.classList.add('btn', 'btn-info');
                btnEditar.innerHTML = 'Editar Cita';

                divCita.appendChild(mascotaParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(telefonoParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(horaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(btnEliminar)
                divCita.appendChild(btnEditar)

                contenedorCitas.appendChild(divCita);
            }
        }
    }

    limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

window.onload = () => {
    cargarEventos();
    crearDB();
}

function cargarEventos() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
    formulario.addEventListener('submit', nuevaCita);
}

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

function nuevaCita(e) {
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if(mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if(editando) {
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        objectStore.put(citaObj);

        transaction.oncomplete = () => {
            console.log('Editado Correctamente');
            administrarCitas.editarCita( {...citaObj} );
            ui.imprimirAlerta('Guardado Correctamente');
            formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

            editando = false;
        }

        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    } else {
        citaObj.id = Date.now();
        administrarCitas.agregarCita({...citaObj});
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        objectStore.add(citaObj);

        transaction.oncomplete = () => {
            console.log('Cita agregada');
            ui.imprimirAlerta('Se agregó correctamente');
        }

        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    reiniciarObjeto();
    formulario.reset();
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


function eliminarCita(id) {
    const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');
    
    objectStore.delete(id);

    transaction.oncomplete = () => {
        console.log(`Cita  ${id} Eliminada Correctamente`);
        administrarCitas.eliminarCita(id);
        ui.imprimirCitas()
    }

    transaction.onerror = () => {
        console.log('Hubo un error');
    }
}

function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}

function crearDB() {
    const crearDB = window.indexedDB.open('citas', 1);

    crearDB.onerror = function() {
        console.log('Hubo un error');
    }

    crearDB.onsuccess = function() {
        console.log('DB Creada');

        DB = crearDB.result;
        ui.imprimirCitas()
    }

    crearDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', { 
            keyPath: 'id',  
            autoIncrement: true 
        });

        objectStore.createIndex('mascota', 'mascota', {unique: false });
        objectStore.createIndex('cliente', 'cliente', {unique: false });
        objectStore.createIndex('telefono', 'telefono', {unique: false });
        objectStore.createIndex('fecha', 'fecha', {unique: false });
        objectStore.createIndex('hora', 'hora', {unique: false });
        objectStore.createIndex('sintomas', 'sintomas', {unique: false });
        objectStore.createIndex('id', 'id', {unique: true });

        console.log('DB Lista');
    }
}