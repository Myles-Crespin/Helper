
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

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  question = "Writte an object ";
  box = createInput();
  box.position(75, 100);
  button = createButton("Submit");
  button.position(box.x + box.width, box.y);
  answerText = "";
  answerNumber = 1;
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  button.mousePressed(type);

  title = "";
  title2 = "";
  place = "";
  object = "";
  verb = "";
  ship = "";
}

function draw() {
  background(220);
  myButton.doStuff()
  textSize(15);
  text(answerText, 10, 150);
  textSize(15);
  text(question, 100, 50);

  if (answerNumber > 1 && answerNumber < 3) {
    question = "Writte a title (like Presidant, Boss, etc)";
    button.mousePressed(answer2);
  }
  if (answerNumber > 2 && answerNumber < 4) {
    question = "Writte another title";
    button.mousePressed(answer3);
  }
  if (answerNumber > 3 && answerNumber < 5) {
    question = "Wirtte a place";
    button.mousePressed(answer4);
  }

  if (answerNumber > 4 && answerNumber < 6) {
    question = "Writte a verb";
    button.mousePressed(answer5);
  }
  if (answerNumber > 5 && answerNumber < 7) {
    question = "Writte a ship name";
    button.mousePressed(answer6);
  }

  if (answerNumber > 6) {
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
  object = box.value();

  answerNumber++;
}

function answer2() {
  title = box.value();

  answerNumber++;
}

function answer3() {
  title2 = box.value();

  answerNumber++;
}

function answer4() {
  place = box.value();

  answerNumber++;
}

function answer5() {
  verb = box.value();

  answerNumber++;
}

function answer6() {
  ship = box.value();

  answerNumber++;
}
