// tindera
const tinderaAwayX = -10; // hidden behind the left post
const tinderaWindowX = 350; // middle of the window
var tinderaX = tinderaAwayX;
var tinderaMoving = false;

function updateTindera() {
  var target = shutterDirection === "opening" ? tinderaWindowX : tinderaAwayX;
  var diff = target - tinderaX;

  tinderaMoving = abs(diff) > 0.5; // 0.5 for tolerance (eg for if speed or window position changed)
  tinderaX += constrain(diff, -4, 4); // walks 4px per frame
}

function tinderaAtWindow() {
  return abs(tinderaX - tinderaWindowX) < 1;
}