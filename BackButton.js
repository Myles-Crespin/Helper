//this program creates the back button; it is called from other files so it is only a class.
let myButton;
class Button1{//button class
  constructor(x,y,w,h,t,u){//defining vairables and changing some button settings
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.u = u
    this.button = createButton(t)
    this.button.position(x,y)
    this.button.size(w,h) 
  this.button.style("background-color", 255);
    this.button.style("font-size", height / 26 + "px");  }
doStuff(){//this is called in the draw function of most programs; it does stuff when the mouse is over the button and when the button is pressed.
  if (
      mouseX < myButton.button.x + myButton.button.width &&
      mouseX > myButton.button.x &&
      mouseY > myButton.button.y &&
      mouseY < myButton.button.y + myButton.button.height
    ) {myButton.button.style("background-color", 200)}
  myButton.button.mousePressed(function back(){window.location.replace(myButton.u);
                               })
}}
