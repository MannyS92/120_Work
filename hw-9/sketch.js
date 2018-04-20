
//Bullets Array
let bullets = [];
//controlls of bullet settings
let yspeed =3;
let xspeed =0;
//declaring target variable
var target;




function setup() {
  createCanvas(windowWidth, windowHeight);
  //Create bullet
    let b = new Bullet(width/2, height/2, 10);
    bullets.push(b);

}

function draw() {
    background(0);
    //creation of target
    let target = new Target(windowWidth - 100, height/2, 100);
    target.display();

    for (let i = 0; i < bullets.length; i++) {

        bullets[i].move();
        bullets[i].show();
        bullets[i].edgeBounce();
 //trying to calculate the intersection of both ellipses
        var d = dist(bullets[i].x,bullets[i].y,target.tx,target.ty);

        if (d < bullets[i].r + target.tr) {
// if they touch display..maybe im just too tired, but I cant think of how to make it stay longer
          textSize(32);
          text('BAM! PERFECT SHOT', 10, 30);
          fill(0, 102, 153);
//making bullet fly off after they touch
          bullets[i].xspeed = bullets[i].xspeed -2;
        }
  }


}

// A function to shoot our bullet torward our target
function mousePressed(){
  for(let i = 0; i < bullets.length; i++){
  bullets[i].mouseClicked();

  }
}


///////////////////////////////////////////////////
// Bullet Class
///////////////////////////////////////////////////
class Bullet {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    move() {
        this.x = this.x + this.xspeed ;
        this.y = this.y + this.yspeed ;
        }


    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
//creating the parameter so that it bounce off horizontal or gets recreated if it goes off X axis
    edgeBounce() {
      if (this.y > windowHeight || this.y < 0) {
     	 	  this.yspeed = -this.yspeed;
       	}

        if (this.x > windowWidth || this.x < 0) {
    this.x = width/2;
//recreated
    this.xspeed = 0;
  }

}
//shooting function
mouseClicked(){

this.xspeed = this.xspeed + 10;

}
      }

/////////////////////////////////Target Class///////////////////

class Target {
constructor(tx, ty, tr) {
//target parameters
this.tx = tx;
this.ty = ty;
this.tr = tr;
this.col = color('pink');


}

display() {
  push();
  noStroke(0);
  strokeWeight(10);
  fill(this.col);
  ellipse(this.tx, this.ty, this.tr);
  pop();
}

}
