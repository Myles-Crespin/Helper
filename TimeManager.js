//this program makes you input how many projects you have, how much time you have, and how many breaks you want. It then calculates the most efficient way to get your work done
let box; //declaring first box
let myProjectC; //declaring class
let button; //declaring button
let timeWorked; //declaring amount of time you have to work
let button1; //declaring time button
let button2; //declaring time button
let button3; //declaring time button
let button4; //declaring time button
let button5; //declaring time button
let button6; //declaring time button
let q; //declaring question
let box2; //declaring second box
let box2Button; //declaring second box's button
let box3; //declaring third box
let box3Button; //declaring third box's button
let freeTime; //declaring amount of free time
let timeLeftOver; //declaring the time left after working
let breaks; //declaring the number of breaks
let extraB; //declaring when each brake should be taken

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  box = createInput(); //creating a submission box
  box.position(75, 100); //defines the box position
  button = createButton("Submit"); //creates a submit button
  button.position(box.x + box.width, box.y); //creates the buttons
  myProjectC = new projectC(); //declaring class
  timeWorked = 0; //place holding value
  box2 = createInput(); //creating a submission box
  box2.position(75, 100); //defines the box position
  box2Button = createButton("Submit"); //creates a submit button
  box2Button.position(box2.x + box2.width, box2.y); //creates the buttons
  box2.hide(); //hides box2
  box2Button.hide(); //the second button
  box3 = createInput(); //creating a submission box
  box3.position(75, 100); //defines the box position
  box3Button = createButton("Submit"); //creates a submit button
  box3Button.position(box3.x + box3.width, box3.y); //creates the buttons
  box3.hide(); //hides the third box
  box3Button.hide(); //hides the third box's button
  q = "How many projects do you have?"; //assigns the first question
}

function draw() {
  background(220);
  myButton.doStuff();
  if (myProjectC.tgo) {
    //if this variable is true
    myProjectC.question(); //displays the next question for how much time each project will take
  }
  textAlign(CENTER); //moves text to center
  text(q, 200, 70); //displays the questions above the box
  button.mousePressed(buttons); //when the the first button is pressed 6 more buttons will be called

  if (myProjectC.x > int(box.value())) {
    //if the amount of buttons clicked is greater than the amount of projects hide the 6 buttons for time, myProject.tgo is now false, the question is changed, and the second box and button are shown
    myProjectC.tgo = false;
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    box.hide();
    button.hide();
    q = "How much free time (in minutes) do you have for theese projects?";
    box2.show();
    box2Button.show();
  }
  box2Button.mousePressed(fTime); //when the second box's button is pressed the fTime function is called
  if (freeTime >= 0 || freeTime <= 0) {
    //when freeTime has a value hide the second box and button show the third and give the final question
    box2.hide();
    box2Button.hide();
    box3.show();
    box3Button.show();
    q = "How many breaks would you like?";
  }
  box3Button.mousePressed(b); //when box threes button is pressed call function b
  extraB = int(breaks) + 1; //gives extra time a value
  if ((timeWorked - freeTime > 0 && breaks >= 0) || breaks <= 0) {
    //if  you dont have enough time display the following text
    textSize(15);
    text(
      "It appears you require more time for your \n projects than what you have, some suggestions would be: \n A. Email your teacher for an extention \n B. Cut something from your schedule to make more time \n C. Drop out of school ",
      200,
      200
    );
  } else if ((timeWorked - freeTime < 0 && breaks >= 0) || breaks <= 0) {
    //if you have enough time for your work than make time left over equal to that amount, center text at size 15, display the most efficient way to finish the work
    timeLeftOver = freeTime - timeWorked;

    textAlign(CENTER);
    textSize(15);
    text(
      "The most efficent way to finish your work \n would be to do the " +
        timeWorked +
        " minutes of work \n accompanied by " +
        breaks +
        " seperate " +
        int(timeLeftOver / breaks) +
        " minute breaks.\nEach break at " +
        "1/" +
        extraB +
        " of the workload done.",
      200,
      200
    );
  }
}
function b() {
  //gives breaks the value of box3
  breaks = box3.value();
}
function fTime() {
  //gives free time the value of box2
  freeTime = int(box2.value());
}

function buttons() {
  //makes myProjectC.tgo true, creates the 6 time button, calls other functions when those 6 are pressed
  myProjectC.tgo = true;
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
  button1.mousePressed(b1);
  button2.mousePressed(b2);
  button3.mousePressed(b3);
  button4.mousePressed(b4);
  button5.mousePressed(b5);
  button6.mousePressed(b6);
}

class projectC {
  constructor() {
    //gives tgo a fals value and gives x a value of 1
    this.x = 1;
    this.tgo = false;
  }
  question() {
    //question for time
    text("How long will project " + this.x + " take?", 100, 250);
  }
}

function b1() {
  //adds 15 minutes to the amount of time worked and makes x one greater
  timeWorked += 15;
  myProjectC.x++;
}
function b2() {
  //adds 30 minutes to the amount of time worked and makes x one greater
  timeWorked += 30;
  myProjectC.x++;
}
function b3() {
  //adds 45 minutes to the amount of time worked and makes x one greater
  timeWorked += 45;
  myProjectC.x++;
}
function b4() {
  //adds 60 minutes to the amount of time worked and makes x one greater
  timeWorked += 60;
  myProjectC.x++;
}
function b5() {
  //adds 90 minutes to the amount of time worked and makes x one greater
  timeWorked += 90;
  myProjectC.x++;
}
function b6() {
  //adds 120 minutes to the amount of time worked and makes x one greater
  timeWorked += 120;
  myProjectC.x++;
}
