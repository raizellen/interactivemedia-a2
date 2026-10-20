// shared pieces for the panels that open on top of the store

// darken everything behind a panel
function dimStore(alpha) {
  push();
  noStroke();
  fill(0, alpha);
  rect(0, 0, 700, 700);
  pop();
}

// the hanging board with a paper pinned on it, shared by the sign and name poster details
var boardPanel = { x: 80, y: 150, w: 540, h: 420 };

function drawBoardPaper(title) {
  push();
  dimStore(130);
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
  text(title, 347, 252);

  // divider
  stroke(...palette.red, 150);
  strokeWeight(2);
  line(160, 270, 534, 270);

  // hint
  noStroke();
  textFont(normalFont);
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