// the flip is an update
function updateHelpPoster() {
  if (helpFlipping) {
    helpFlip += 0.08;

    if (helpFlip >= PI / 2) {
      helpFlip = 0;
      helpFlipping = false;
      helpOpen = true;
    }
  }
}

// the poster on the wall, flips over to the controls
function drawHelpPoster() {
  if (helpOpen) {
    return;
  }

  push();
  var x1 = helpPosterButton.x;
  var y1 = helpPosterButton.y;
  var x2 = x1 + helpPosterButton.w;
  var y2 = y1 + helpPosterButton.h;
  var centerX = x1 + helpPosterButton.w / 2;
  var centerY = y1 + helpPosterButton.h / 2;

  // hover enlarge (shared Button behaviour), then flip around the same centre
  helpPosterButton.applyHover();
  translate(centerX, centerY);
  // flip horizontally
  scale(cos(helpFlip), 1);
  translate(-centerX, -centerY);

  // front poster
  noStroke();
  fill(0, 100);
  rect(x1 + 3, y1 + 3, x2 + 3, y2 + 3);

  stroke(100, 30, 30);
  fill(200, 100, 100);
  rect(x1, y1, x2, y2);

  noStroke();

  fill(100, 120, 200);
  quad(x2, y1, x2, y2, x1 + helpPosterButton.w * 0.27, y2, centerX + helpPosterButton.w * 0.17, y1);

  fill(230);
  rect(x1 + 1, y1 + 30, x1 + 40, y1 + 70);
  rect(x1 + 60, y1 + 20, x1 + 130, y1 + 70, 4);

  // R logo
  stroke(150, 100, 100);
  strokeWeight(2);
  rect(x1 + 8, y1 + 40, x1 + 28, y1 + 50, 4);
  fill(150, 100, 100);
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
  pop();
}

function drawHelpDetails() {
  push();

  // dim back
  noStroke();
  fill(0, 100);
  square(0, 0, 700);

  // border
  fill(0, 60);
  rect(62, 132, 652, 578);

  // frame
  stroke(50, 80, 150);
  strokeWeight(4);
  fill(100, 120, 250);
  rect(45, 110, 655, 580);

  // paper
  noStroke();
  fill(255, 245, 215);
  rect(65, 130, 635, 560);

  // header
  fill(50, 80, 150);
  rect(65, 130, 635, 220);

  fill(250, 190, 80);
  circle(105, 175, 28);
  circle(595, 175, 28);

  fill(255, 245, 215);
  textFont(thickFont);
  textAlign(CENTER, CENTER);
  textSize(56);
  text("CONTROLS", 350, 165);

  fill(255, 220, 155);
  textFont(normalFont);
  textSize(17);
  text("HOW TO EXPLORE THE STORE", 350, 205);

  textAlign(LEFT, CENTER);
  fill(170, 55, 45);
  textFont(thickFont);
  textSize(23);
  text("01  EXPLORE", 95, 255);

  // divider
  stroke(225, 175, 120);
  strokeWeight(2);
  line(95, 273, 605, 273);
  noStroke();

  textFont(normalFont);
  textSize(28);
  fill(45, 55, 65);
  text("• Click the sign to learn about the store", 105, 303);
  text("• Click a bottom packet to view its details", 105, 326);
  text("• Scroll to open/close the store!", 105, 349);
  text("• Type 'a' to answer the questions again p.s. store must be open", 105, 372);

  fill(170, 55, 45);
  textFont(thickFont);
  textSize(23);
  text("02  SOUND EFFECTS", 95, 418);

  stroke(225, 175, 120);
  line(95, 437, 605, 437);
  noStroke();

  const sounds = [
    { key: "K", name: "Karaoke", x: 100, y: 455 },
    { key: "S", name: "Sweeping", x: 355, y: 455 },
    { key: "R", name: "Rooster", x: 100, y: 495 },
    { key: "Y", name: "Youth", x: 355, y: 495 }
  ];

  for (sound of sounds) {
    fill(255, 230, 185);
    rect(sound.x, sound.y, sound.x + 225, sound.y + 32, 6);

    fill(190, 65, 55);
    rect(sound.x + 5, sound.y + 4, sound.x + 35, sound.y + 28, 4);
    fill(255);
    textFont(thickFont);
    textAlign(CENTER, CENTER);
    textSize(17);
    text(sound.key, sound.x + 20, sound.y + 16);

    fill(45, 55, 65);
    textFont(normalFont);
    textAlign(LEFT, CENTER);
    textSize(24);
    text(sound.name, sound.x + 45, sound.y + 16);
  }

  fill(50, 80, 150);
  rect(65, 535, 635, 560);

  fill(255, 245, 215);
  textFont(normalFont);
  textAlign(CENTER, CENTER);
  textSize(17);
  text("PRESS A KEY TO TOGGLE ITS SOUND", 350, 548);

  // close button
  closeHelpButton.applyHover();
  var closeX = closeHelpButton.x;
  var closeY = closeHelpButton.y;
  var closeRight = closeX + closeHelpButton.w;
  var closeBottom = closeY + closeHelpButton.h;
  stroke(150, 80, 50);
  strokeWeight(5);
  fill(250, 120, 100);
  rect(closeX, closeY, closeRight, closeBottom);
  line(closeX + 10, closeY + 10, closeRight - 10, closeBottom - 10);
  line(closeRight - 10, closeY + 10, closeX + 10, closeBottom - 10);
  pop();
}