const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition =  webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.innerHTML = "escuchando";
    };
    
    recognition.onspeechend = function() {
        salida.textContent = "se detuvo";
        recognition.stop();
    };
  
    recognition.onresult = function(e) {
        console.log(e.results);

        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('P');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('P');
        seguridad.innerHTML =  `Seguridad:  ${parseInt( confidence*100)}%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
  

}