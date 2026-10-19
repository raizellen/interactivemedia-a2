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

  storeBuffer = createGraphics(700, 700);
  drawGraphics(storeBuffer);

  createInputField();
}

function draw() {
  background(180, 230, 250);
  image(storeBuffer, 0, 0);

  drawPackets(50, 200);
  drawScreen();
  drawPoster();
  drawLight();
  
  if (posterBack) {
    drawHelp();
  }

  if (starting){
    drawStarting();
  }
}