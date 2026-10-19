
function keyPressed() {
  userStartAudio()

  if (key === 'a' && inputValue.elt.style.display === 'none') {
    inputValue.show();
    inputValue.elt.focus();
    return false;
  }
  
  if (key === 'Enter') {
    answers.food = inputValue.value();

    inputValue.value('');
    inputValue.hide();

    writeAnswers(answers);
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
    sweeping.amp(0.5);
    if (sweeping.isPlaying()){
      sweeping.stop();
    } else {
      sweeping.play();
      sweeping.loop();
    }
  }
}