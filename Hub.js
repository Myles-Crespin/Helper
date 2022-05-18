let buttons;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  buttons = [];
  let texts = [1, 2, 3, 4, 5, 6];
  let urls = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < 6; i++) {
    buttons[i] = new Button(texts, urls, i);
    buttons[i].display();
    myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  }
}

function draw() {
  background(0);
  myButton.doStuff()
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

