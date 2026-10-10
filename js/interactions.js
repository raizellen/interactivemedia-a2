function mousePressed() {
  if (
    !posterFlipping &&
    mouseX > 400 &&
    mouseX < 550 &&
    mouseY > 560 &&
    mouseY < 650 &&
    !posterBack
  ) {
    posterFlipping = true;
  }

  if (
    posterBack &&
    mouseX > 590 &&
    mouseX < 640 &&
    mouseY > 130 &&
    mouseY < 180
  ) {
    posterBack = false;
  }
}

function mouseWheel(event) {
  if (event.delta > 0 && closing > 0) {
    closing -= 1;
  } else if (event.delta < 0 && closing < 130){
    closing += 1;
  }

  return false; // Prevents the browser window from scrolling
}

function keyPressed() {
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
}