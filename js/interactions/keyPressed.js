function keyPressed() {
  userStartAudio()

  // answer the questions again once the conversation is over
  if (key === 'a' && dialoguePhase === "done") {
    replayQuestions();
    return false;
  }

  if (key === 'k'){
    karaoke.amp(0.7);
    if (karaoke.isPlaying()){
      karaoke.stop();
    } else {
      karaoke.play();
      karaoke.loop();
    }
  }

  if (key === 'y'){
    kidsPlaying.amp(0.5);
    if (kidsPlaying.isPlaying()){
      kidsPlaying.stop();
    } else {
      kidsPlaying.play();
      kidsPlaying.loop();
    }
  }

  if (key === 'r'){
    rooster.amp(0.2);
    if (rooster.isPlaying()){
      rooster.stop();
    } else {
      rooster.play();
      rooster.loop();
    }
  }

  if (key === 's'){
    sweeping.amp(0.3);
    if (sweeping.isPlaying()){
      sweeping.stop();
    } else {
      sweeping.play();
      sweeping.loop();
    }
  }
}