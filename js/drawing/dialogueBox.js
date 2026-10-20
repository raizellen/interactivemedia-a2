function drawDialogue() {
  drawReplyChip();

  if (conversationActive()) {
    drawDialogueBox();
  }
}

function drawReplyChip() {
  if (dialoguePhase !== "reply") {
    return;
  }

  var step = script[scriptIndex];

  var x1 = replyButton.x;
  var y1 = replyButton.y;
  var x2 = x1 + replyButton.w;
  var y2 = y1 + replyButton.h;

  push();
  replyButton.applyHover();

  noStroke();
  fill(0, 90 );
  rect(x1 + 4, y1 + 5, x2 + 4, y2 + 5, 14);

  stroke(25, 95, 105, 255 );
  strokeWeight(4);
  fill(70, 165, 175, 255 );
  rect(x1, y1, x2, y2, 14);

  noStroke();
  fill(255, 255, 255, 40 );
  rect(x1 + 6, y1 + 6, x2 - 6, y1 + replyButton.h / 2, 10);

  textAlign(CENTER, CENTER);
  textFont(normalFont);
  fill(255, 255 );
  textSize(28);
  if (step.translation) {
    text(step.text, (x1 + x2) / 2, y1 + 20);
    textSize(20);
    fill(215, 240, 240, 255 );
    text("(" + step.translation + ")", (x1 + x2) / 2, y1 + 42);
  } else {
    text(step.text, (x1 + x2) / 2, (y1 + y2) / 2);
  }
  pop();
}

function drawDialogueBox() {
  var b = { x: 60, y: 420, w: 580, h: 130 };

  push();

  // shadow
  noStroke();
  fill(0, 90);
  rect(b.x + 6, b.y + 7, b.x + b.w + 6, b.y + b.h + 7, 18);

  // box
  stroke(...palette.brown);
  strokeWeight(4);
  fill(...palette.paper);
  rect(b.x, b.y, b.x + b.w, b.y + b.h, 18);

  // tail pointing up towards the window
  noStroke();
  fill(...palette.paper);
  triangle(260, b.y + 2, 300, b.y + 2, 320, b.y - 24);
  stroke(...palette.brown);
  strokeWeight(4);
  line(260, b.y, 320, b.y - 24);
  line(300, b.y, 320, b.y - 24);

  // name tab
  stroke(...palette.darkRed);
  strokeWeight(3);
  fill(...palette.red);
  rect(b.x + 24, b.y - 10, b.x + 150, b.y + 14, 8);
  noStroke();
  fill(...palette.cream);
  textFont(thickFont);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("TINDERA", b.x + 87, b.y + 2);

  // typed out letter by letter
  textFont(normalFont);
  textSize(32);
  textAlign(LEFT, TOP);
  fill(...palette.textBrown);
  text(dialogueText.substring(0, floor(charsShown)), b.x + 25, b.y + 20);

  if (typingDone() && dialogueTranslation !== "") {
    textSize(24);
    fill(...palette.hintBrown);
    text("(" + dialogueTranslation + ")", b.x + 25, b.y + 50);
  }

  // show alert
  if (dialoguePhase === "asking" && inputNotice !== "") {
    textSize(24);
    fill(...palette.red);
    text(inputNotice, b.x + 25, b.y + 50);
  }

  // bouncing arrow = click to carry on
  if (dialoguePhase === "talking" && typingDone() && !script[scriptIndex + 1]) {
    var bounce = sin(frameCount * 0.15) * 3;
    fill(...palette.orange);
    triangle(
      b.x + b.w - 49, b.y + b.h - 36 + bounce,
      b.x + b.w - 31, b.y + b.h - 36 + bounce,
      b.x + b.w - 40, b.y + b.h - 24 + bounce
    );
  }

  if (dialoguePhase === "asking" && inputShown) {
    drawSubmitButton();
  }
  pop();
}

function drawSubmitButton() {
  var x1 = submitButton.x;
  var y1 = submitButton.y;
  var x2 = x1 + submitButton.w;
  var y2 = y1 + submitButton.h;

  push();
  submitButton.applyHover();

  stroke(...palette.brown);
  strokeWeight(3);
  fill(...palette.orange);
  rect(x1, y1, x2, y2, 10);

  noStroke();
  fill(...palette.cream);
  textFont(thickFont);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("OK", (x1 + x2) / 2, (y1 + y2) / 2);
  pop();
}