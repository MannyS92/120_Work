var capture;

function setup() {
  createCanvas(600, 400);
  frameRate(2);

}


function draw(){
  background(0);



//bottom sprockets of film strip
  for(let x = 0; x <= width; x += 50) {
    rect(x,250,25,25);
    //top sprockets
    for(let x = 0; x <= width; x += 50) {
      rect(x,50,25,25);
      // film squares
      for(let x = 0; x <= width; x += 160) {
        fill( 255, 140, random(255) );
        rect(x,100,150,100);
  }
    }
  }




}
