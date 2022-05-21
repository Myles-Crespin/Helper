let RectY,
  RectX,
  RectHeight,
  RectWidth,
  XVelocity,
  r2,
  g2,
  b2,
  r,
  g,
  b,
  CircleX,
  CircleY,
  CircleD,
  CirlceXVelocity,
  CircleYVelocity,
  brick1,
  brick2,
  brick3,
  brick4,
  brick5,
  brick6,
  brick7,
  brick8,
  brickWidth,
  brickHeight,
  powerUpVelocity,
  PUY,
  PUX,
  PUWH,
  PU2Y,
  PU2X,
  PU2WH;
// declare variables for paddle - x, y, width, height, speed, color

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  init();
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
}

function draw() {
  background(220);

  //move paddle
  //use if/else if to check  for the right or left arrow key and update the
  //x position of the paddle using the speed variable

  displayPaddle();
  movePaddle();

  displayBall();
  moveBall();

  ballHitPaddle();
  ballHitBrick();
  ballHitSide();
  missBall();
  displayBricks();
  Restart();
  MousePress();
  PowerUp();
  PowerUp2();
}
function MousePress() {
  if (
    mouseIsPressed &&
    mouseX > 175 &&
    mouseX < 225 &&
    mouseY < 210 &&
    mouseY > 190
  ) {
    init();
  }
}

function PowerUp2() {
  rectMode(CORNER);
  if (!brick5) {
    fill(200, 0, 0);
    rect(PU2X, PU2Y, PU2WH, PU2WH);
    PU2Y += 1;
  }
  if (
    PU2Y + PU2WH == RectY - RectHeight / 2 &&
    PU2X > RectX - RectWidth / 2 &&
    PU2X + PU2WH < RectX + RectWidth / 2
  ) {
    CircleXVelocity = width/300;
    CircleYVelocity = height/200;
    PU2WH = 0;
  }
}

function PowerUp() {
  rectMode(CORNER);
  if (!brick6) {
    fill(200, 200, 0);
    rect(PUX, PUY, PUWH, PUWH);
    PUY += 1;
  }
  if (
    PUY + PUWH == RectY - RectHeight / 2 &&
    PUX > RectX - RectWidth / 2 &&
    PUX + PUWH < RectX + RectWidth / 2
  ) {
    RectWidth = 150;
    PUWH = 0;
  }
}

function Restart() {
  if (
    !(
      brick1 ||
      brick2 ||
      brick3 ||
      brick4 ||
      brick5 ||
      brick6 ||
      brick7 ||
      brick8
    )
  ) {
    CircleYVelocity *= 0;
    CircleXVelocity *= 0;
    fill(0, 100, 0);
    rectMode(CENTER);
    rect(200, 200, 50, 20);
    fill(250, 50, 50);
    text("Restart", 180, 205);
  }
}
function displayPaddle() {
  rectMode(CENTER);
  //display paddle - use fill() then rect()
  fill(r, g, b);
  rect(RectX, RectY, RectWidth, RectHeight);
}

function movePaddle() {
  if (keyIsDown(39)) {
    RectX = RectX + width/150;
  }
  if (keyIsDown(37)) {
    RectX = RectX - width/150;
  }
}

function displayBall() {
  fill(r2, g2, b2);
  ellipse(CircleX, CircleY, CircleD, CircleD);
}

function moveBall() {
  CircleX += CircleXVelocity;
  CircleY += CircleYVelocity;
}

function ballHitPaddle() {
  if (
    CircleYVelocity > 1 &&
    CircleY + CircleD / 2 > RectY - RectHeight / 2 &&
    CircleX + CircleD / 2 >= RectX - RectWidth / 2 &&
    CircleX - CircleD / 2 <= RectX + RectWidth / 2
  ) {
    CircleYVelocity *= -1;
  }
}

