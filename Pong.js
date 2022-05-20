
let RightRectY,
  RightRectX,
  RightRectHeight,
  RightRectWidth,
  LeftRectY,
  LeftRectX,
  LeftRectHeight,
  LeftRectWidth,
  YVelocity,
  CircleX,
  CircleY,
  CircleD,
  CirlceXVelocity,
  CircleYVelocity;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  RightRectX = 550;
  RightRectY = 10;
  RightRectHeight = 80;
  RightRectWidth = 20;
  LeftRectY = 10;
  LeftRectX = 30;
  LeftRectHeight = 80;
  LeftRectWidth = 20;
  // (Use the YVelocity to control how hard of a setting the game is higher# = harder lower# = easier)
  YVelocity = 5;
  CircleX = 180;
  CircleY = 150;
  CircleD = 40;
  CircleXVelocity = 2;
  CircleYVelocity = 4;
}

function draw() {
  background(220);
  fill(300, 240, 0);
  noStroke();
  frameRate(400);
  rect(LeftRectX, LeftRectY, LeftRectWidth, LeftRectHeight);
  RightRectY += YVelocity;
  if (keyIsDown(40)) {
    LeftRectY++;
  }
  if (keyIsDown(38)) {
    LeftRectY--;
  }
  rect(RightRectX, RightRectY, RightRectWidth, RightRectHeight);
  if (RightRectY + RightRectHeight > height || RightRectY < 0) {
    YVelocity *= -1;
  }
  frameRate(70);
  fill(100, 100, 100);
  ellipse(CircleX, CircleY, CircleD, CircleD);

  if (
    (CircleX + CircleD / 2 > RightRectX &&
      CircleY >= RightRectY &&
      CircleY <= RightRectY + RightRectHeight) ||
    (CircleX - CircleD / 2 < LeftRectX + LeftRectWidth &&
      CircleY >= LeftRectY &&
      CircleY <= LeftRectY + LeftRectHeight)
  ) {
    CircleXVelocity *= -1;
  }
  if (
    (CircleX + CircleD / 2 > RightRectX &&
      CircleY >= RightRectY &&
      CircleY <= RightRectY + RightRectHeight) ||
    (CircleX - CircleD / 2 < LeftRectX + LeftRectWidth &&
      CircleY >= LeftRectY &&
      CircleY <= LeftRectY + LeftRectHeight)
  ) {
    CircleYVelocity *= 1;
  }
  if (
    CircleY + CircleD / 2 > LeftRectY &&
    CircleY - CircleD / 2 < LeftRectY + LeftRectHeight &&
    CircleX - CircleD / 2 <= LeftRectX + LeftRectWidth
  ) {
    CircleYVelocity *= -1;
    CircleXVelocity *= -1;
  }
  if (
    CircleY + CircleD / 2 > RightRectY &&
    CircleY - CircleD / 2 < RightRectY + RightRectHeight &&
    CircleX + CircleD / 2 >= RightRectX
  ) {
    CircleYVelocity *= 1;
    CircleXVelocity *= 1;
  }
  CircleX += CircleXVelocity;
  CircleY += CircleYVelocity;
  if (CircleY + CircleD / 2 > height || CircleY - CircleD / 2 < 0) {
    CircleYVelocity *= -1;
  }

  if (CircleX - CircleD / 2 < 0 || CircleX + CircleD / 2 > width) {
    CircleXVelocity = 0;
    CircleYVelocity = 0;
    RightRectY = 0;
  }
  if (CircleX - CircleD / 2 < 0) {
    textSize(50);
    text("You Lost", 200, 50);
  }
  if (CircleX + CircleD / 2 > width) {
    textSize(50);
    text("K.O", 250, 50);
  }
}
