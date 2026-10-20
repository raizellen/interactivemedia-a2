// the art on each packet, pd = where and how big the packet is drawn (from packetCalculations)
function drawPacketLabel(type, pd) {
  push(); // so the bold below doesn't carry over to other text
  textStyle(BOLD);
  var textX = pd.x + pd.w/2 + 3;

  switch (type) {
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
      text(`MAGIC \nSHEREP`, textX, pd.top + pd.h * 0.5);
      break;

    case "milo":
      fill(220, 200, 0);
      rect(pd.x, pd.top + pd.h * 0.05, pd.x + pd.w, pd.top + pd.h * 0.15);
      fill(255);
      ellipse(pd.x + pd.w * 0.2, pd.top + pd.h * 0.3, pd.w * 0.7, pd.h * 0.3);
      fill(200, 70, 50);
      textSize(pd.w * 0.25);
      text("LIMO", textX, pd.top + pd.h * 0.5);
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
      text("INA", textX, pd.top + pd.h * 0.45);
      textSize(pd.w * 0.12);
      text("PAMELA", textX, pd.top + pd.h * 0.32);
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
      text("Swim", textX, pd.top + pd.h * 0.5);
      textSize(pd.w * 0.2);
      text("sheet", textX, pd.top + pd.h * 0.6);
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
      text("KOPIMO", textX, pd.top + pd.h * 0.27);
      fill(100, 30, 20);
      textSize(pd.w * 0.25);
      text("Puno", textX, pd.top + pd.h * 0.55);
      break;

    case "ovaltine":
      fill(220, 200, 0);
      ellipse(pd.x + pd.w * 0.2, pd.top + pd.h * 0.3, pd.w * 0.3, pd.h * 0.2);
      ellipse(pd.x + pd.w * 0.7, pd.top + pd.h * 0.1, pd.w * 0.2, pd.h * 0.1);
      fill(110, 70, 190);
      stroke(255);
      textSize(pd.w * 0.2);
      text("Ovalbiggy", textX, pd.top + pd.h * 0.45);
      fill(150, 80, 30);
      textSize(pd.w * 0.15);
      text("Ovalbiggies", textX, pd.top + pd.h * 0.6);
      noStroke();
      break;
  }
  pop();
}