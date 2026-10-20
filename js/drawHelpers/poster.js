function drawPoster() {
  push();

  // name poster
  push();
    posterButton.applyHover();
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
    var x1 = helpButton.x;
    var y1 = helpButton.y;
    var x2 = x1 + helpButton.w;
    var y2 = y1 + helpButton.h;
    var centerX = x1 + helpButton.w / 2;
    var centerY = y1 + helpButton.h / 2;

    // hover enlarge (shared Button behaviour), then flip around the same centre
    helpButton.applyHover();
    translate(centerX, centerY);
    // flip horizontally
    scale(cos(posterFlip), 1);
    translate(-centerX, -centerY);

    // front poster
    fill(0, 100);
    rect(x1 + 3, y1 + 3, x2 + 3, y2 + 3);

    stroke(100, 30, 30);
    fill(200, 100, 100);
    rect(x1, y1, x2, y2);

    noStroke();

    fill(100, 120, 200);
    quad(x2, y1, x2, y2, x1 + helpButton.w * 0.27, y2, centerX + helpButton.w * 0.17, y1);

    fill(230);
    rect(x1 + 1, y1 + 30, x1 + 40, y1 + 70);
    rect(x1 + 60, y1 + 20, x1 + 130, y1 + 70, 4);

    // R logo
    stroke(150,100,100);
    strokeWeight(2);
    rect(x1 + 8, y1 + 40, x1 + 28, y1 + 50, 4);
    fill(150,100,100);
    rect(x1 + 8, y1 + 40, x1 + 13, y1 + 60);
    line(x1 + 13, y1 + 60, x1 + 25, y1 + 60);
    line(x1 + 34, y1 + 60, x1 + 34, y1 + 50);
    line(x1 + 13, y1 + 50, x1 + 34, y1 + 60);

    stroke(0);
    fill(255);
    textSize(15);
    text("₱715", x1 + 130, y1 + 15);

    fill(220, 180, 60);
    text("TEXT 31080", centerX, y2 - 7);

    fill(40, 70, 150);
    textSize(25);
    text("?HELP", centerX + 20, centerY + 5);
  }
  pop();
}

var posterPanel = { x: 80, y: 150, w: 540, h: 420 };

function drawPosterDetails(){
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
  text("LITTLE EASTER EGGS", 347, 252);

  // divider
  stroke(195, 47, 39, 150);
  strokeWeight(2);
  line(160, 270, 534, 270);

  noStroke();
  fill(70, 40, 20);
  textFont(normalFont);
  textAlign(LEFT);
  textSize(26);
  text("• This poster is my name in Baybayin!", 150, 310);
  text("• This text is a custom font I made :)", 150, 340);
  text("• The help poster has a monogram of my initials", 150, 370);
  text("• The help poster has my birthday and the subject code", 150, 400);

  // hint
  textAlign(CENTER);
  textSize(20);
  fill(150, 110, 70);
  text("click outside the sign to close", 347, 521);
  pop();
}