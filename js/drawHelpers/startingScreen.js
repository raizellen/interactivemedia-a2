function drawStarting() {
  dimStore(120);

  push();
  drawSignRopes();
  drawSignboard();
  drawFlags();
  drawStartTitle();
  pop();

  drawStartButton();
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

  fill(...palette.orange);
  stroke(...palette.red);
  strokeWeight(6);
  textSize(64);
  text("SARI-SARI(LI)", 350, 270);

  fill(...palette.cream);
  stroke(100, 50, 25);
  textSize(40);
  text("DATA SELF-PORTRAIT", 350, 332);

  // divider
  stroke(...palette.brown);
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
  stroke(...palette.darkRed);
  strokeWeight(4);
  fill(...palette.red);
  rect(x1, y1, x2, y2, 14);

  // top highlight
  noStroke();
  fill(255, 255, 255, 40);
  rect(x1 + 6, y1 + 6, x2 - 6, y1 + startButton.h / 2, 10);

  fill(...palette.cream);
  stroke(...palette.darkRed);
  strokeWeight(5);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("PABILI PO", x1 + startButton.w / 2, y1 + startButton.h / 2 - 5);

  noStroke();
  fill(230, 215, 180);
  textFont(normalFont);
  textSize(24);
  text("(start)", x1 + startButton.w / 2, y1 + startButton.h / 2 + 20);

  pop();
}