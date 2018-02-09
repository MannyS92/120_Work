//Declare Setup Function
function setup (){
//Watched a video on "the coding train" youtube channel and I noticed that Emily Xie made her canvas the size of the window , so I wanted to give it a try. https://www.youtube.com/watch?v=S1TQCi9axzg
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  //Colored the background pink
  background('pink');
  }
//Declare Draw function
function draw(){
    //define text size using textSize() Function
    textSize(100);
    //Using text function have, p5 write Hello World.
text("Hello World!!", 350, 250)
}
