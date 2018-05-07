
//list of variables
//snake variable
var s;
//scale variable
var scl = 20;
var food;
//my image
var img;
//setting the variable of the score
var Score = 0;
//preloading my image
function preload() {
    img = loadImage('./images/grass.jpg');
}


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  //slowing down the snake
  frameRate(8);
  pickLocation();

}




//setting up what the food will be and where it will spawn
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}



function draw() {
//The text for the score
  var sc = "Score: ";
//The grass image
  background(img);
// if statement to set what happens if the foood gets eaten such as increase the score and create a new location for food.
    if (s.eat(food)) {
      pickLocation();
      Score = Score + 80;
    }
//Snake functions
    s.death();
    s.update();
    s.show();
//food position and size
    fill('red');
    rect(food.x, food.y, scl, scl);
///score text,color and size
    fill('white');
    text(sc + Score, 10, 30);
    textSize(30);



}


//setting directional pad for snake
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
