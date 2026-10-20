// card shown when a packet is clicked, clicking outside it closes it
var packetPanel = { x: 100, y: 190, w: 500, h: 320 };

var packetNames = {
  magicSarap: "MAGIC SARAP",
  milo: "MILO",
  tang: "TANG POMELO",
  surf: "SURF EXCEL",
  kopiko: "KOPIKO BLANCA",
  ovaltine: "OVALTINE",
};

function drawPacketDetails() {
  var packet = selectedPacket;
  var question = dataQuestions.find((q) => q.key === packet.dataKey);
  var value = answers[packet.dataKey];

  push();
  // dim the store behind
  noStroke();
  fill(0, 130);
  rect(0, 0, 700, 700);

  // paper card
  fill(0, 70);
  rect(108, 198, 608, 518); // shadow
  stroke(200, 185, 150);
  strokeWeight(2);
  fill(250, 242, 215);
  rect(100, 190, 600, 510);

  drawTape(150, 192, -0.35);
  drawTape(550, 192, 0.35);

  // the packet, drawn twice as big on a soft panel
  noStroke();
  fill(0, 25);
  rect(125, 215, 255, 445, 12);
  var big = { x: 140, top: 250, w: 100, h: 160 };
  packet.drawBase(big);
  packet.drawLabel(big);

  // name
  textAlign(LEFT);
  noStroke();
  fill(195, 47, 39);
  textFont(thickFont);
  textSize(30);
  text(packetNames[packet.type], 280, 240);

  stroke(195, 47, 39, 150);
  strokeWeight(2);
  line(280, 254, 575, 254);

  // survey question
  noStroke();
  fill(70, 40, 20);
  textFont(normalFont);
  textSize(22);
  text(question.question, 280, 266, 575, 350);

  // answer
  fill(150, 110, 70);
  textSize(20);
  text("your answer", 280, 375);

  fill(219, 124, 38);
  stroke(195, 47, 39);
  strokeWeight(4);
  textFont(thickFont);
  textSize(60);
  var shown = value === undefined ? "-" : value + (question.unit || "");
  text(shown, 280, 435);

  // hint
  textAlign(CENTER);
  textSize(18);
  noStroke();
  fill(150, 110, 70);
  text("click outside to close", 350, 497);
  pop();
}