//this program is a game that is played with the WASD keys; if you touch the walls, you lose; if the enemy touches the walls, you lose; if you touch the enemy, you win
let x1, y1, w1, l1, x2, y2, w2, l2, direction, directions, right1, right2, speed1, speed2, img, img2, img3, YN, YN2

function setup() {//mostly defines variables and it also creates the canvas.
  createCanvas(window.innerWidth, window.innerHeight);
  
  x1 = 10
  y1 = 10
  w1 = 50
  l1 = 50
  x2 = width/2
  y2 = height/2
  w2 = 50
  l2 = 50
  speed1 = 3
  speed2 = 10
  YN = true
  YN2= false
  img = loadImage('Explosion.jpg')
  img2 = loadImage('download.jpeg')
  img3 = loadImage('download (1).jpeg')
  directions = ['right', 'left', 'up', 'down'];
  direction = random(directions);
  myButton = new Button1((width*3)/4,0,width/4,height/10,"Back to Hub","https://ia4252.github.io/Helper/")

}

function draw() {//does all the movement and the drawing of the shapes. It also detects when you win or lose.
  if(YN==false&&YN2==false){//makes it so if you are hitting "s" to move while you lose/win, it dosent instantly restart you
    setTimeout(function timerOver(){
      YN2=true
    },5000)}

  if (keyIsDown(83) && YN == false && YN2) {
    setup()
    YN = true
  }
  if (YN) {
    background(220);

    fill(23, 65, 30)
    rect(x1, y1, w1, l1)
    fill(200, 255, 107)
    rect(x2, y2, w2, l2)
    if (keyIsDown(68)) {
      x1 = x1 + speed1
    } else if (keyIsDown(65)) {
      x1 = x1 - speed1
    } else if (keyIsDown(87)) {
      y1 = y1 - speed1
    } else if (keyIsDown(83)) {
      y1 = y1 + speed1
    }
    direction = random(directions)
    myButton.doStuff()

    if (direction == 'right') {
      x2 = x2 + speed2
    } else if (direction == 'left') {
      x2 = x2 - speed2
    } else if (direction == 'up') {
      y2 = y2 - speed2
    } else if (direction == 'down') {
      y2 = y2 + speed2
    }

    right1 = x1 + w1
    right2 = x2 + w2
    bottom1 = y1 + l1
    bottom2 = y2 + l2
    if (right1 >= x2 && right2 >= x1 && bottom1 >= y2 && bottom2 >= y1) {
      win()
    }
    if (right1 >= width || x1 <= 0 || bottom1 >= height || y1 <= 0) {
      lose2()
    }
    if (right2 >= width || x2 <= 0 || bottom2 >= height || y2 <= 0) {
      lose1()
    }



  }
}

function win() {// what happens when you win
  textAlign(CENTER)
  textSize(50)
  fill(70, 250, 0)
  image(img, 0, 0,width, height+height/10)
  text('YOU WON!!!', width / 2, height / 2 + height/40)
  textSize(20)
  text('You Collided with the enemy and they blew up!', (width / 2, height - height/4))
  text('Press "S" to restart', width / 2, height-height/20)
  YN = false
}

function lose1() {// what happens when you lose in this way
    textAlign(CENTER)
  textSize(50)
  fill(70, 250, 0)
  image(img2, 0, 0, width, height+height/10)
  text('YOU LOST     :(', width / 2 , height / 2 + height/40)
  textSize(18)
  text('You left the gate open and the enemy escaped!', width/ 2, height - height/4)
  text('Press "S" to restart', width / 2, height -height/20)
  YN = false

}

function lose2() {// what happens when you lose in this way
    textAlign(CENTER)
  textSize(50)
  fill(70, 250, 0)
  image(img3, 0, 0, width, height+height/8)
  text('YOU LOST     :(', width/2, height / 2 + height/40)
  textSize(18)
  text('You left the prison and quit your job!', width/ 2, height / 1.6)
  text('Press "S" to restart', width/ 2, height - height/20)
  YN = false


}
