function drawPoster() {
  push();

  // name poster
  fill(0, 100);
  rect(405, 265, 495, 325);
  stroke(80, 30, 30);
  fill(200, 200, 150);
  rect(400, 260, 490, 320);

  noStroke();
  fill(100, 50, 50);
  textSize(20);
  text("ᜍᜒᜐᜒᜎ᜔ \nᜎᜓᜁᜐ᜔", 420, 282);

  //hover
  var enlarge = 1;
  if (
    mouseX > 400 &&
    mouseX < 550 &&
    mouseY > 560 &&
    mouseY < 650 &&
    !posterBack
  ) {
    enlarge = 1.1;
  }

  // flip
  if (posterFlipping) {
    posterFlip += 0.08;

    if (posterFlip >= PI / 2) {
      posterFlip = 0;
      posterFlipping = false;
      posterBack = true;
    }
  }

  if (!posterBack) {
    translate(475, 605);
    scale(enlarge);
    // flip horizontally
    scale(cos(posterFlip), 1);
    translate(-475, -605);

    // front poster
    fill(0, 100);
    rect(403, 563, 553, 653);

    stroke(100, 30, 30);
    fill(200, 100, 100);
    rect(400, 560, 550, 650);

    noStroke();

    fill(100, 120, 200);
    quad(550, 560, 550, 650, 440, 650, 500, 560);

    fill(230);
    rect(401, 590, 440, 630);
    rect(460, 580, 530, 630, 4);

    // R logo
    stroke(150,100,100);
    strokeWeight(2);
    rect(408,600,428,610,4);
    fill(150,100,100);
    rect(408,600,413,620);
    line(413,620,425,620);
    line(434,620,434,610);
    line(413,610,434,620);

    stroke(0);
    fill(255);
    textSize(15);
    text("₱715", 520, 575);

    fill(220, 180, 60);
    text("TEXT 31080", 460, 643);

    fill(40, 70, 150);
    textSize(25);
    text("?HELP", 464, 610);
  }
  pop();
}