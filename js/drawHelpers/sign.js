function drawSign() {
  push();
  signButton.applyHover();

  var x = signButton.x;
  var y = signButton.y;
  var w = signButton.w;
  var h = signButton.h;

  fill(0, 100); //shadow
  rect(x + 5, y + 10, x + w + 5, y + h + 10);

  fill(242, 112, 89); // border
  rect(x, y, x + w, y + h);

  fill(247, 157, 101); //bg
  rect(x + 5, y + 5, x + w - 5, y + h - 5);

  fill(247, 178, 103);
  quad(x + 5, y + 5, x + w / 2, y + 5, x + w - 5, y + h - 5, x + w / 2 - 10, y + h - 5);

  fill(...palette.red);
  stroke(98, 23, 8);
  strokeWeight(5);
  textSize(h * 0.61);
  text("SARI-SARI STORE", x + w / 2, y + h * 2 / 3);
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
  stroke(...palette.paperEdge);
  strokeWeight(2);
  fill(...palette.paper);
  rect(122, 192, 572, 532);

  drawTape(160, 194, -0.35);
  drawTape(534, 194, 0.35);

  textAlign(CENTER);
  noStroke();
  fill(...palette.red);
  textSize(34);
  text("ABOUT THE PROJECT", 347, 252);

  // divider
  stroke(...palette.red, 150);
  strokeWeight(2);
  line(160, 270, 534, 270);

  noStroke();
  fill(...palette.textBrown);
  textFont(normalFont);
  textAlign(LEFT);
  textSize(26);
  text(
    "Data self-portrait exploring connection to culture represented by a dari sari store commonly found in the Philippines!",
    150, 290, 544, 520
  );
  text(
    "This project was created for Interactive Media: Assignment 2",
    150, 398, 544, 520
  );

  // hint
  textAlign(CENTER);
  textSize(20);
  fill(...palette.hintBrown);
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