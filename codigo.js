const playSong = document.querySelector('.play');
const pauseSong = document.getElementsByClassName('pause');
const volumenBtn = document.querySelector('.volumen');
const songs = document.getElementsByClassName('song');
const containerSongs = document.querySelector('.titulo');

const songList = [];

let audio;
let reproduciendoSong = false;
let cancion;



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
    } else {
        audio.pause();
        reproduciendoSong = false;
        playing(cancion);
    }
}

for (elemento of pauseSong) {
    elemento.addEventListener('click', function () {
        if (reproduciendoSong === true){
            audio.pause();
            reproduciendoSong = false;
        }else { console.log('No se ha seleccionado una cancion') }
    })
}

volumenBtn.addEventListener('click', function () {
    let vol = this.value;
    audio.volume = vol;
})

songList.push(`Vonikk Phoenix`)
songList.push('Vonikk Adrenalize')
songList.push('Vonikk Get Kraz')
songList.push('Vonikk Hellfir')
songList.push('Vonikk Nova')
songList.push('Vonikk Submarin')
songList.push('Vonikk Supersta')



renderSongs(songList);



function renderSongs(arreglo) {
    for (putSong of arreglo) {
        const nameSong = document.createElement('li');
        nameSong.classList.add('song');
        nameSong.setAttribute('id', putSong);
        nameSong.innerText = putSong;
        containerSongs.appendChild(nameSong);
    }
}

playSong.addEventListener('click', function () {
    if (cancion !== undefined ) {
        if (reproduciendoSong === false) {
            playing(cancion)
        }else{console.log('Ya se esta reproduciendo una cancion')}
    } else { console.log('No se ha seleccionado una cancion') }
})
reproducirSong();


