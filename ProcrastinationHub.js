//This program makes all he buttons that lead you to different games
let buttons;
function setup() {//mostly defining variables and also calling some functions.
  createCanvas(window.innerWidth, window.innerHeight);
  buttons = [];
  let texts = ['WASD Game', 'Pong', 'Brick Breaker',' Rain Catcher', 'Mad Libs', 'Crossy Road'];
  let urls = ['WASD-Game', 'Pong', 'Brick-Breaker', 'Rain-Catcher', 'Mad-Libs', 'Crossy-Road'];
  for (let i = 0; i < 6; i++) {
    buttons[i] = new Button(texts[i], urls[i], i);
    buttons[i].display();
    myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  }
}

function draw() {//does the text and does stuff when mouse is over button and calls the function that makes the button redirect and calls a function for the back button.
  background(0,0,255);
  fill(255, 0, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  myButton.doStuff()
  text("Procrastination Center", width / 2, height / 4);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].redirect();
    if (
      mouseX < buttons[i].button.x + buttons[i].button.width &&
      mouseX > buttons[i].button.x &&
      mouseY > buttons[i].button.y &&
      mouseY < buttons[i].button.y + buttons[i].button.height
    ) {
      buttons[i].mouseIsOver();
    }
  }
}

class Button {//button class
  constructor(word, url, number) {//defining variables
    this.word = word;
    this.url = url;
    this.width = width / 4 - width / 12;
    this.height = height / 12;
    this.x = width / 4 + (number % 2) * (this.width + width / 6);
    this.y = height / 2 + int(number / 2) * (this.height + this.height / 2);
    this.button = createButton(this.word);
  }
  display() {//changes some button settings
    this.button.style("background-color", 255);
    this.button.style("font-size", height / 35 + "px");
    this.button.position(this.x, this.y);
    this.button.size(this.width, this.height);
  }
  redirect() {//this is what happens when the button is pushed
    let lru = this.url
    this.button.mousePressed(function buttonpress() {
      window.location.replace(lru);
    });
  }
  mouseIsOver() {//this is what happens when the mouse is over the button
    this.button.style("background-color", 200);
  }
}
