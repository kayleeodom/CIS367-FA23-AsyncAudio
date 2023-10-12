const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio')
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');
const artist = document.getElementById('artist');

const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// load songs
const songs = ['Aidan','Autumn Sun','Best Part of Me','Better Days','I Cant Make You Love Me Cover','Just Relax','Paranormal Is Real','Perfect','Polarity','Your Shoulder'];

// title and artist
const artists = ['Jonathan Ceaser','Bryce Greene','The Dunwells','Lakey','Bryce Greene','Purrple Cat','Leonell Cassio','Ed Sheeran','Ethos','Kaitlyn Thompson']


// keep track of song
let songIndex = 0;

// load song details into DOM
loadSong(songs[songIndex]);

// song details
function loadSong(song){
  title.innerText = song;
  audio.src = `songs/${song}.mp3`;
  cover.src = `albumart/${song}.jpg`;
  // artist
}

// Play Song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause Song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Previous Song
function prevSong(){
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Next Song
function nextSong(){
    songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();

}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
  
// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
}

// Duration & currentTime for Time of Song

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);