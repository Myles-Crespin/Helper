let buttons;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  buttons = [];
  let texts = [1, 2, 3, 4, 5, 6];
  let urls = [1, 2, 3, 4, 5, 6];
  let colors = [
    color(255, 255, 255),
    color(255, 255, 255),
    color(255, 255, 255),
    color(255, 255, 255),
    color(255, 255, 255),
    color(255, 255, 255),
  ];
  for (let i = 0; i < 6; i++) {
    buttons[i] = new Button(texts, urls, colors, i);
    buttons[i].display();
  }
}

function draw() {
  background(220);
  fill(0, 255, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("8th Grade Helper", width / 2, height / 4);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].redirect();
  }
}

class Button {
  constructor(word, url, color, number) {
    this.word = word;
    this.url = url;
    this.color = color;
    this.width = width / 4 - width / 12;
    this.height = height / 12;
    this.x = width / 4 + (number % 2) * (this.width + width / 6);
    this.y = height / 2 + int(number / 2) * (this.height + this.height / 2);
  }
  display() {
    this.button = createButton("test");
    this.button.style("background-color", this.color);
    this.button.style("font-size", 30 + "px");
    this.button.position(this.x, this.y);
    this.button.size(this.width, this.height);
  }
  redirect() {
    this.button.mousePressed(function buttonpress() {
      window.location.replace(this.url);
    });
  }
}
