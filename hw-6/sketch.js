//creating my "sun" called circle
    var circle = {
      x: 0,
      y: 0,
      diameter: 400
        };
//var z so I can slow down frame rate
    var z = 1;

function setup(){

//background
  createCanvas(windowWidth,windowHeight);
  background(85);
  frameRate(z/2);
//my sun
  fill('yellow');
  ellipse(circle.x,circle.y,circle.diameter);
}

function draw(){

//declaring variables for my random colors

//rounding down random color
  let colaRed = floor( random(256) );
  let colaGreen = floor( random(256) );
  let colaBlue = floor( random(256) );
  let randX = ceil( random(windowWidth) );
  let randY = ceil( random(windowHeight) );
//creating trees
          for (var i = 2; i < 1000; i++){
          noStroke();
          fill(colaRed, colaGreen, colaBlue);
          ellipse( randX, randY + i,i % 30, 5);}
//sunrays
          for (var l = 2; l<200; l++){
        //mapping the color of sunrays
            r = map(mouseX, 0, windowWidth, 255, 255);
            g = map(mouseX, 0, windowWidth, 255, 255);
            b = map(mouseX, 0, windowWidth, 153, 0);
            stroke(r,g,b);
            line(0,0,randX * l,randY * l);
        }
}
