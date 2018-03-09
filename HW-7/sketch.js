

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}

let mouseCounter=0


function draw() {



    let ColorR = random(255);
    let ColorG = random(255);

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(ColorR,ColorG,100);
    ellipse(ball.x, ball.y, ball.width, ball.width);

    if (mouseIsPressed) {

      background('pink');
     text('BAM! Pink Refresh ' + mouseCounter ,windowWidth/2, windowHeight/2);

     }

     if (mouseCounter >=3 ) {
       text('Each time you press me and make me start over...I cry a little inside', 80, 200);
     }

     if (mouseCounter >=6 ) {
       text('you must really hate me dont you..', 90, 210);
     }

     if (mouseCounter >=8 ) {
       text('Listen to me carefully..whatever you do you must not click me 15 times', 100, 220);
     }

     if (mouseCounter >=10 ) {
       text('You must think Im joking', 110, 230);
     }

     if (mouseCounter >=12 ) {
       text('REALLY!!!! AGAIN!!!!?!!!?', 120, 240);
     }

     if (mouseCounter >=14 ) {
       text('OKAY!! Fine , You reached Level 14 !!! You Won..just stop now :)', 0, 10);
     }

     if (mouseCounter >=15 ) {


       background('red')
       text('Well.I warned you. GAME OVER :)', 120, 240);
     }

}

function mousePressed() {

  mouseCounter++;
      return false;




    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);





}
