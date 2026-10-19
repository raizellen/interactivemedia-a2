function drawSign() {
  push();
  signButton.applyHover();

  fill(0, 100); //shadow
  rect(75, 90, 575, 180);

  fill(250, 210, 190); //bg
  rect(70, 80, 570, 170);

  fill(0);
  textSize(55);
  text("SARI SARI STORE", 100, 140);
  pop();
}

var signPanel = { x: 80, y: 150, w: 540, h: 420 };

function drawSignDetails() {
  push();

  // dim the store behind
  noStroke();
  fill(0, 130);
  rect(0, 0, 700, 700);

  drawSignRopes();
  drawSignboard();

  // paper pinned to the board
  noStroke();
  fill(0, 70);
  rect(128, 198, 578, 538); // shadow
  stroke(200, 185, 150);
  strokeWeight(2);
  fill(250, 242, 215);
  rect(122, 192, 572, 532);

  drawTape(160, 194, -0.35);
  drawTape(534, 194, 0.35);

  textAlign(CENTER);
  noStroke();
  fill(195, 47, 39);
  textSize(34);
  text("ABOUT THE PROJECT", 347, 252);

  // divider
  stroke(195, 47, 39, 150);
  strokeWeight(2);
  line(160, 270, 534, 270);

  noStroke();
  fill(70, 40, 20);
  textFont(normalFont);
  textAlign(LEFT);
  textSize(26);
  text(
    "Data self-portrait exploring connection to culture represented by a dari sari store commonly found in the Philippines!",
    150, 290, 544, 520
  );
  text(
    "This project was created for Interactive Media: Assignment 2 :)",
    150, 398, 544, 520
  );

  // hint
  textAlign(CENTER);
  textSize(20);
  fill(150, 110, 70);
  text("click outside the sign to close", 347, 521);
  pop();
}

function drawTape(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  noStroke();
  fill(235, 200, 80, 170);
  rect(-30, -9, 30, 9);
  pop();
}