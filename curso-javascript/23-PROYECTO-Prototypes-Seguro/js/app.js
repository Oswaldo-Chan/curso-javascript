function Seguro(marca, year, tipo) {
     this.marca = marca;
     this.year = year;
     this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function() {
     let cantidad;
     let base = 2000;

     switch(this.marca) {
          case '1':
               cantidad = base * 1.15;
               break;

          case '2':
               cantidad = base * 1.05;
               break;

          case '3':
               cantidad = base * 1.35;
               break;

          default:
               break;
     }

     const diferencia = new Date().getFullYear() - this.year;
     cantidad -= ((diferencia * 3) * cantidad) / 100;
 
    if(this.tipo === 'basico') {
         cantidad *= 1.30;
    } else {
         cantidad *= 1.50;
    }

     return cantidad;
}

function Interfaz() {}

Interfaz.prototype.llenarOpciones = () => {
     const max = new Date().getFullYear();
     const min = max - 20;

     const selectYear = document.querySelector('#year');
 
     for(let i = max; i > min; i--){
         let opcion = document.createElement('OPTION');
         opcion.value = i;
         opcion.textContent = i;

         selectYear.appendChild(opcion);
     }
 }

Interfaz.prototype.mostrarMensaje = (mensaje, tipo) => {
     const div = document.createElement('DIV');

     if(tipo === 'error') {
          div.classList.add('error');
     } else {
          div.classList.add('correcto');
     }

     div.classList.add('mensaje','mt-10');
     div.textContent = mensaje;


     formulario.insertBefore(div, document.querySelector('#resultado'));

     setTimeout( () =>  {
          document.querySelector('.mensaje').remove();
     }, 3000);
} 

Interfaz.prototype.mostrarResultado = function(seguro, total) {
     const {marca, year, tipo} = seguro; 
     let textoMarca;

     switch(marca) {
        case '1':
            textoMarca = 'Americano';
            break;

        case '2':
            textoMarca = 'Asiatico';
            break;

        case '3':
            textoMarca = 'Europeo';
            break;

        default:
            break;
    }
     const div = document.createElement('DIV');
     div.classList.add('mt-10')
     div.innerHTML = `
          <p class='header'>Tu Resumen: </p>
          <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca} </span> </p>
          <p class="font-bold">Año: <span class="font-normal"> ${year} </span> </p>
          <p class="font-bold">Tipo: <span class="font-normal"> ${tipo} </span> </p>
          <p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>
     `;

     const resultado = document.querySelector('#resultado');

     const spinner = document.querySelector('#cargando');
     spinner.style.display = 'block';

     setTimeout(() =>  {
          spinner.style.display = 'none';
          resultado.appendChild(div);
     }, 3000);
}

const interfaz = new Interfaz();
const formulario = document.querySelector('#cotizar-seguro');


document.addeListener('DOMContentLoaded', () => {
     interfaz.llenarOpciones();
});

gestionarEnvioFormulario();

function gestionarEnvioFormulario() {
    formulario.addeListener('submit', e => {
        e.preventDefault();
    
     const marca = document.querySelector('#marca').value; 
     const year = document.querySelector('#year').value; 
     const tipo = document.querySelector('input[name="tipo"]:checked').value;

     if(marca === '' || year === '' || tipo === '') {
        interfaz.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
     }
    
     const resultado = document.querySelector('#resultado div');
     if(resultado != null) {
         resultado.remove();
     }
     
     interfaz.mostrarMensaje('Cotizando...', 'correcto');

        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro();

        interfaz.mostrarResultado(total, seguro);
    });
}