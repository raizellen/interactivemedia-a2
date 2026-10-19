function mousePressed() {
  Button.handlePress();
}

function mouseWheel(event) {
  if (starting) {
    return false; // stops the page scrolling while on starting screen
  }

  if (event.delta > 0 && closing > 0) {
    closing -= 1;
  } else if (event.delta < 0 && closing < 130){
    closing += 1;
  }

  return false; // Prevents the browser window from scrolling
}