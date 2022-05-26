//this game controls a paddle with the arrow keys and is a pong game

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
  CircleYVelocity,
  RandValue,
  Chance;
//deaclares variables for the two paddles dimensions and position, the circles dimensions and position, aswell as velocity for each of them
function setup() {
  //creates the wdith, height, and postion of each shape 
  createCanvas(window.innerWidth, window.innerHeight);
  RightRectX = width - 50;
  RightRectY = 10;
  RightRectHeight = 80;
  RightRectWidth = 20;
  LeftRectY = 10;
  LeftRectX = 30;
  LeftRectHeight = 80;
  LeftRectWidth = 20;
  // (Use the YVelocity to control how hard of a setting the game is higher# = harder lower# = easier)
  YVelocity = height / 50;
  CircleX = 180;
  CircleY = 150;
  CircleD = 40;
  Chance = 10;
  RandValue = 1;
  CircleXVelocity = random(width/200,width / 100);
  CircleYVelocity = random(height/400, height / 200);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
}

function draw() {
  //displays the left rect, fill, and no stroke
  background(220);
  myButton.doStuff()
  fill(300, 240, 0);
  noStroke();
  frameRate(400);
  rect(LeftRectX, LeftRectY, LeftRectWidth, LeftRectHeight);
  if (int(RandValue) == 2) {
    //randomly moves the right rect up and down
    RightRectY += YVelocity;
  } else {
    //otherwise it should hit the ball
    RightRectY = CircleY - RightRectHeight / 2;
  }
  if (keyIsDown(40)) {
    //if bottom arrow is down move the left rect down
    LeftRectY += height / 200;
  }
  if (keyIsDown(38)) {
    //if the top arrow is down move it up
    LeftRectY -= height / 200;
  }
  rect(RightRectX, RightRectY, RightRectWidth, RightRectHeight); //right rect
  if (RightRectY + RightRectHeight > height || RightRectY < 0) {
    //keeps the right rect within the screen
    YVelocity *= -1;
  }
  frameRate(70);
  fill(100, 100, 100);
  ellipse(CircleX, CircleY, CircleD, CircleD); //ball

  if (
    CircleX - CircleD / 2 <= LeftRectX + LeftRectWidth &&
    CircleY >= LeftRectY &&
    CircleY <= LeftRectY + LeftRectHeight
  ) { //if the ball hits the left paddle move it the other way
    CircleXVelocity *= -1;
  }
  if (
    CircleX + CircleD / 2 > RightRectX &&
    CircleY >= RightRectY &&
    CircleY <= RightRectY + RightRectHeight
  ) {
    //if the ball hits the right paddle move it the other way and make RandValue equal to random number
    RandValue = random(Chance);
    CircleXVelocity *= -1;
  }
//the balls psotion is added to whatever the velocitys are
  CircleX += CircleXVelocity;
  CircleY += CircleYVelocity;
  if (CircleY + CircleD / 2 > height || CircleY - CircleD / 2 < 0) {
    //if the ball touches the bottom or top it will bounce off
    CircleYVelocity *= -1;
  }

  if (CircleX - CircleD / 2 < 0 || CircleX + CircleD / 2 > width) {
    //if the ball hits either side it stops
    CircleXVelocity = 0;
    CircleYVelocity = 0;
    RightRectY = 0;
  }
  if (CircleX - CircleD / 2 < 0) {
    //if the ball hits the left side you have lost
    textSize(50);
    text("You Lost", 200, 50);
  }
  if (CircleX + CircleD / 2 > width) {
    //if the ball hits the right side you have won
    textSize(50);
    text("K.O", 250, 50);
  }
}
