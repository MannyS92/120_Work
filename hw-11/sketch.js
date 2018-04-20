//array for salmon candy
let candies = [];

function setup() {
    createCanvas(windowWidth, 400);
    // How many candy I want
      for (let i = 0; i < 10; i++){

        let x = 250 + 100 * i;

//the candy
        candies[i]= new candy(x,200,20);
//having trouble adding another row.Below are my ideas that arnt working
        //let d = new candy(x,100,20);
        //candies[i]= new candy(x,100,20);
        //candy(x,100,20);
  }
}


//jittering of the candy
function draw() {
    background(100,10,100);
    for (let i = 0; i < candies.length; i++){
        candies[i].move();
        candies[i].show();
    }
}


class candy {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
      //how much I want them to jitter
        this.x = this.x + random(-.5, .5);
        this.y = this.y + random(-.5, .5);
    }

    show() {
      //how I want the candy to appear.
        stroke(255);
        strokeWeight(10);
        fill('pink');
        ellipse(this.x, mouseY, mouseX / 2);
    }
}
