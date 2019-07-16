let x = 300;
let y = 300;
let xspeed = 10;
let yspeed = 8; 

let r = 25;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255, 223, 0);
    ellipse(x, y, r * 2, r * 2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
        xspeed = -xspeed;
    }
    if(y > height - r || y < r) {
        yspeed = -yspeed;
    }
}