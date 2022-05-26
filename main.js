window.addEventListener('keydown', function (e) {
    //constantes para seleccionar la tecla pulsada
    //audio es el selector de tag (audio) con propiedad (data-key) = al numero de la tecla (keyCode) que fue presionada
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    // key es el selector de la clase (.key) con propiedad (data-key) = al numero de la tecla (keyCode) que fue presionada
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    
    if (!audio) return; //detiene la función si no encuentra la tecla presionada
    audio.currentTime = 0; //repetir sonido si presiono la tecla varias veces
    audio.play();
    key.classList.add('playing') //aplico la clase playing cuando se produce el e de la tecla presionada
});

// función para remover la clase playing
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //  escapa si no tiene la propiedad transform
    this.classList.remove('playing');
}

// selector de todos los elementos con clase (.key) esto genera un nodeList
const keys = document.querySelectorAll('.key');
// itero sobre esos elementos escuchando el evento de finalización de transition para ejecutar la función removeTransition
keys.forEach( key => key.addEventListener('transitionend', removeTransition));