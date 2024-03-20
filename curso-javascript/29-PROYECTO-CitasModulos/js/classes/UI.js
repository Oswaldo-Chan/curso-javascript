import {eliminarCita, cargarEdicion} from '../funciones.js';
import {contenedorCitas} from '../selectores.js';

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

export default UI;