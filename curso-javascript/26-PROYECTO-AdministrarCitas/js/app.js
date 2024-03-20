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

   imprimirCitas({citas}) { 
        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('H2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('P');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

            const telefonoParrafo = document.createElement('P');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

            const fechaParrafo = document.createElement('P');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

            const horaParrafo = document.createElement('P');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

            const sintomasParrafo = document.createElement('P');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

            const btnEliminar = document.createElement('BUTTON');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar Cita';

            btnEliminar.onclick = () => {
                eliminarCita(id);
            }

            const btnEditar = document.createElement('BUTTON');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar Cita';

            btnEditar.onclick = () => {
                cargarEdicion(cita);
            }

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            contenedorCitas.appendChild(divCita);
        });    
    }

    limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

cargarEventos();

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

    if( mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;
    }

    if(editando) {
        ui.imprimirAlerta('Guardado Exitosamente');
        administrarCitas.editarCita({...citaObj});
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;
    } else {
        citaObj.id = Date.now();
        administrarCitas.agregarCita({...citaObj});
        ui.imprimirAlerta('Cita Agregada Correctamente');
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
    administrarCitas.eliminarCita(id);
    ui.imprimirAlerta('Cita Eliminada Correctamente');
    ui.imprimirCitas(administrarCitas);
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