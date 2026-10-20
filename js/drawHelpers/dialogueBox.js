var dialogueBox = { x: 60, y: 520, w: 580, h: 160 }; // values needed to position input field

function drawDialogue() {
  drawReplyChip();

  if (conversationActive()) {
    drawDialogueBox();
  }
}

function drawReplyChip() {
  var step;

  if (dialoguePhase === "reply") {
    step = script[scriptIndex];
  } else {
    return;
  }

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
  var b = dialogueBox;
  var tailX = 250;

  push();

  // shadow
  noStroke();
  fill(0, 90);
  rect(b.x + 6, b.y + 7, b.x + b.w + 6, b.y + b.h + 7, 18);

  // box
  stroke(110, 70, 35);
  strokeWeight(4);
  fill(250, 242, 215);
  rect(b.x, b.y, b.x + b.w, b.y + b.h, 18);

  // tail pointing up towards the window
  noStroke();
  fill(250, 242, 215);
  triangle(tailX - 14, b.y + 2, tailX + 14, b.y + 2, tailX - 6, b.y - 24);
  stroke(110, 70, 35);
  strokeWeight(4);
  line(tailX - 14, b.y, tailX - 6, b.y - 24);
  line(tailX + 14, b.y, tailX - 6, b.y - 24);

  // name tab
  stroke(110, 25, 20);
  strokeWeight(3);
  fill(195, 47, 39);
  rect(b.x + 24, b.y - 20, b.x + 150, b.y + 4, 8);
  noStroke();
  fill(250, 235, 200);
  textFont(thickFont);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("TINDERA", b.x + 87, b.y - 8);

  // typed out letter by letter
  textFont(normalFont);
  textSize(32);
  textAlign(LEFT, TOP);
  fill(70, 40, 20);
  text(dialogueText.substring(0, floor(charsShown)), b.x + 25, b.y + 20);

  if (typingDone() && dialogueTranslation !== "") {
    textSize(24);
    fill(150, 110, 70);
    text("(" + dialogueTranslation + ")", b.x + 25, b.y + 50);
  }

  // show alert
  if (dialoguePhase === "asking" && inputNotice !== "") {
    textSize(26);
    fill(195, 47, 39);
    text(inputNotice, b.x + 25, b.y + 80);
  }

  // bouncing arrow = click to carry on
  if (dialoguePhase === "talking" && typingDone() && !script[scriptIndex + 1]) {
    var bounce = sin(frameCount * 0.15) * 3;
    fill(219, 124, 38);
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

  stroke(110, 70, 35);
  strokeWeight(3);
  fill(219, 124, 38);
  rect(x1, y1, x2, y2, 10);

  noStroke();
  fill(250, 235, 200);
  textFont(thickFont);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("OK", (x1 + x2) / 2, (y1 + y2) / 2);
  pop();
}