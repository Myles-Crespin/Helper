let myAnswerClass;
let box; //creating a submission box
let button2; //creating a second button
let b2; //no button
let b3; //yes button

//creates the buttons position
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);//makes canvas window height and width
  myAnswerClass = new AnswerClass(); //creates class
  box = createInput(); //creating a submission box
  box.position(75, 100); //defines the box position
  button = createButton("Submit"); //creates a submit button
  button.position(box.x + box.width, box.y); //creates the buttons position
  b2 = false; //no button is false
  b3 = false; //yes button is false
  button.mousePressed(gAnswer); //when the first button is pressed call function gAnswer
   myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/") //creates class
}

function draw() {
  background(220);
myButton.doStuff() //allows the button to work
  myAnswerClass.display(); //display function
  if (myAnswerClass.answerNumber > 1) {
    myAnswerClass.newQuestion(); //if the mouse has been pressed show other question
  }
  if (myAnswerClass.answerNumber > 2) {
    //when the two previous questions have been answered
    myAnswerClass.finalAnswer(); //show final answer after final click
    button2 = createButton("No"); //gives the no button a value
    button2.position(300, 310); //sets position
    button2.mousePressed(trueOrFalse1); //when pressed calls trueOrFalse function
    button3 = createButton("Yes"); //gives the yes button a value
    button3.position(250, 310); //sets position
    button3.mousePressed(trueOrFalse2); //when pressed calles the other trueOrFalse function

    text("Are you satisfied with this answer?", 150, 300); //displays text
  }
  if (b2) {
    //shows text
    text("Well, too bad.", 300, 350);
  } else if (b3) {
    //shows text
    text("Enjoy your newly learned wisdom.", 300, 350);
  }
}
function trueOrFalse1() {
  //makes b2 true so that the if statement is true
  b2 = true;
}
function trueOrFalse2() {
  //makes b3 true so that the if statement is true
  b3 = true;
}
function gAnswer() {
  //clears answer box
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
