function drawNamePoster() {
  push();
  namePosterButton.applyHover();
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
}

var namePosterPanel = { x: 80, y: 150, w: 540, h: 420 };

function drawNamePosterDetails(){
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
  text("LITTLE EASTER EGGS", 347, 252);

  // divider
  stroke(...palette.red, 150);
  strokeWeight(2);
  line(160, 270, 534, 270);

  noStroke();
  fill(...palette.textBrown);
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
  fill(...palette.hintBrown);
  text("click outside the sign to close", 347, 521);
  pop();
}