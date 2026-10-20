class Packet {
  constructor(type, startX, startY, colourMain, colourShadow, outline, dataKey) {
    this.type = type;
    this.startX = startX;
    this.startY = startY;
    this.colourMain = colourMain;
    this.colourShadow = colourShadow;
    this.outline = outline;
    this.dataKey = dataKey; // which survey answer this packet shows

    // hover + click for the bottom packet
    this.button = new Button({
      x: startX,
      y: startY,
      w: packetWidth,
      h: packetHeight,
      isActive: () =>
        !starting &&
        !posterBack &&
        !signOpen &&
        selectedPacket === null &&
        this.numberOfPackets() > 0,
      onPress: () => {
        selectedPacket = this;
      },
    });
  }

  packetCalculations(y) {
    var w = packetWidth;
    var h = packetHeight;
    var x = this.startX;
    var top = this.startY + y;

    // only the bottom packet enlarges (1.1 when hovered, 1 otherwise)
    if (this.isBottom(y)) {
      w *= this.button.scaleAmount;
      h *= this.button.scaleAmount;

      x -= (w - packetWidth) / 2;
      top -= (h - packetHeight) / 2;
    }

    return {
      x: x,
      top: top,
      w: w,
      h: h,
    };
  }

  // how many packets
  numberOfPackets() {
    var question = dataQuestions.find((q) => q.key === this.dataKey);
    var value = answers[this.dataKey];
    return round(constrain(map(value, 0, question.max, 0, 6), 0, 6));
  }

  // is the packet at offset y the bottom (last drawn)
  isBottom(y) {
    return y === (this.numberOfPackets() - 1) * packetHeight;
  }

  // number of packets change with data, move the button onto the bottom packet every frame
  updateButton() {
    this.button.y = this.startY + (this.numberOfPackets() - 1) * packetHeight;
  }

  drawBase(pd) {
    fill(0, 100);
    rect(pd.x + 2, pd.top, pd.x + pd.w + 2, pd.top + pd.h + 2);

    stroke(this.outline);
    strokeWeight(1);

    fill(this.colourMain);
    rect(pd.x, pd.top, pd.x + pd.w, pd.top + pd.h);

    noStroke();

    fill(this.colourShadow);
    rect(pd.x, pd.top, pd.x + verticalShadowWidth, pd.top + pd.h);
    rect(
      pd.x,
      pd.top + pd.h,
      pd.x + pd.w,
      pd.top + pd.h - horizontalShadowHeight
    );
  }

  drawLabel(pd) {
    textStyle(BOLD);

    switch (this.type) {
      case "magicSarap":
        fill(200, 0, 20);
        ellipse(
          pd.x + pd.w * 0.2,
          pd.top + pd.h * 0.15,
          pd.w * 0.3,
          pd.h * 0.125
        );
        fill(50, 50, 200);
        textSize(pd.w * 0.18);
        text(`MAGIC \nSARAP`, pd.x + pd.w * 0.16, pd.top + pd.h * 0.5);
        break;

      case "milo":
        fill(220, 200, 0);
        rect(pd.x, pd.top + pd.h * 0.05, pd.x + pd.w, pd.top + pd.h * 0.15);
        fill(255);
        ellipse(pd.x + pd.w * 0.2, pd.top + pd.h * 0.3, pd.w * 0.7, pd.h * 0.3);
        fill(200, 70, 50);
        textSize(pd.w * 0.25);
        text("MILO", pd.x + pd.w * 0.25, pd.top + pd.h * 0.5);
        break;

      case "tang":
        fill(255);
        circle(pd.x + pd.w * 0.2, pd.top + pd.h * 0.7, pd.w * 0.2);
        circle(pd.x + pd.w * 0.2, pd.top + pd.h * 0.15, pd.w * 0.7);
        fill(230, 100, 130);
        circle(pd.x + pd.w * 0.3, pd.top + pd.h * 0.21, pd.w * 0.5);
        fill(100, 200, 30);
        arc(
          pd.x + pd.w * 0.3,
          pd.top + pd.h * 0.2,
          pd.w * 0.5,
          pd.h * 0.34,
          0,
          PI
        );
        fill(255);
        textSize(pd.w * 0.2);
        text("TANG", pd.x + pd.w * 0.31, pd.top + pd.h * 0.45);
        textSize(pd.w * 0.12);
        text("POMELO", pd.x + pd.w * 0.34, pd.top + pd.h * 0.32);
        break;

      case "surf":
        fill(220);
        rect(pd.x, pd.top + pd.h * 0.12, pd.x + pd.w, pd.top + pd.h * 0.2);
        rect(pd.x, pd.top + pd.h * 0.82, pd.x + pd.w, pd.top + pd.h * 0.9);
        fill(200, 100, 150);
        rect(
          pd.x,
          pd.top + pd.h * 0.12,
          pd.x + pd.w * 0.2,
          pd.top + pd.h * 0.2
        );
        rect(
          pd.x + pd.w * 0.6,
          pd.top + pd.h * 0.82,
          pd.x + pd.w,
          pd.top + pd.h * 0.9
        );
        stroke(255);
        fill(50, 70, 150);
        textSize(pd.w * 0.25);
        text("Surf", pd.x + pd.w * 0.25, pd.top + pd.h * 0.5);
        textSize(pd.w * 0.2);
        text("excel", pd.x + pd.w * 0.27, pd.top + pd.h * 0.6);
        noStroke();
        break;

      case "kopiko":
        fill(200, 70, 50);
        quad(
          pd.x + pd.w * 0.15,
          pd.top + pd.h * 0.35,
          pd.x + pd.w * 0.15,
          pd.top + pd.h * 0.2,
          pd.x + pd.w * 0.9,
          pd.top + pd.h * 0.15,
          pd.x + pd.w * 0.9,
          pd.top + pd.h * 0.3
        );
        fill(255);
        textSize(pd.w * 0.15);
        text("KOPIKO", pd.x + pd.w * 0.3, pd.top + pd.h * 0.27);
        fill(100, 30, 20);
        textSize(pd.w * 0.25);
        text("Blanca", pd.x + pd.w * 0.2, pd.top + pd.h * 0.55);
        break;

      case "ovaltine":
        fill(220, 200, 0);
        ellipse(pd.x + pd.w * 0.2, pd.top + pd.h * 0.3, pd.w * 0.3, pd.h * 0.2);
        ellipse(pd.x + pd.w * 0.7, pd.top + pd.h * 0.1, pd.w * 0.2, pd.h * 0.1);
        fill(110, 70, 190);
        stroke(255);
        textSize(pd.w * 0.2);
        text("Ovaltine", pd.x + pd.w * 0.2, pd.top + pd.h * 0.45);
        fill(150, 80, 30);
        textSize(pd.w * 0.15);
        text("Ovalteenies", pd.x + pd.w * 0.2, pd.top + pd.h * 0.6);
        noStroke();
        break;
    }
  }
}

