async function setup() {
  createCanvas(700, 700);

  thickFont = await loadFont("./assets/fonts/thickFont.ttf");
  baybayinFont = await loadFont("./assets/fonts/baybayin.ttf");
  normalFont = await loadFont("./assets/fonts/myfontV5.ttf");
  
  rectMode(CORNERS);
  ellipseMode(CORNER);
  noStroke();
  textFont(thickFont);

  await readAnswers();
  createInputField();

  createButtons();

  storeBuffer = createGraphics(700, 700);
  drawGraphics(storeBuffer);
  createPackets(50, 200);

  karaoke = await loadSound('assets/sounds/karaoke.mp3');
  kidsPlaying = await loadSound('assets/sounds/kids-playing.mp3');
  rooster = await loadSound('assets/sounds/rooster.mp3');
  sweeping = await loadSound('assets/sounds/sweeping.mp3');
}

function draw() {
  background(180, 230, 250);
  image(storeBuffer, 0, 0);

  drawSign();
  drawShutter();
  drawPoster();
  drawPackets();
  drawLight();
  
  if (posterBack) {
    drawHelp();
  }

  if (signOpen) {
    drawSignDetails();
  }

  if (starting){
    drawStarting();
  }

  Button.updateCursor();
}