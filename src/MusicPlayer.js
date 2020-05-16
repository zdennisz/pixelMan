import defaultSoundTrack from './MusicResources/soundTrack.mp3'

var audio;


export function pauseMusic(url) {
    audio.pause();
}


export function playMusic(url) {
    audio.play();
}
export function increaseVol() {
    if (audio.volume < 0.9) {
        audio.volume = audio.volume + 0.1;
    }

}

export function decreaseVol() {
    if (audio.volume > 0.1) {
        audio.volume = audio.volume - 0.1;
    }

}
export function setTrack(url) {
    if (url === undefined) {
        audio = new Audio(defaultSoundTrack);
    } else {
        audio = new Audio(url);
    }
    audio.volume = 0.2;
}
