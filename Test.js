function setup() {
 let cnv = createCanvas(400, 400);
    cnv.parent('sketch-holder');
  
}

function draw() {
  background(0, 255, 255, 20);
  
	push();
    translate(200,200);
    rotate( radians(frameCount) );
    fill(255, 50, 0);
    noStroke();
    textSize(35);
    text("CSMA 101", 0,0);
    pop();
  
}