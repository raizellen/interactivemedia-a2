async function setup() {
  createCanvas(700, 700);
  
  thickFont = await loadFont("./assets/fonts/thickFont.ttf");
  baybayinFont = await loadFont("./assets/fonts/baybayin.ttf");
  normalFont = await loadFont("./assets/fonts/myfontV5.ttf");
  
  storeBuffer = createGraphics(700, 700);
  drawGraphics(storeBuffer);
}

function draw() {
  rectMode(CORNERS);
  ellipseMode(CORNER);
  noStroke();
  textFont(thickFont);
  background(180, 230, 250);

  image(storeBuffer, 0, 0);

  drawScreen();
  drawPoster();
  drawPackets(50, 200);
  // drawSurrounds();
  
  if (posterBack) {
    drawHelp();
  } 
}