// start or stop a looping sound
function toggleSound(sound, volume) {
  sound.amp(volume);
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
    sound.loop();
  }
}

function keyPressed() {
  userStartAudio()

  // answer the questions again once the conversation is over
  if (key === 'a' && dialoguePhase === "done") {
    replayQuestions();
    return false;
  }

  if (key === 'k'){
    toggleSound(karaoke, 0.7);
  }

  if (key === 'y'){
    toggleSound(kidsPlaying, 0.5);
  }

  if (key === 'r'){
    toggleSound(rooster, 0.2);
  }

  if (key === 's'){
    toggleSound(sweeping, 0.3);
  }
}