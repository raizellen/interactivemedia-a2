function drawPoster() {
  push();

  // name poster
  push();
    noStroke();
    fill(0, 65);
    rect(405, 265, 500, 330);

    stroke(80, 40, 35);
    strokeWeight(2);
    fill(120, 65, 45);
    rect(400, 260, 495, 325);

    noStroke();
    fill(225, 175, 90);
    rect(405, 265, 490, 320);

    fill(255, 235, 190);
    rect(409, 269, 486, 316);

    fill(100, 45, 40);
    textFont(baybayinFont);
    textSize(16);
    text("ᜍᜒᜐᜒᜎ᜔\nᜎᜓᜁᜐ᜔", 447, 288);
  pop();

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
    // hover enlarge (shared Button behaviour), then flip around the same centre
    helpButton.applyHover();
    translate(475, 605);
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
    text("₱715", 530, 575);

    fill(220, 180, 60);
    text("TEXT 31080", 475, 643);

    fill(40, 70, 150);
    textSize(25);
    text("?HELP", 495, 610);
  }
  pop();
}