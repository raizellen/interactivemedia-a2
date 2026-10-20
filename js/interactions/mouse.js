// true when the click is outside the panel
function clickedOutside(panel) {
  return !collidePointRect(mouseX, mouseY, panel.x, panel.y, panel.w, panel.h);
}

function mousePressed() {
  // details open - a click outside the board closes it, inside does nothing
  if (signOpen) {
    if (clickedOutside(boardPanel)) {
      signOpen = false;
    }
    return;
  }

  // packet details open - same idea, click outside the card to close
  if (selectedPacket) {
    if (clickedOutside(packetPanel)) {
      selectedPacket = null;
    }
    return;
  }

  // name poster details open
  if (namePosterOpen) {
    if (clickedOutside(boardPanel)) {
      namePosterOpen = false;
    }
    return;
  }

  // conversation on - clicks go to the dialogue
  if (conversationActive()) {
    clickDialogue();
    return;
  }

  Button.handlePress();
}

function mouseWheel(event) {
  if (onStartScreen || conversationActive()) {
    return false;
  }

  // remember which way the shutter is going
  shutterDirection = event.delta > 0 ? "opening" : "closing";

  if (event.delta > 0 && shutterProgress > 0) {
    shutterProgress -= 1;
  } else if (event.delta < 0 && shutterProgress < 130){
    shutterProgress += 1;
  }

  return false; // Prevents the browser window from scrolling
}