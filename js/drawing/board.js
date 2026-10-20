function drawBoardRopes() {
  push();
  stroke(110, 80, 45);
  strokeWeight(5);
  line(160, 0, 160, 160);
  line(540, 0, 540, 160);

  // rope highlight
  stroke(170, 135, 85);
  strokeWeight(1.5);
  line(158, 0, 158, 160);
  line(538, 0, 538, 160);
  pop();
}

function drawBoard() {
  push();

  // outer frame
  fill(...palette.brown);
  rect(80, 150, 620, 570);

  // inner board
  fill(186, 143, 76);
  rect(95, 165, 605, 555);

  // planks
  stroke(150, 110, 55);
  strokeWeight(1);
  for (var y = 193; y < 555; y += 28) {
    line(95, y, 605, y);
  }

  // nails
  stroke(50);
  strokeWeight(1);
  fill(120);
  var nails = [
    [112, 182],
    [588, 182],
    [112, 538],
    [588, 538],
  ];
  for (var n of nails) {
    circle(n[0]-5, n[1]-5, 10); // ellipse mode corner so minus 5 to centre
  }
  pop();
}