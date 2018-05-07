var s;
var scl = 20;
var food;

let img;

function preload() {
    img = loadImage('./images/grass.jpg');
}


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(8);
  pickLocation();

}
//function


function pickLocation() {

  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {

  background(img);


    if (s.eat(food)) {
      pickLocation();
    }
    s.death();
    s.update();
    s.show();


    fill('red');
    rect(food.x, food.y, scl, scl);

}



function keyPressed() {
    if (keyCode === UP_ARROW ){
  s.dir(0, -1);
} else if (keyCode === DOWN_ARROW){
  s.dir(0, 1);
} else if (keyCode === RIGHT_ARROW){
s.dir(1, 0);
} else if (keyCode === LEFT_ARROW){
s.dir(-1, 0);
}

}
