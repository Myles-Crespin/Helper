//Insert whatever you'd like for a funny result
let box,
  button,
  question,
  answerNumber,
  answerText,
  object,
  title,
  title2,
  verb,
  ship,
  place;
//declares  a box and button aswell as variables for each answer
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  question = "Writte an object "; //first question
  box = createInput(); //makes box
  box.position(75, 100); //position
  button = createButton("Submit"); //makes button
  button.position(box.x + box.width, box.y); //position
  answerText = ""; //place holder for answer text
  answerNumber = 1; //answer number 1
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  button.mousePressed(type); // when button is pressed calls type function

  title = ""; //place holder
  title2 = ""; //place holder
  place = ""; //place holder
  object = ""; //place holder
  verb = ""; //place holder
  ship = ""; //place holder
}

function draw() {
  background(220);
  myButton.doStuff()
  textSize(15);
  text(answerText, 10, 150);
  textSize(15);
  text(question, 100, 50);

  if (answerNumber > 1 && answerNumber < 3) {
    //if answer number is 2 change question and call function answer2
    question = "Writte a title (like Presidant, Boss, etc)";
    button.mousePressed(answer2);
  }
  if (answerNumber > 2 && answerNumber < 4) {
    //if answer number is 3 change question and call function answer3
    question = "Writte another title";
    button.mousePressed(answer3);
  }
  if (answerNumber > 3 && answerNumber < 5) {
    //if answer number is 4 change question and call function answer4
    question = "Wirtte a place";
    button.mousePressed(answer4);
  }

  if (answerNumber > 4 && answerNumber < 6) {
    //if answer number is 5 change question and call function answer5
    question = "Writte a verb";
    button.mousePressed(answer5);
  }
  if (answerNumber > 5 && answerNumber < 7) {
    //if answer number is 6 change question and call function answer6
    question = "Writte a ship name";
    button.mousePressed(answer6);
  }

  if (answerNumber > 6) {
    //if answer number is 7 get rid of the question and add the madLibs with the answers provided
    question = " ";
    answerText =
      "As Darth Vader weilded his " +
      object +
      " \nLuke was inches away from death.\n" +
      "He said 'Luke I am your " +
      title +
      "'\nLuke couldnt believe it he yelled 'Liar youre not my " +
      title2 +
      "'.\n'Join me Luke and together we can rule " +
      place +
      "'.\n Nearing the end of the platform Luke decided to " +
      verb +
      ".\n If it wasnt for the " +
      ship +
      " Luke would have surely died.";
  }
}

function type() {
  //increses answer number and makes object the current box value
  object = box.value();

  answerNumber++;
}

function answer2() {
    //increses answer number and makes title the current box value
  title = box.value();

  answerNumber++;
}

function answer3() {
    //increses answer number and makes title2 the current box value
  title2 = box.value();

  answerNumber++;
}

function answer4() {
    //increses answer number and makes place the current box value
  place = box.value();

  answerNumber++;
}

function answer5() {
    //increses answer number and makes verb the current box value
  verb = box.value();

  answerNumber++;
}

function answer6() {
    //increses answer number and makes ship the current box value
  ship = box.value();

  answerNumber++;
}
