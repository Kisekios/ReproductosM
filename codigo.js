const playSong = document.getElementsByClassName('play');
const pauseSong = document.getElementsByClassName('pause');
const volumenBtn = document.querySelector('.volumen');


let audio;

for (elemento of playSong) {
    elemento.addEventListener('click', function () {
        let cancion = this.getAttribute('id');
        audio = new Audio(`./musica/${cancion}.mp3`);
        audio.play()
    })
}

for (elemento of pauseSong) {
    elemento.addEventListener('click', function () {
        audio.pause();
    })
}

volumenBtn.addEventListener('click', function(){
    let vol = this.value;
    audio.volume = vol;
})