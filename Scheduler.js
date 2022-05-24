// In this program, you input your sections for classes and it outputs your schedule. It also saves your schedule in cookies.
// blue = math, green = science, purple = english, yellow = language, red = history, pink = art1, orange = art2
let buttonText, section, number, words, input1, button, language, acc, variable;
let s, m, e, l, h, pe;
let s1, s2, s3, s4;
let h1, h2, h3, h4;
let mA, m2, m3, m4;
let lS1, lS2, lS3, lF1, lF2, lM1, lA1;
let e1, e2, e3, e4;
function preload() {//for cookies
  section = getItem("section");
}
function setup() { //mostly defines variables, it also runs some functions.
  createCanvas(innerWidth, innerHeight);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")
  buttonText = "Next";
  number = 0;
  variable = 0;
  words = [
    "History",
    "Science",
    "Math",
    "English",
    "Art 1 (The Art You Have on A days)",
    "Art 2 (The Art You Have on C days)",
    "language",
    "language",
  ];
  background(255);
  acc = false;
  classes();
  if (section == null) {
    section = [];
    go();
  } else {
    submit();
  }
}

function draw() { //just for the back button
myButton.doStuff()} 

function go() {//this function starts all the inputs
  textSize(15);
  text(words[number], 110, 145);
  if (number < 4 || number == 7) {
    text("8-", 190, 180);
  }
  input1 = createInput();
  input1.size(100, 20);
  input1.position(210, 170);
  button = createButton(buttonText);
  button.position(input1.x + input1.width, 170);
  button.size(50, 26);
  button.mousePressed(pressed);
}
function pressed() { //this is what happens when the button is pressed, all the if statements are doing different things depending on which question you are on
  if (number != 6) {
    section[number] = input1.value();
  }
  number++;
  if (number == 2) {
    background(255);
    button.remove();
    input1.remove();
    button1 = createButton("Accelerated");
    button1.position(20, 170);
    button1.size(90, 26);
    button1.mousePressed(function Accelerated() {
      pressed();
      section[number - 1] = 0;
    });
    go();
  } else if (number < 6 || number == 8) {
    background(255);
    button.remove();
    input1.remove();
    if (number == 3) {
      button1.remove();
    }
    if (number == 8) {
      if (language == "french") {
        section[7] = int(section[7]) + 3;
      }

      submit();
    } else {
      go();
    }
  } else if (number == 6) {
    button.remove();
    input1.remove();
    background(255);
    textSize(15);
    text(words[number], 100, 160);
    button = createButton("Spanish");
    button.position(10, 170);
    button.size(70, 40);
    button.mousePressed(function spanish() {
      language = "spanish";
      pressed();
    });
    button2 = createButton("French");
    button2.position(button.x + button.width + 20, 170);
    button2.size(70, 40);
    button2.mousePressed(function french() {
      language = "french";
      pressed();
    });
    button3 = createButton("Mandarin");
    button3.position(button2.x + button.width + 20, 170);
    button3.size(70, 40);
    button3.mousePressed(function mandarin() {
      section[7] = 6;
      pressed();
    });
    button4 = createButton("ASL");
    button4.position(button3.x + button.width + 20, 170);
    button4.size(70, 40);
    button4.mousePressed(function ASL() {
      section[7] = 7;
      pressed();
    });
  } else if (number == 7) {
    button.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    background(255);
    if (language == "french" || language == "spanish") {
      buttonText = "Submit";
      go();
    } else {
      submit();
    }
  }
}
function math() {//show math periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(0, 0, 255);
    if (m[section[2]][whileVariable] != 0) {
      textAlign(CENTER);
      rect(90 * whileVariable, m[section[2]][whileVariable] * 40 - 40, 90, 40);
      fill(0, 0, 0);
      text("math", 90 * whileVariable, m[section[2]][whileVariable] * 40 - 40);
    }
    whileVariable++;
  }
}
function science() {//show science periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(0, 255, 0);
    if (s[section[1] - 1][whileVariable] != 0) {
      textAlign(CENTER);

      rect(
        90 * whileVariable,
        s[section[1] - 1][whileVariable] * 40 - 40,
        90,
        40
      );
      fill(0, 0, 0);
      text(
        "science",
        90 * whileVariable + 25,
        s[section[1] - 1][whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function history() {//show history periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(255, 0, 0);
    if (h[section[0] - 1][whileVariable] != 0) {
      textAlign(CENTER);
      rect(
        90 * whileVariable,
        h[section[0] - 1][whileVariable] * 40 - 40,
        90,
        40
      );
      fill(0, 0, 0);
      text(
        "history",
        90 * whileVariable + 25,
        h[section[0] - 1][whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function english() {//show english periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(215, 100, 255);
    if (e[section[3] - 1][whileVariable] != 0) {
      textAlign(CENTER);
      rect(
        90 * whileVariable,
        e[section[3] - 1][whileVariable] * 40 - 40,
        90,
        40
      );
      fill(0, 0, 0);
      text(
        "english",
        90 * whileVariable + 25,
        e[section[3] - 1][whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function language1() {//show language periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(252, 248, 3);
    if (l[section[7] - 1][whileVariable] != 0) {
      textAlign(CENTER);
      rect(
        90 * whileVariable,
        l[section[7] - 1][whileVariable] * 40 - 40,
        90,
        40
      );
      fill(0, 0, 0);
      text(
        "language",
        90 * whileVariable + 25,
        l[section[7] - 1][whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function art1() {//show art 1 periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(255, 135, 0);
    if (art11[whileVariable] != 0) {
      textAlign(CENTER);
      rect(90 * whileVariable, art11[whileVariable] * 40 - 40, 90, 40);
      fill(0, 0, 0);
      text(
        "art1",
        90 * whileVariable + 25,
        art11[whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function art2() {//show art 2 periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(231, 84, 128);
    if (art22[whileVariable] != 0) {
      textAlign(CENTER);
      rect(90 * whileVariable, art22[whileVariable] * 40 - 40, 90, 40);
      fill(0, 0, 0);
      text(
        "art2",
        90 * whileVariable + 25,
        art22[whileVariable] * 40 - 40 + 10
      );
    }
    whileVariable++;
  }
}
function PE() {//show PE periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(50, 168, 155);
    if (pe[whileVariable] != 0) {
      textAlign(CENTER);
      rect(90 * whileVariable, pe[whileVariable] * 40 - 40, 90, 40);
    }
    fill(0, 0, 0);
    text("PE", 90 * whileVariable + 25, pe[whileVariable] * 40 - 40 + 10);

    whileVariable++;
  }
}
function lunch() {//show lunch periods
  let whileVariable;
  whileVariable = 0;
  while (whileVariable <= 10) {
    fill(220);
    rect(90 * whileVariable, 4 * 40 - 40, 90, 40);

    whileVariable++;
  }
}
function submit() {//run all the subject functions
  background(255);
  science();
  math();
  history();
  english();
  art1();
  art2();
  PE();
  lunch();
  language1();
  storeItem("section", section);
}
function classes() {//data table
  s = [s1, s2, s3, s4];
  s[0] = [0, 1, 2, 1, 0, 2, 0, 2, 1, 1];
  s[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  s[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  s[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  m = [mA, m2, m3, m4];
  m[0] = [1, 6, 3, 0, 0, 1, 6, 5, 3, 0];
  m[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  m[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  m[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  e = [e1, e2, e3, e4];
  e[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  e[1] = [0, 3, 0, 6, 2, 2, 5, 0, 2, 5];
  e[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  e[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  l = [lS1, lS2, lS3, lF1, lF2, lM1, lA1];
  l[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  l[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  h = [h1, h2, h3, h4];
  h[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  h[1] = [3, 0, 5, 3, 2, 0, 3, 0, 5, 3];
  h[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  h[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  art11 = [5, 0, 0, 2, 0, 5, 1, 0, 0, 0];
  art22 = [0, 0, 1, 0, 5, 0, 0, 1, 0, 2];
  pe = [7, 7, 0, 7, 0, 7, 7, 0, 7, 0];
}
