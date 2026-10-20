function drawOutside(pg) {
  pg.rectMode(CORNERS);
  pg.ellipseMode(CORNER);
  pg.noStroke();
  pg.textFont(thickFont);

  drawBench(pg);
  drawWood(pg);
  drawBottle(pg);
  drawPost(pg);
  drawNet(pg);
  drawFrame(pg);
  drawShadows(pg);
  drawRoof(pg);
}

function drawWood(pg){
  pg.push();
  pg.fill(150, 100, 60);
  pg.rect(50, 535, 700, 700); // bottom
  pg.rect(0, 0, 300, 150); // top (need quad next so cant be one)
  pg.quad(300, 0, 700, 105, 700, 150, 300, 150); // top
  pg.stroke(139, 94, 52);
  pg.strokeWeight(1);
  for (var y = 535; y < 700; y += 28) {
    pg.line(50, y, 700, y);
  }
  pg.pop();
}

function drawBottle(pg) {
  pg.push();
  pg.fill(120, 150, 180, 200);
  pg.rect(250, 340, 285, 370, 8);
  pg.rect(250, 370, 285, 415, 7);
  pg.fill(230);
  pg.rect(262, 335, 273, 340, 2);
  pg.stroke(120, 150, 180);
  for (var y = 350; y < 415; y += 10) {
    var middle = 0;
    if (y == 370) {
      middle = 4;
    }
    pg.line(251 + middle, y, 284 - middle, y);
  }
  // reflection
  pg.noStroke();
  pg.fill(235, 245, 255, 150);
  pg.rect(254, 344, 257, 360, 2);
  pg.rect(254, 374, 257, 405, 2);
  pg.pop();
}

function drawBench(pg) {
  pg.push();
  pg.fill(0, 100);
  pg.rect(105, 645, 375, 680);
  pg.rect(130, 680, 150, 700);
  pg.rect(340, 680, 360, 700);

  pg.stroke(40, 10, 5);
  pg.fill(80, 40, 20);
  pg.rect(120, 660, 140, 700);
  pg.rect(330, 660, 350, 700);

  pg.noStroke();
  pg.fill(0, 100);
  pg.rect(120, 660, 140, 670);
  pg.rect(330, 660, 350, 670);

  pg.stroke(40, 10, 5);
  pg.fill(80, 40, 20);
  pg.rect(100, 640, 370, 660);
  pg.pop();
}

function drawShadows(pg) {
  pg.push();
  pg.fill(0, 100);

  //roof
  pg.rect(0, 0, 300, 10);
  pg.quad(300, 0, 700, 100, 700, 150, 300, 50);
  pg.quad(0, 10, 300, 10, 360, 90, 0, 90);

  // post
  pg.rect(50, 0, 60, 620);
  pg.rect(60, 620, 75, 700);

  //frame
  pg.rect(240, 201, 245, 250); // left
  pg.rect(240, 285, 245, 415);
  pg.rect(240, 450, 245, 500);
  pg.rect(240, 535, 245, 700);
  pg.rect(500, 201, 505, 500); // right
  pg.rect(500, 535, 505, 700);
  pg.rect(240, 285, 460, 290); // up
  pg.rect(240, 450, 460, 455); // down

  //remaining wood frame
  pg.rect(50, 335, 200, 345);
  pg.rect(500, 335, 700, 345);
  pg.rect(50, 535, 700, 545);

  // upper partition
  pg.rect(50, 199, 700, 210);
  pg.pop();
}

function drawPost(pg){
  pg.push();
  pg.stroke(0);
  pg.strokeWeight(2);
  pg.fill(80);
  pg.rect(0, 0, 50, 700);

  // darker right edge
  pg.noStroke();
  pg.fill(55, 55, 55, 100);
  pg.rect(43, 0, 50, 620);

  // darker base
  pg.stroke(0);
  pg.strokeWeight(2);
  pg.fill(50);
  pg.rect(0, 620, 60, 700);
  pg.pop();
}

function drawRoof(pg) {
  pg.push();
  pg.stroke(80);
  pg.fill(160, 170, 185);
  pg.strokeWeight(2);

  var slope = 0.26;
  pg.beginShape();
  for (var x = 290; x <= 700; x++) {
    let angle = (x / 30) * TWO_PI;
    let slant = (x - 50) * slope;
    let y = sin(angle) * 5 + slant - 70;
    pg.vertex(x, y);
  }
  for (var x = 700; x >= 290; x--) {
    let angle = (x / 30) * TWO_PI;
    let slant = (x - 50) * slope;
    let y = sin(angle) * 5 + slant - 60;
    pg.vertex(x, y);
  }
  pg.endShape(CLOSE);

  // front
  pg.stroke(80, 85, 95);
  pg.strokeWeight(2);
  pg.fill(160, 170, 185);
  pg.quad(0, 10, 300, 10, 330, 70, 0, 70);

  // ridges
  pg.stroke(115, 125, 140);
  pg.strokeWeight(2);
  for (var x = 15; x < 300; x += 18) {
    var endX = x + (x / 300) * 30;
    pg.line(x, 12, endX, 68);
  }

  // light in ridges
  pg.stroke(185, 190, 200);
  pg.strokeWeight(1);
  for (var x = 20; x < 300; x += 18) {
    var endX = x + (x / 300) * 30;
    pg.line(x + 3, 12, endX + 3, 68);
  }

  // front edge
  pg.noStroke();
  pg.fill(90, 100, 115);
  pg.quad(0, 70, 330, 70, 324, 77, 0, 77);

  // front edge highlight
  pg.stroke(190, 195, 205);
  pg.strokeWeight(1);
  pg.line(0, 70, 330, 70);

  pg.pop();
}

function drawFrame(pg) {
  pg.push();
  pg.stroke(80, 30, 30);
  pg.strokeWeight(2);

  // window frame
  pg.fill(100, 50, 30);
  pg.rect(200, 201, 240, 700); // left
  pg.rect(460, 201, 500, 700); // right
  pg.rect(200, 250, 500, 285); // up
  pg.rect(200, 415, 500, 450); // down

  //remaining wood frame
  pg.rect(50, 300, 200, 335);
  pg.rect(500, 300, 700, 335);
  pg.rect(50, 500, 700, 535);

  // upper partition
  pg.stroke(80, 20, 0);
  pg.fill(80, 50, 20);
  pg.rect(50, 120, 700, 199);
  pg.pop();
}

function drawNet(pg) {
  pg.push();
  pg.fill(150, 130, 100, 150); // outer overlay
  pg.rect(50, 200, 240, 500);
  pg.rect(500, 200, 700, 500);
  pg.rect(240, 200, 500, 285);
  pg.rect(240, 450, 500, 500);

  pg.stroke(200);
  pg.strokeWeight(2);

  for (var netX = 80; netX < 700; netX += 30) {
    if (netX > 240 && netX < 500) {
      pg.line(netX, 201, netX, 285);
      pg.line(netX, 450, netX, 500);
    } else {
      pg.line(netX, 201, netX, 500);
    }
  }

  for (var netY = 230; netY < 500; netY += 30) {
    if (netY > 285 && netY < 450) {
      pg.line(50, netY, 240, netY);
      pg.line(500, netY, 700, netY);
    } else {
      pg.line(50, netY, 700, netY);
    }
  }
  pg.pop();
}