function ballHitBrick() {
  if (CircleY - CircleD / 2 < 0) {
    CircleYVelocity *= -1;
  }

  if (
    brick5 &&
    CircleY - CircleD / 2 < 2 * brickHeight &&
    CircleX + CircleD / 2 > width / 2 - brickWidth * 2 &&
    CircleX - CircleD / 2 < width / 2 - brickWidth
  ) {
    brick5 = false;
    CircleYVelocity *= -1;
  }

  if (
    brick6 &&
    CircleY - CircleD / 2 < 2 * brickHeight &&
    CircleX + CircleD / 2 > width / 2 - brickWidth &&
    CircleX - CircleD / 2 < width / 2
  ) {
    brick6 = false;
    CircleYVelocity *= -1;
  }
  if (
    brick7 &&
    CircleY - CircleD / 2 < 2 * brickHeight &&
    CircleX + CircleD / 2 > width / 2 &&
    CircleX - CircleD / 2 < width / 2 + brickWidth
  ) {
    brick7 = false;
    CircleYVelocity *= -1;
  }
  if (
    brick8 &&
    CircleY - CircleD / 2 < 2 * brickHeight &&
    CircleX + CircleD / 2 > width / 2 + brickWidth &&
    CircleX - CircleD / 2 < width / 2 + brickWidth * 2
  ) {
    brick8 = false;
    CircleYVelocity *= -1;
  }

  if (
    brick1 &&
    CircleY - CircleD / 2 < brickHeight &&
    CircleX + CircleD / 2 > width / 2 - brickWidth * 2 &&
    CircleX - CircleD / 2 < width / 2 - brickWidth
  ) {
    brick1 = false;
    CircleYVelocity *= -1;
  }
  if (
    brick2 &&
    CircleY - CircleD / 2 < brickHeight &&
    CircleX + CircleD / 2 > width / 2 - brickWidth &&
    CircleX - CircleD / 2 < width / 2
  ) {
    brick2 = false;
    CircleYVelocity *= -1;
  }

  if (
    brick3 &&
    CircleY - CircleD / 2 < brickHeight &&
    CircleX + CircleD / 2 > width / 2 &&
    CircleX - CircleD / 2 < (3 * width) / 2 + brickWidth
  ) {
    brick3 = false;
    CircleYVelocity *= -1;
  }

  if (
    brick4 &&
    CircleY - CircleD / 2 < brickHeight &&
    CircleX + CircleD / 2 > width / 2 + brickWidth &&
    CircleX - CircleD / 2 < width / 2 + brickWidth * 2
  ) {
    brick4 = false;
    CircleYVelocity *= -1;
  }
}

function ballHitSide() {
  if (CircleX - CircleD / 2 <= 0 || CircleX + CircleD / 2 >= width) {
    CircleXVelocity *= -1;
  }
}

function missBall() {
  if (CircleY + CircleD / 2 > height) {
    CircleYVelocity *= 0;
    CircleXVelocity *= 0;
    textSize(50);
    fill(200, 50, 50);
    text("Game Over", 80, 150);
    PUWH = 0;
    PU2WH = 0;
  }
}

function displayBricks() {
  rectMode(CORNER);
  noStroke();
  if (brick1) {
    fill(300, 0, 0);
    rect(width / 2 - brickWidth * 2, 0, brickWidth, brickHeight);
  }
  if (brick2) {
    fill(300, 300, 300);
    rect(width / 2 - brickWidth, 0, brickWidth, brickHeight);
  }
  if (brick3) {
    fill(0, 0, 300);
    rect(width / 2, 0, brickWidth, brickHeight);
  }
  if (brick4) {
    fill(0, 300, 0);
    rect(width / 2 + brickWidth, 0, brickWidth, brickHeight);
  }
  if (brick5) {
    fill(0, 300, 0);
    rect(width / 2 - brickWidth * 2, 35, brickWidth, brickHeight);
  }
  if (brick6) {
    fill(0, 0, 300);
    rect(width / 2 - brickWidth, 35, brickWidth, brickHeight);
  }
  if (brick7) {
    fill(300, 300, 300);
    rect(width / 2, 35, brickWidth, brickHeight);
  }
  if (brick8) {
    fill(300, 0, 0);
    rect(width / 2 + brickWidth, 35, brickWidth, brickHeight);
  }
}

function init() {
  RectY = height-height/10;
  RectX = 200;
  RectHeight = 20;
  RectWidth = 100;
  XVelocity = 7;
  r = 70;
  g = 70;
  b = 70;
  r2 = 0;
  g2 = 190;
  b2 = 500;

  CircleX = random(width / 8, width / 1.5);
  CircleY = 180;
  CircleD = 40;
  CircleXVelocity = 2;
  CircleYVelocity = 4;
  brick1 = true;
  brick2 = true;
  brick3 = true;
  brick4 = true;
  brick5 = true;
  brick6 = true;
  brick7 = true;
  brick8 = true;
  brickWidth = 100;
  brickHeight = 35;
  PUX = 200;
  PUY = 50;
  PUWH = 15;
  PU2X = 10;
  PU2Y = 50;
  PU2WH = 15;
}
