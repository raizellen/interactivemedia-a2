async function setup() {
  createCanvas(700, 700);

  thickFont = await loadFont("./assets/fonts/thickFont.ttf");
  baybayinFont = await loadFont("./assets/fonts/baybayin.ttf");
  normalFont = await loadFont("./assets/fonts/myfontV5.ttf");
  
  rectMode(CORNERS);
  ellipseMode(CORNER);
  noStroke();
  textFont(thickFont);
  textAlign(CENTER);

  await readAnswers();
  createInputField();

  createButtons();

  insideBuffer = createGraphics(700, 700);
  outsideBuffer = createGraphics(700, 700);
  drawInside(insideBuffer);
  drawOutside(outsideBuffer);
  createPackets(); // after the buttons so a packet is on top of a poster

  karaoke = await loadSound('assets/sounds/karaoke.mp3');
  kidsPlaying = await loadSound('assets/sounds/kids-playing.mp3');
  rooster = await loadSound('assets/sounds/rooster.mp3');
  sweeping = await loadSound('assets/sounds/sweeping.mp3');
}

function draw() {
  background(180, 230, 250);
  image(insideBuffer, 0, 0);

  updateTindera();
  drawTindera();

  image(outsideBuffer, 0, 0);

  drawSign();
  drawShutter();
  drawNamePoster();
  updateHelpPoster();
  drawHelpPoster();
  drawPackets();
  drawLight();

  updateDialogue();
  drawDialogue();

  if (helpOpen) {
    drawHelpDetails();
  }

  if (signOpen) {
    drawSignDetails();
  }

  if (namePosterOpen) {
    drawNamePosterDetails();
  }

  if (selectedPacket) {
    drawPacketDetails();
  }

  if (starting){
    drawStarting();
  }

  Button.updateCursor();
}