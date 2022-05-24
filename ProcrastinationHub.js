let buttons;
//This program makes all he buttons that lead you to different games
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  buttons = [];
  let texts = ['WASD Game', 'Pong', 'Brick Breaker',' Rain Catcher', 'Mad Libs', '6'];
  let urls = ['WASD-Game', 'Pong', 'Brick-Breaker', 'Rain-Catcher', 'Mad-Libs', '6'];
  for (let i = 0; i < 6; i++) {
    buttons[i] = new Button(texts[i], urls[i], i);
    buttons[i].display();
    myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  }
}

function draw() {
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

class Button {
  constructor(word, url, number) {
    this.word = word;
    this.url = url;
    this.width = width / 4 - width / 12;
    this.height = height / 12;
    this.x = width / 4 + (number % 2) * (this.width + width / 6);
    this.y = height / 2 + int(number / 2) * (this.height + this.height / 2);
    this.button = createButton(this.word);
  }
  display() {
    this.button.style("background-color", 255);
    this.button.style("font-size", height / 35 + "px");
    this.button.position(this.x, this.y);
    this.button.size(this.width, this.height);
  }
  redirect() {
    let lru = this.url
    this.button.mousePressed(function buttonpress() {
      window.location.replace(lru);
    });
  }
  mouseIsOver() {
    this.button.style("background-color", 200);
  }
}
