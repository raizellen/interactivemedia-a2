function preload() {
  karaoke = loadSound('./assets/sounds/karaoke.mp3');
  kidsPlaying = loadSound('./assets/sounds/kids-playing.mp3');
  rooster = loadSound('./assets/sounds/rooster.mp3');
  sweeping = loadSound('./assets/sounds/sweeping.mp3');
}

function setupVolume(){
  karaoke.setVolume(0.7);
  kidsPlaying.setVolume(0.6);
  rooster.setVolume(0.5);
}