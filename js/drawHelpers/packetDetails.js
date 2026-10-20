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
  stroke(...palette.paperEdge);
  strokeWeight(2);
  fill(...palette.paper);
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
  fill(...palette.red);
  textFont(thickFont);
  textSize(30);
  text(packetNames[packet.type], 280, 240);

  stroke(...palette.red, 150);
  strokeWeight(2);
  line(280, 254, 575, 254);

  // survey question
  noStroke();
  fill(...palette.textBrown);
  textFont(normalFont);
  textSize(22);
  text(question.question, 280, 266, 575, 350);

  // answer
  fill(...palette.hintBrown);
  textSize(24);
  text("your answer", 280, 375);

  fill(...palette.orange);
  stroke(...palette.red);
  strokeWeight(4);
  textFont(thickFont);
  textSize(52);
  var shown = value === undefined ? "-" : value + " " +(question.unit || "");
  text(shown, 280, 435);

  // hint
  textAlign(CENTER);
  textSize(18);
  noStroke();
  fill(...palette.hintBrown);
  text("click outside to close", 350, 497);
  pop();
}