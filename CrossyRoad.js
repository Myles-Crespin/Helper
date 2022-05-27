//this program is controlled with the arrow keys and is a basic crossy road game
let cars = []; //declares array
let MyPlayer; //declares class
let lose; //lose variable
function setup() {
  lose = false;
  createCanvas(window.innerWidth, window.innerHeight);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  myPlayer = new Player(); //creates class
  for (let i = 0; i < 15; i++) {
    cars[i] = new Car(
      i * 20,
      random(30, window.innerHeight - 10),
      random(1, 4)
    );
    //cars array equals class
  }
}

function draw() {
  background(150);
  myButton.doStuff()
  if (lose) {
    textSize(25);
    text("You Lose", width / 2, height / 2);
  }
  for (let i = 0; i < cars.length; i++) {
    //calls the display and drive function 10 times
    cars[i].display();
    cars[i].drive();
    cars[i].hitPlayer();

    if (cars[i].xpos > width) {
      //resets x position once the car reaches the edge
      cars[i].xpos = 0;
    }
  }
  myPlayer.display(); //displays the player
  if (keyIsDown(40)) {
    //if down arrow is pressed move down
    myPlayer.down();
  }
  if (keyIsDown(38)) {
    //if up arrow is pressed move up
    myPlayer.up();
  }
  if (keyIsDown(37)) {
    //if left arrow is pressed move left
    myPlayer.left();
  }
  if (keyIsDown(39)) {
    //if right arrow is pressed move right
    myPlayer.right();
  }
  if (myPlayer.y + myPlayer.d / 2 >= height) {
    //if the player makes it to the other side you win
    textSize(25);
    text("Winner", width / 2, height / 2);
    myPlayer.speed = 0;
  }
}
class Player {
  constructor() {
    //creates positions, speed, and size variables
    this.x = 200;
    this.y = 10;
    this.d = 10;
    this.speed = 2;
  }
  display() {
    //displays circle
    noStroke();
    fill(300);
    ellipse(this.x, this.y, this.d);
  }
  up() {
    //moves up
    this.y -= this.speed;
  }
  down() {
    //moves down
    this.y += this.speed;
  }
  left() {
    //moves left
    this.x -= this.speed;
  }
  right() {
    //moves right
    this.x += this.speed;
  }
}

class Car {
  constructor(x, y, s) {
    //creates variables for color, position, and speed
    this.c = color(random(400), random(400), random(400));
    this.xpos = x;
    this.ypos = y;
    this.xspeed = s;
  }

  display() {
    //displays car
    fill(this.c);
    rect(this.xpos, this.ypos, 20, 10);
  }

  drive() {
    //moves the car to the right
    this.xpos += this.xspeed;
  }
  hitPlayer() {
    //if player hits car
    if (
      myPlayer.x + myPlayer.d / 2 >= this.xpos &&
      myPlayer.x - myPlayer.d / 2 <= this.xpos + 20 &&
      myPlayer.y + myPlayer.d / 2 >= this.ypos &&
      myPlayer.y - myPlayer.d / 2 < this.ypos + 10
    ) {
      //if the player hits the car you lose
      lose = true;
      myPlayer.speed = 0;
    }
  }
}
