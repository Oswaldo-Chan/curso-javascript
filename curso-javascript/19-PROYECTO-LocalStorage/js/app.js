const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

eventListeners();

function eventListeners() {
     formulario.addEventListener('submit', agregarTweet);

     document.addEventListener('DOMContentLoaded', () => {
          tweets = JSON.parse(localStorage.getItem('tweets') ) || [];
          crearHTML();
     });
}

function agregarTweet(e) {
     e.preventDefault();
     const tweet = document.querySelector('#tweet').value;
     
     if(tweet === '') {
          mostrarError('El mensaje no puede estar vacio');
          return;
     }

     const tweetObj = {
          id: Date.now(),
          tweet
     }

     tweets = [...tweets, tweetObj];

     crearHTML();
     formulario.reset();
}

function mostrarError(error) {
     const mensajeError = document.createElement('P');
     mensajeError.textContent = error;
     mensajeError.classList.add('error');

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeError);

     setTimeout(() => {
          mensajeError.remove();
     }, 3000);
}

function crearHTML() {
     limpiarHTML();
     
     if(tweets.length > 0) {
          tweets.forEach(tweet =>  {
               const botonBorrar = document.createElement('A');
               botonBorrar.classList.add('borrar-tweet');
               botonBorrar.textContent = 'X';

               botonBorrar.onclick = () => {
                    borrarTweet(tweet.id);
                }
     
               const li = document.createElement('LI');

               li.textContent = tweet.tweet;
               li.appendChild(botonBorrar);
               listaTweets.appendChild(li);
          });
     }

     sincronizarStorage();
}

function borrarTweet(id) {
     tweets = tweets.filter(tweet => tweet.id !== id);
     crearHTML();
 }

function sincronizarStorage() {
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML() {
     while(listaTweets.firstChild) {
          listaTweets.removeChild(listaTweets.firstChild);
     }
}