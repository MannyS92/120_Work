
    let a = 1;
    let x = 0;
    let speed = 1;

    var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircle();
  frameRate(50);
  //setting random color
  r = random(255);
  g = random(255);
  b = random(255);


}
  //create array for width and height of ellipses
  var hypno= [5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195];


function draw() {
  background('pink');
  r = random(255);
  g = random(255);
  b = random(255);
      if ( mouseIsPressed ) {
    fill(150,g,b);
    apoc();
      }
      if ( x > 200 || x < -200 ) {
          speed = speed * -1;
      }
      x = x + speed;
      translate(width/2, height/2);
      drawCircle();
      rotate(a);
      drawCircle();
      a = a + 0.1;
    }

function drawCircle() {
      noFill();
      for (let i = 0; i < 20; i++) {
            // draw an ellipse
        ellipse(0, 0, hypno[i],hypno[i]+5);
        }
}

function apoc() {

      for (let i = 0; i < 100; i++) {
            // draw an ellipse
        fill(r,g,b);
        ellipse(mouseX,mouseY,i,i);
      }
}
