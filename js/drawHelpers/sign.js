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

function drawSignDetails() {
  push();
  drawBoardPaper("ABOUT THE PROJECT");

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
  pop();
}