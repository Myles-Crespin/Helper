//test
let myAnswerClass;
let box; //creating a submission box
let button2;
let y;
let b2;
let b3;

//creates the buttons position
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  myAnswerClass = new AnswerClass(); //creates class
  box = createInput(); //creating a submission box
  box.position(75, 100); //defines the box position
  button = createButton("Submit"); //creates a submit button
  button.position(box.x + box.width, box.y); //creates the buttons position
  b2 = false;
  b3 = false;
  button.mousePressed(gAnswer);
   myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
}

function draw() {
  background(220);
myButton.doStuff()
  myAnswerClass.display(); //display function
  if (myAnswerClass.answerNumber > 1) {
    myAnswerClass.newQuestion(); //if the mouse has been pressed show other question
  }
  if (myAnswerClass.answerNumber > 2) {
    myAnswerClass.finalAnswer(); //show final answer after final click
    button2 = createButton("No");
    button2.position(300, 310);
    button2.mousePressed(trueOrFalse1);
    button3 = createButton("Yes");
    button3.position(250, 310);
    button3.mousePressed(trueOrFalse2);

    text("Are you satisfied with this answer?", 150, 300);
  }
  if (b2) {
    text("Well, too bad.", 300, 350);
  } else if (b3) {
    text("Enjoy your newly learned wisdom.", 300, 350);
  }
}
function trueOrFalse1() {
  b2 = true;
}
function trueOrFalse2() {
  b3 = true;
}
function gAnswer() {
  myAnswerClass.update(box.value());
  box.value("");
}

class AnswerClass {
  constructor() {
    this.randomAnswer = int(random(10)); //makes a random integer value
    this.question = "What's Your Name? "; //question text variable
    this.answerText = ""; //answer text variable
    this.answerNumber = 1; //keeps track of number of answers
    this.name = ""; //leaves it empty for now
    this.userQuestion = ""; //leaves it empty for now
    this.answerString = [
      "I dont believe that matters, because only what you truly care about does.",
      "You got this just keep moving.",
      "Ghandi once said be the change you want to see in the world.",
      "Haters gonna hate.",
      "What do you feel about that.",
      " Listen to your heart and you'll find the answer.",
      "Hmmm, well mabye console someone close to you.",
      "I suggest making the best of a bad situation",
      "Believe it true and it will come true.",
    ]; //string of answers
  }

  display() {
    textSize(15); //text size
    text(this.question, 100, 50); //displays question
  }
  newQuestion() {
    this.question = "What's Your Question?"; //question value
  }
  update(n) {
    if (this.answerNumber == 1) {
      this.name = n;
    }
    this.answerNumber++; //answer number increases by one
  }

  finalAnswer() {
    textSize(15);
    text(this.answerText, 10, 200);
    this.answerText =
      "Well " + this.name + ", \n" + this.answerString[this.randomAnswer]; //displays the final answer of the two questions
  }
}