function createPackets(leftOffset, topOffset){
  var middleGap = 235;

  packets = [
    new Packet(
      "magicSarap",
      15 + leftOffset,
      topOffset,
      color(250, 220, 10),
      color(250, 200, 20),
      color(230, 150, 20),
      "food"
    ),
    new Packet(
      "milo",
      75 + leftOffset,
      topOffset,
      color(100, 200, 70),
      color(80, 180, 50),
      color(70, 150, 30),
      "travel"
    ),
    new Packet(
      "tang",
      130 + leftOffset,
      topOffset,
      color(230, 100, 130),
      color(200, 80, 80),
      color(180, 60, 60),
      "music"
    ),
    new Packet(
      "surf",
      205 + leftOffset + middleGap,
      topOffset,
      color(60, 100, 200),
      color(40, 80, 180),
      color(30, 70, 160),
      "events"
    ),
    new Packet(
      "kopiko",
      290 + leftOffset + middleGap,
      topOffset,
      color(230, 210, 170),
      color(200, 180, 130),
      color(180, 160, 110),
      "language"
    ),
    new Packet(
      "ovaltine",
      350 + leftOffset + middleGap,
      topOffset,
      color(230, 120, 30),
      color(200, 90, 0),
      color(180, 70, 0),
      "movies"
    ),
  ];
}

function drawPackets() {
  for (var packet of packets) {
    var amount = packet.numberOfPackets();
    packet.updateButton();
    for (var y = 0; y < packetHeight * amount; y += packetHeight) {
      var packetData = packet.packetCalculations(y);

      packet.drawBase(packetData);
      packet.drawLabel(packetData);
    }
  }
}