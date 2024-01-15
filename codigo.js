/* Llamadas al HTML */


const playSong = document.querySelector('.playOrPause');
const volumenBtn = document.querySelector('.volumen');
const songs = document.getElementsByClassName('song');
const containerSongs = document.querySelector('.titulo');
const barIcon = document.createElement('span')


/* Variables globales */


const songList = [];
let audio;
let reproduciendoSong = false;
let cancion;


/* Acciones/Funciones de insercion al HTML */


barIcon.classList.add('material-icons');
barIcon.id = 'icon';
playSong.appendChild(barIcon)

function playOrPause() { //Cambio de boton en el html
    if (cancion === undefined || reproduciendoSong === false) {
        const cambio = document.getElementById('icon')
        cambio.textContent = 'play_circle'
    } else {
        const cambio = document.getElementById('icon')
        cambio.textContent = 'pause_circle'
    }
}

function renderSongs(arreglo) {
    for (putSong of arreglo) {
        const nameSong = document.createElement('li');
        nameSong.classList.add('song');
        nameSong.setAttribute('id', putSong);
        nameSong.innerText = putSong;
        containerSongs.appendChild(nameSong);
    }
}


/* Funciones de reproduccion/pausa/volumen */


function reproducirSong() {
    for (elemento of songs) {
        elemento.addEventListener('click', function () {
            cancion = this.getAttribute('id');
            playing(cancion);
        })
    }
}

function playing(cancion) {
    if (reproduciendoSong === false) {
        audio = new Audio(`./musica/${cancion}.mp3`);
        audio.play()
        reproduciendoSong = true;
        playOrPause();
    } else {
        audio.pause();
        reproduciendoSong = false;
        playing(cancion);
    }
}

function pausebtn (){
    audio.pause();
    reproduciendoSong = false;
    playOrPause();
}

volumenBtn.addEventListener('click', function () {
    let vol = this.value;
    audio.volume = vol;
})

playSong.addEventListener('click', function () {
    if (cancion !== undefined) {
        if (reproduciendoSong === false) {
            playing(cancion)
        } else { pausebtn() }
    } else { console.log('No se ha seleccionado una cancion') }
})


/* Lista de canciones */


songList.push(`Vonikk Phoenix`)
songList.push('Vonikk Adrenalize')
songList.push('Vonikk Get Kraz')
songList.push('Vonikk Hellfir')
songList.push('Vonikk Nova')
songList.push('Vonikk Submarin')
songList.push('Vonikk Supersta')


/* Llamadas a funciones */


renderSongs(songList);
reproducirSong();
playOrPause();



