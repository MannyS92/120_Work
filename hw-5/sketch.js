

function setup() {
//creating canvas using width
    createCanvas( windowWidth, 800 );
    background(19, 24, 98);

}

//defining variable
let posX = 0;
let posY = 0;
let angle = 0;


function draw() {

  //Controlling the frame rate in relation to where on the x axis the comet is.
    let target_fr = mouseX * 0.1 + 0.25;
    frameRate( target_fr/2 );
  //drawing night sky on repeat
    background(37,28,93);
  //comet
    push();
        noCursor();
        fill(100);
        rotate( radians(angle) );
        ellipse(mouseX,mouseY,60,50);
      //crater on comet
        fill(75);
        ellipse(mouseX +5,mouseY +5, 15, 19);
      //updating the spin of it
        angle= angle + 1;
    pop();



//with some help from https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b, I learned how to make random stars appear
  var x = random(windowWidth);
  var y = random(windowHeight);

  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, 9, 9);

//main sandbox
push();
  //moving my x and y axis to the center
    translate(windowWidth/2, 400);
        //Orion constelation
        fill(255);
        //star saiph
        ellipse(30,350 + posY,10,10);
        //star rigel
        ellipse(200,320 + posY,20,20);
        //star mintaka
        ellipse(120,100 + posY,15,15);
        //star alllimnam
        ellipse(80,113 + posY,18,18);
        //star allnitak
        ellipse(40,125 + posY,8,8);
        //star bellatrix
        ellipse(160,-90 + posY,15,15);
        //star meissa
        ellipse(90,-200 + posY,5,5);
        //star beta
        ellipse(-20,-110 + posY,18,18);
  
        //moon
        fill(255,238,178);
        ellipse(-400,400 + posY,300,300);

//controls the the slow movementupward of the constelation
        posX = posX + 1;
        posY = posY - 1;

    pop();

}
