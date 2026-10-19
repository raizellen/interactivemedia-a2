function drawStarting() {
  push();

  // dim the store behind
  noStroke();
  fill(0, 120);
  rect(0, 0, 700, 700);

  drawSignRopes();
  drawSignboard();
  drawFlags();
  drawStartTitle();
  pop();

  drawStartButton();
}

function drawSignRopes() {
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

function drawSignboard() {
  push();

  // outer frame
  fill(110, 70, 35);
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

function drawFlags() {
  push();
  var flagColours = [
    color(200, 50, 50),
    color(240, 200, 60),
    color(60, 120, 200),
  ];

  // strings
  var stringY = function (x) {
    return 22 + 24 * sin((PI * (x % 350)) / 350);
  };

  noFill();
  stroke(70, 45, 20);
  strokeWeight(2);
  beginShape();
  for (var x = 0; x <= 350; x += 5) {
    vertex(x, stringY(x));
  }
  endShape();
  beginShape();
  for (var x = 350; x <= 700; x += 5) {
    vertex(x, stringY(x));
  }
  endShape();

  // flags
  stroke(70, 45, 20);
  strokeWeight(1);
  for (var i = 25; i < 700; i += 50) {
    var top = stringY(i);
    fill(flagColours[i % 3]);
    triangle(i - 14, top, i + 14, top, i, top + 34);
  }
  pop();
}

function drawStartTitle() {
  push();
  textAlign(CENTER);

  fill(219, 124, 38);
  stroke(195, 47, 39);
  strokeWeight(6);
  textSize(64);
  text("SARI-SARI(LI)", 350, 270);

  fill(250, 235, 200);
  stroke(100, 50, 25);
  textSize(40);
  text("DATA SELF-PORTRAIT", 350, 332);

  // divider
  stroke(110, 70, 35);
  strokeWeight(3);
  line(150, 372, 550, 372);

  noStroke();
  fill(90, 45, 20);
  textFont(normalFont);
  textSize(32);
  text("Interactive Media: Assignment 2", 350, 415);
  pop();
}

function drawStartButton() {
  push();
  startButton.applyHover();

  var x1 = startButton.x;
  var y1 = startButton.y;
  var x2 = startButton.x + startButton.w;
  var y2 = startButton.y + startButton.h;

  // shadow
  noStroke();
  fill(0, 110);
  rect(x1 + 4, y1 + 5, x2 + 4, y2 + 5, 14);

  // button
  stroke(110, 25, 20);
  strokeWeight(4);
  fill(195, 47, 39);
  rect(x1, y1, x2, y2, 14);

  // top highlight
  noStroke();
  fill(255, 255, 255, 40);
  rect(x1 + 6, y1 + 6, x2 - 6, y1 + startButton.h / 2, 10);

  fill(250, 235, 200);
  stroke(110, 25, 20);
  strokeWeight(5);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("BILI BILI PO", x1 + startButton.w / 2, y1 + startButton.h / 2 - 5);

  noStroke();
  fill(230, 215, 180);
  textFont(normalFont);
  textSize(24);
  text("(start)", x1 + startButton.w / 2, y1 + startButton.h / 2 + 20);

  pop();
}