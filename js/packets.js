class Packet {
  constructor(type, x, colourMain, outline, dataKey) {
    this.type = type;
    this.x = x;
    this.colourMain = colourMain;
    this.outline = outline;
    this.dataKey = dataKey; // which survey answer this packet shows

    // hover + click for the bottom packet
    this.button = new Button({
      x: x,
      y: packetTop,
      w: packetWidth,
      h: packetHeight,
      isActive: () => storeIsClickable() && this.numberOfPackets() > 0,
      onPress: () => {
        selectedPacket = this;
      },
    });
  }

  packetCalculations(y) {
    var w = packetWidth;
    var h = packetHeight;
    var x = this.x;
    var top = packetTop + y;

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

  get question() {
    return dataQuestions.find((q) => q.key === this.dataKey);
  }

  get value() {
    return answers[this.dataKey];
  }

  // how many packets
  numberOfPackets() {
    return round(constrain(map(this.value, 0, this.question.max, 1, 6), 1, 6));
  }

  // is the packet at offset y the bottom (last drawn)
  isBottom(y) {
    return y === (this.numberOfPackets() - 1) * packetHeight;
  }

  // move the button onto the bottom packet
  updateButton() {
    this.button.y = packetTop + (this.numberOfPackets() - 1) * packetHeight;
  }

  drawBase(pd) {
    noStroke();
    fill(0, 65);
    rect(
      pd.x + 3,
      pd.top + 4,
      pd.x + pd.w + 3,
      pd.top + pd.h + 4,
      4
    );

    fill(this.colourMain);
    stroke(this.outline);
    strokeWeight(1);
    rect(
      pd.x,
      pd.top,
      pd.x + pd.w,
      pd.top + pd.h,
      4
    );

    // subtle highlight on the left
    noStroke();
    fill(255, 65);
    rect(
      pd.x + 2,
      pd.top + 4,
      pd.x + 5,
      pd.top + pd.h - 4
    );

    // shading on the right
    fill(0, 20);
    rect(
      pd.x + pd.w - 4,
      pd.top + 4,
      pd.x + pd.w - 2,
      pd.top + pd.h - 4
    );

    // sealed edges at the top and bottom
    stroke(this.outline);
    strokeWeight(1);
    line(
      pd.x + 4, pd.top + 2,
      pd.x + pd.w - 4, pd.top + 2
    );
    line(
      pd.x + 4, pd.top + pd.h - 2,
      pd.x + pd.w - 4, pd.top + pd.h - 2
    );

    noStroke();
  }
}

function createPackets() {
  packets = [
    new Packet(
      "magicSarap",
      65,
      color(250, 220, 10),
      color(230, 150, 20),
      "food"
    ),
    new Packet(
      "milo",
      125,
      color(100, 200, 70),
      color(70, 150, 30),
      "travel"
    ),
    new Packet(
      "tang",
      180,
      color(230, 100, 130),
      color(180, 60, 60),
      "music"
    ),
    new Packet(
      "surf",
      490,
      color(60, 100, 200),
      color(30, 70, 160),
      "events"
    ),
    new Packet(
      "kopiko",
      575,
      color(230, 210, 170),
      color(180, 160, 110),
      "language"
    ),
    new Packet(
      "ovaltine",
      635,
      color(230, 120, 30),
      color(180, 70, 0),
      "movies"
    ),
  ];
}

// number of packets change with data, so keep each button on its bottom packet
function updatePackets() {
  for (var packet of packets) {
    packet.updateButton();
  }
}

function drawPackets() {
  for (var packet of packets) {
    var amount = packet.numberOfPackets();
    for (var y = 0; y < packetHeight * amount; y += packetHeight) {
      var packetData = packet.packetCalculations(y);

      packet.drawBase(packetData);
      drawPacketLabel(packet.type, packetData);
    }
  }
}