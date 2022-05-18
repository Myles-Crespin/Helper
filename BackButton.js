class Button {
  constructor(word, url, number) {
    this.word = word;
    this.url = url;
    this.width = width / 4 - width / 12;
    this.height = height / 12;
    this.x = width / 4 + (number % 2) * (this.width + width / 6);
    this.y = height / 2 + int(number / 2) * (this.height + this.height / 2);
    this.button = createButton("test");
  }
  display() {
    this.button.style("background-color", 255);
    this.button.style("font-size", height / 25 + "px");
    this.button.position(this.x, this.y);
    this.button.size(this.width, this.height);
  }
  redirect() {
    this.button.mousePressed(function buttonpress() {
      window.location.replace(this.url);
    });
  }
  mouseIsOver() {
    this.button.style("background-color", 200);
  }
}
class Button1{
  constructor(x,y,w,h,t,u){
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
doStuff(){
  if (
      mouseX < myButton.button.x + myButton.button.width &&
      mouseX > myButton.button.x &&
      mouseY > myButton.button.y &&
      mouseY < myButton.button.y + myButton.button.height
    ) {myButton.button.style("background-color", 200)}
  myButton.button.mousePressed(function back(){window.location.replace(myButton.u);
                               })
}}
