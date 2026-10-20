function drawInside(pg) {
  pg.rectMode(CORNERS);
  pg.ellipseMode(CORNER);
  pg.noStroke();
  pg.textFont(thickFont);

  pg.fill(200, 180, 150); // background
  pg.rect(50, 200, 700, 500);

  //shelf
  pg.fill(100, 60, 20);
  pg.rect(50, 280, 500, 300);
  // cabinet
  pg.rect(50, 380, 400, 400);
  pg.rect(380, 380, 400, 500);

  // grey shelving
  pg.fill(150);
  pg.rect(50, 460, 380, 470);
  pg.rect(600, 200, 620, 500);

  // box
  pg.stroke(50);
  pg.fill(100);
  pg.rect(320, 350, 390, 380, 8);
  pg.stroke(0);
  pg.line(320, 360, 390, 360);
  pg.noStroke();
  pg.fill(130);
  pg.rect(325, 351, 385, 353, 5);
  pg.fill(100, 80, 30);
  pg.rect(350, 355, 360, 365, 2);
  pg.fill(150, 120, 50);
  pg.rect(352, 357, 358, 359, 1);

  // items
  pg.push();
  pg.colorMode(HSB);
  for (var x = 505; x < 700; x += w) {
    var w = random(30, 70);
    var y = random(40, 80);
    var colour = random(0, 360);
    var labelY = 300 - y + y * 0.25;
    var labelH = y * 0.5;

    pg.stroke(colour, 70, 50);
    pg.fill(colour, 50, 70);
    pg.rect(x, 300, x + w, 300 - y);
    pg.stroke(50);
    pg.fill(150);
    pg.rect(x, 300 - y, x + w, 290 - y);
    for (var lid = x; lid < x + w; lid += 5) {
      pg.line(lid, 300 - y, lid, 290 - y);
    }
    pg.fill(random(0, 360), 5, 95);
    pg.rect(x, labelY, x + w, labelY + labelH);
    pg.noStroke();
    pg.fill(60);
    pg.textSize(15);
    pg.text("something", random(x, x + w), labelY + labelH / 2 + 5);
  }
  pg.pop();

  // bread
  pg.fill(180, 120, 70);
  for (var breadX = 70; breadX < 380; breadX += 45) {
    pg.arc(breadX, 445, 40, 35, PI, TWO_PI);
  }

  pg.fill(190, 130, 80);
  for (var breadX = 70; breadX < 345; breadX += random(35, 40)) {
    pg.rect(breadX, 500, breadX + 35, 480, 8);
  }

  // glass
  pg.fill(80, 140, 200, 100);
  pg.rect(50, 400, 380, 500);
}