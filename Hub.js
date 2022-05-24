//this program makes all the buttons for getting to the other programs
let buttons;
function setup() {//mostly defining variables, also runs some functions.
  createCanvas(window.innerWidth, window.innerHeight);
  buttons = [];
  let texts = ['Scheduler', 'Time Manager', 'Therapist Friend',' Procrastination Center', '5', '6'];
  let urls = ['Scheduler', 'Time-Manager', 'Therapist', 'Procrastination-Center', '5', '6'];
  for (let i = 0; i < 6; i++) {
    buttons[i] = new Button(texts[i], urls[i], i);
    buttons[i].display();
  }
}

function draw() {//shows text and detects when mouse is over
  background(0);
  fill(0, 255, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("8th Grade Helper", width / 2, height / 4);
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
  display() {//display settings for button
    this.button.style("background-color", 255);
    this.button.style("font-size", height / 35 + "px");
    this.button.position(this.x, this.y);
    this.button.size(this.width, this.height);
  }
  redirect() {//this is what happens when the button is pressed
    let lru = this.url
    this.button.mousePressed(function buttonpress() {
      window.location.replace(lru);
    });
  }
  mouseIsOver() {//this is what happens when the mouse is over the button
    this.button.style("background-color", 200);
  }
}
