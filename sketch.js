function setup() {
  createCanvas(400, 400);
  backgroundColourR = random(255);
  backgroundColourG = random(255);
  backgroundColourB = random(255);
  ball1 = new Ball(30);
  ball2 = new Ball(30);
  ball3 = new Ball(30);
  ball4 = new Ball(30);
  ball5 = new Ball(30);
}

function draw() {
  background(backgroundColourR,backgroundColourG,backgroundColourB);
  ball1.move();
  ball2.move();
  ball3.move();
  ball4.move();
  ball5.move();
}

class Ball{
  
  constructor(diameter){
    this.x = floor(random(200,200));
    this.y = floor(random(200,200));
    this.diameter = diameter;
    this.xChange = random(-10,10);
    this.yChange = random(-10,10);
    this.R = random(255);
    this.G = random(255);
    this.B = random(255);
  }
  
  move(){
    this.x = this.x + this.xChange;
    this.y = this.y + this.yChange;
    if(this.x < 15){
      this.x = 200;
      this.y = 200;
      this.xChange = random(-10,10);
      this.yChange = random(-10,10);
    } if(this.x > width-15){
      this.x = 200;
      this.y = 200;
      this.xChange = random(-10,10);
      this.yChange = random(-10,10);
    } if(this.y < 15){
      this.x = 200;
      this.y = 200;
      this.xChange = random(-10,10);
      this.yChange = random(-10,10);
    } if(this.y > height-15){
      this.x = 200;
      this.y = 200;
      this.xChange = random(-10,10);
      this.yChange = random(-10,10);
    }
    fill(this.R,this.G,this.B);
    noStroke();
    circle(this.x,this.y,this.diameter);
  }
}