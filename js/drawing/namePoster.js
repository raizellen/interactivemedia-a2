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

function drawNamePosterDetails() {
  push();
  drawBoardPaper("LITTLE EASTER EGGS");

  noStroke();
  fill(...palette.textBrown);
  textFont(normalFont);
  textAlign(LEFT);
  textSize(26);
  text("• This poster is my name in Baybayin!", 150, 310);
  text("• This text is a custom font I made :)", 150, 340);
  text("• The help poster has a monogram of my initials", 150, 370);
  text("• The help poster has my birthday and the subject code", 150, 400);
  pop();
}