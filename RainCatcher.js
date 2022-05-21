
let myCatcher; //declaring object
let myTimer; // declaring object
let drops = []; //declaring array
let bground; //declaring variable
let highScore; //highscore
let score; //current score
let numDrops; //number of drops
function preload() {
  highScore = getItem("all"); //highscore carries over
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  score = 0; //starting score
  myCatcher = new Catcher(32); // Catcher with radius of 32
  myTimer = new Timer(500); // new class
  numDrops = int(random(10, 50));
  for (let i = 0; i < numDrops; i++) {
    //i equals 0, there are ten i
    drops[i] = new Raindrop(); //creating new drop to put in array
  }
  myTimer.startTimer(); //starts the timer
  bground = 255; //background is 255
}

function draw() {
  background(bground);
  myButton.doStuff();
  textSize(20); //makes text bigger
  textAlign(LEFT); //aligns text
  text("Score " + score, 20, 20); //shows score
  text("High Score " + highScore, 20, 40); //shows highscore
  myCatcher.setLocation(mouseX, mouseY); //moves with mouse
  myCatcher.display(); //displays catcher

  for (let i = 0; i < drops.length; i++) {
    if (drops[i].check(height)) {
      // if the raindrop falls off the screen
      textSize(20); // gives text a larger size
      textAlign(CENTER); //Makes the text position dependant on its center
      text("SUCKS TO SUCK", width / 2, height / 2); // shows a text in the center
    }
    if (score == numDrops) {
      //if all drops are caught
      textSize(20); // gives text a larger size
      textAlign(CENTER); //Makes the text position dependant on its center
      text("Winner, Winner, Chicken Dinner", width / 2, height / 2); // shows a text in the center
    }

    drops[i].move(); // moves rain
    drops[i].display(); // displays rain

    if (myCatcher.catchDrop(drops[i])) {
      drops[i].isCaught(); // calles the isCaught function if the two are touching
      score++; //score plus one
      if (score > highScore) {
        //if the score is greater than the highscorw
        highScore = score; //the highscore changes
        storeItem("all", highScore); //new highscore
      }
    }
  }
  if (myTimer.isFinished()) {
    bground = color(random(255), random(255), random(255)); //random background
    myTimer.startTimer(); //calls the startimer function
  }
}

class Catcher {
  constructor(tempR) {
    this.radius = tempR;
    //radius
    this.x = 0;
    //x pos
    this.y = 0;
    //y pos
  }
  setLocation(tempX, tempY) {
    this.x = tempX;
    //x pos
    this.y = tempY;
    //y pos
  }
  display() {
    fill(0, 200, 200);
    //blue color
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    //circle that has a x value of this.x, a y value of this.y, and a diamter of this.radius times 2
  }

  catchDrop(aDrop) {
    let distance = dist(this.x, this.y, aDrop.x, aDrop.y); // Calculate distance

    if (distance < this.radius + aDrop.radius) {
      //compares the two distances
      return true; //intersecting!
    } else {
      return false; //not intersecting
    }
  }
}

class Raindrop {
  constructor() {
    this.x = random(width); // x value
    this.y = random(-200, 0); // y value
    this.speed = 3; // speed of rain
    this.radius = 5; // raidus of rain
  }

  check(p) {
    if (this.y >= p) {
      // if y is greater than the parameter
      return true; // this if statement becomes true
    } else {
      return false; // if y is not greater than the parameter that the if statement is false
    }
  }

  move() {
    this.y += this.speed; // the raindrop becomes faster based on the intial speed plus whatever this.speed equals
  }

  display() {
    noStroke();
    fill(0, 0, 200); //color
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    ellipse(this.x, this.y - 4, this.radius * 1.2, this.radius * 1.2);
    // displays the raindrop
  }

  isCaught() {
    this.speed = 0; //stops it from moving
    this.x = -1000; //moves it off screen
  }
}

class Timer {
  constructor(t) {
    this.startTime = 0; //starting variable
    this.totalTime = t; //ending variable
  }

  startTimer() {
    if (millis() - this.startTime >= this.totalTime) {
      //if the amount of time passed minus the start time is greater than a certain amount
      this.startTime = millis(); // makes it possible to reuse if statement
    }
  }

  isFinished() {
    if (millis() - this.startTime >= this.totalTime) {
      //if the amount of time passed minus the start time is greater than a certain amount
      return true;
      //makes it true
    }
  }
}
