function drawScreen(){
  push();
  stroke(0);
  strokeWeight(2);
  for (var y = 285+(closing%10); y < 285 + closing; y += 10){
    line(240,y,460,y);
  }
  noStroke();
  fill(150,200);
  rect(240,285, 460,285+closing);
  pop();
  drawLight();
}

function drawLight(){
  push();
  fill(0,closing);
  rect(0,0,700,700);

  if (closing > 30){
    blendMode(ADD);
    fill(250,220,130, closing*0.8);
    quad(250,75, 300,75, 650, 700, 50, 700); 
  }
  pop();
}

function drawSurrounds() {
  // swaying tree
}

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
  text("• Click on the sign to view description", 120, 270);
  text("• Click on a packet to view details", 120, 310);
  text("• Toggle sound using the following keys:", 120, 350);
  text("K   Karaoke", 180, 390);
  text("G   Gossip", 400, 390);
  text("S   Sweeping", 180, 420);
  text("C   Chickens", 400, 420);
  text("Y   Youth", 300, 450);
  text("• Scroll to close the store!", 120, 490);

  var enlarge = 1;
  if (mouseX > 590 && mouseX < 640 && mouseY > 130 && mouseY < 180) {
    enlarge = 1.1;
  }

  translate(615, 155);
  scale(enlarge);
  translate(-615, -155);

  stroke(150, 80, 50);
  fill(250, 120, 100);
  rect(590, 130, 640, 180);
  line(595, 135, 635, 175);
  line(635, 135, 595, 175);
  pop;
}

function drawPackets(leftOffset, topOffset) {
  var middleGap = 235;

  var packets = [
    new Packet(
      "magicSarap",
      15 + leftOffset,
      topOffset,
      color(250, 220, 10),
      color(250, 200, 20),
      color(230, 150, 20),
      5
    ),
    new Packet(
      "milo",
      75 + leftOffset,
      topOffset,
      color(100, 200, 70),
      color(80, 180, 50),
      color(70, 150, 30),
      3
    ),
    new Packet(
      "tang",
      130 + leftOffset,
      topOffset,
      color(230, 100, 130),
      color(200, 80, 80),
      color(180, 60, 60),
      4
    ),
    new Packet(
      "surf",
      205 + leftOffset + middleGap,
      topOffset,
      color(60, 100, 200),
      color(40, 80, 180),
      color(30, 70, 160),
      2
    ),
    new Packet(
      "kopiko",
      290 + leftOffset + middleGap,
      topOffset,
      color(230, 210, 170),
      color(200, 180, 130),
      color(180, 160, 110),
      6
    ),
    new Packet(
      "ovaltine",
      350 + leftOffset + middleGap,
      topOffset,
      color(230, 120, 30),
      color(200, 90, 0),
      color(180, 70, 0),
      4
    ),
  ];

  for (var packet of packets) {
    for (var y = 0; y < packetHeight * packet.amount; y += packetHeight) {
      var packetData = packet.packetCalculations(y);

      packet.drawBase(packetData);
      packet.drawLabel(packetData);
    }
  }
}