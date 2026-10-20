function drawShutter(){
  push();
  stroke(0);
  strokeWeight(2);
  for (var y = 285+(shutterProgress%10); y < 285 + shutterProgress; y += 10){
    line(240,y,460,y);
  }
  noStroke();
  fill(150,200);
  rect(240,285, 460,285+shutterProgress);
  pop();
}

function drawLight(){
  push();
  fill(0,shutterProgress);
  rect(0,0,700,700);

  if (shutterProgress > 30){
    blendMode(ADD);
    fill(250,220,130, shutterProgress*0.8);
    quad(250,75, 300,75, 650, 700, 50, 700); 
  }
  pop();
}