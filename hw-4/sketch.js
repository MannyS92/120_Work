


function setup() {
//Creating Canvas
    createCanvas( 600, 900 );
//Chose a pink color with color picker to emphasize femininity.
    background( 'rgb(252, 192, 250)' );
}

function draw() {

push();
//Main Sandbox for the grid translate

translate( 300, 350 );

//Sand Box for Radio Dish

push();
//pole part of dish
 fill(80);
 rect(18,-85,10,40)
 noStroke();

 pop();
//Dish Part
 push();

stroke(75);
fill(75);
 strokeWeight(20);
 ellipse(24,-80,15,1);

 pop();

 push();

 strokeWeight(15);
 point(24,-80);

pop();


//Legs behind head
push();

rotate( radians(15) );

//upper(back arm)
fill(90);
noStroke();
rect(-45,-4,10,200);

push();

rotate( radians(-25) )
fill(90);
noStroke();
rect(5,-25,10,200);
pop();

pop();



push();
//Sandbox for robot head

fill(150);
noStroke();
ellipse(0,0,115,115);

pop();
//*******
push();

//eye and color
noStroke();
fill( 'rgb(96, 50, 50)' );
arc( -35, -15, 25, 25, 0, PI, CHORD);

strokeWeight(8);
stroke('red');
point(-30,-10);

pop();

//Front Legs
push();

rotate( radians(-8) );

//upper(front left arm)
fill(90);
noStroke();
rect(-10,-4,10,200);

//front right leg
fill(90);
noStroke();
rect(30,3,10,200);

pop();

//Some text to write her name.
textFont("Georgia")
textSize(50);
text("HAL-ey 9000", -130,-200);

//End of Entire Sandbox
pop();








}
