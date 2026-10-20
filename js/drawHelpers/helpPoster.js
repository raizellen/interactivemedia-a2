function drawHelp() {
  push();
  fill(0, 100);
  square(0, 0, 700);

  stroke(50, 80, 150);
  strokeWeight(4);
  fill(100, 120, 250);
  rect(50, 120, 650, 580);

  noStroke();
  fill(255);
  rect(75, 145, 625, 555);

  fill(0);
  textSize(70);
  text("CONTROLS", 180, 210);
  textFont(normalFont);
  textSize(40);
  text("• Click on the sign to view description", 120, 280);
  text("• Click on a bottom packet to view details", 120, 320);
  text("• Toggle sound using the following keys:", 120, 360);
  text("K   Karaoke", 180, 400);
  text("S   Sweeping", 400, 400);
  text("R   Rooster", 180, 430);
  text("Y   Youth", 400, 430);
  text("• Scroll to close the store!", 120, 470);

  closeHelpButton.applyHover();

  stroke(150, 80, 50);
  fill(250, 120, 100);
  rect(590, 130, 640, 180);
  line(595, 135, 635, 175);
  line(635, 135, 595, 175);
  pop();
}