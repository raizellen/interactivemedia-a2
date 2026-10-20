// card shown when a packet is clicked, clicking outside it closes it
var packetPanel = { x: 100, y: 190, w: 500, h: 320 };

function drawPacketDetails() {
  var packet = selectedPacket;
  var question = packet.question;
  var value = packet.value;

  push();
  dimStore(130);

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
  drawPacketLabel(packet.type, big);

  // name
  textAlign(LEFT);
  noStroke();
  fill(...palette.red);
  textFont(thickFont);
  textSize(30);
  text(question.key.toUpperCase(), 280, 240);

  stroke(...palette.red, 150);
  strokeWeight(2);
  line(280, 254, 575, 254);

  // survey question
  noStroke();
  fill(...palette.textBrown);
  textFont(normalFont);
  textSize(32);
  text(question.question, 280, 266, 575, 350);

  // answer
  fill(...palette.hintBrown);
  textSize(28);
  text("your answer", 280, 390);

  fill(...palette.orange);
  stroke(...palette.red);
  strokeWeight(4);
  textFont(thickFont);
  textSize(42);
  var shown = value + " " + (question.unit || "");
  text(shown, 280, 435);

  // hint
  textAlign(CENTER);
  textSize(18);
  noStroke();
  fill(...palette.hintBrown);
  text("click outside to close", 350, 497);
  pop();
}