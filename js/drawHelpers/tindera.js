function updateTindera() {
  var target = shutterDirection === "opening" ? tinderaWindowX : tinderaAwayX;
  var diff = target - tinderaX;

  tinderaMoving = abs(diff) > 0.5; // 0.5 for tolerance (eg for if speed or window position changed)
  tinderaX += constrain(diff, -4, 4); // walks 4px per frame
}

function tinderaAtWindow() {
  return abs(tinderaX - tinderaWindowX) < 1;
}

function drawTindera() {
  var talking = (dialoguePhase === "talking" || dialoguePhase === "asking") && !typingDone();

  // bobs while walking, breathes slowly while standing
  var bob = tinderaMoving ? -abs(sin(frameCount * 0.35)) * 4 : sin(frameCount * 0.06);

  push();
  rectMode(CENTER);
  ellipseMode(CENTER);
  translate(tinderaX, 352 + bob); // make (0, 0) the middle of face
  stroke(60, 30, 20);
  strokeWeight(2);

  // hair behind her shoulders
  fill(40, 25, 20);
  ellipse(0, 6, 62, 70);

  // neck
  fill(222, 170, 130);
  rect(0, 30, 16, 14);

  // face
  fill(222, 170, 130);
  ellipse(0, 0, 50, 54);

  // fringe
  noStroke();
  fill(40, 25, 20);
  arc(0, -3, 54, 52, PI, TWO_PI);

  // bun
  stroke(60, 30, 20);
  strokeWeight(2);
  ellipse(0, -34, 24, 22);

  // eyes, blinking now and then
  if (frameCount % 220 < 6) { // blink for 6 frames every 220
    stroke(40, 25, 20);
    strokeWeight(2);
    line(-12, 3, -6, 3);
    line(6, 3, 12, 3);
  } else {
    noStroke();
    fill(40, 25, 20);
    ellipse(-9, 2, 5, 6);
    ellipse(9, 2, 5, 6);
  }

  // blush
  noStroke();
  fill(235, 120, 120, 110);
  ellipse(-15, 12, 9, 6);
  ellipse(15, 12, 9, 6);

  // mouth moves while she is talking
  if (talking) {
    stroke(90, 30, 30);
    strokeWeight(1);
    fill(150, 50, 50);
    ellipse(0, 15, 10, 3 + abs(sin(frameCount * 0.5)) * 7);
  } else {
    noFill();
    stroke(120, 50, 50);
    strokeWeight(2);
    arc(0, 12, 14, 8, 0, PI);
  }

  // blouse
  fill(95, 160, 190);
  rect(0, 90, 112, 120, 36, 36, 0, 0);

  // collar
  fill(250);
  triangle(-12, 30, 12, 30, 0, 44);

  // apron
  fill(225, 140, 60);
  rect(0, 94, 56, 112, 6, 6, 0, 0);
  line(-18, 40, -30, 32);
  line(18, 40, 30, 32);
  pop();
}