
//this program makes you input how many projects you have, how much time you have, and how many breaks you want. It then calculates the most efficient way to get your work done

let box;
let myProjectC;
let button;

function setup() {
  createCanvas(400, 400);
  box = createInput(); //creating a submission box
  box.position(75, 100); //defines the box position
  button = createButton("Submit"); //creates a submit button
  button.position(box.x + box.width, box.y); //creates the buttons
  myProjectC = new projectC();
}

function draw() {//for text and background mostly an detects if button is pressed
  background(220);
   if(myProjectC.tgo){
    myProjectC.question();
  }
  text("How many projects do you have?", 100, 70);
  button.mousePressed(buttons);
}
function buttons() { //mostly creates buttons
  let botton1;
  let botton2;
  let botton3;
  let botton4;
  let botton5;
  let botton6;
  myProjectC.tgo = true
  button1 = createButton("15m");
  button1.position(50, 300);
  button2 = createButton("30m");
  button2.position(100, 300);
  button3 = createButton("45m");
  button3.position(150, 300);
  button4 = createButton("1h");
  button4.position(200, 300);
  button5 = createButton("1.5h");
  button5.position(250, 300);
  button6 = createButton("2h");
  button6.position(300, 300);
  button1.mousePressed(xAdd);
  button2.mousePressed(xAdd);
  button3.mousePressed(xAdd);
  button4.mousePressed(xAdd);
  button5.mousePressed(xAdd);
  button6.mousePressed(xAdd);
} 
function xAdd(){//increases the x variable
    myProjectC.x++}
class projectC {
  constructor() {//setup values for projectC class
    this.x = 1;
    this.tgo = false
  }
  question() {//displays text
    text("How long will project " + this.x + " take?", 100, 250);
  }
}
