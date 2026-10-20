function mousePressed() {
  // sign details open - a click outside the board closes it, inside does nothing
  if (signOpen) {
    if (!collidePointRect(mouseX, mouseY, signPanel.x, signPanel.y, signPanel.w, signPanel.h)) {
      signOpen = false;
    }
    return;
  }

  // packet details open - same idea, click outside the card to close
  if (selectedPacket) {
    if (!collidePointRect(mouseX, mouseY, packetPanel.x, packetPanel.y, packetPanel.w, packetPanel.h)) {
      selectedPacket = null;
    }
    return;
  }

  // poster details open
  if (namePosterOpen) {
    if (!collidePointRect(mouseX, mouseY, namePosterPanel.x, namePosterPanel.y, namePosterPanel.w, namePosterPanel.h)) {
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
  if (starting || conversationActive()) {
    return false;
  }

  // remember which way the shutter is going
  shutterDirection = event.delta > 0 ? "opening" : "closing";

  if (event.delta > 0 && closing > 0) {
    closing -= 1;
  } else if (event.delta < 0 && closing < 130){
    closing += 1;
  }

  return false; // Prevents the browser window from scrolling
}