let stars = [];
var canvas; 
function setup() {
  pixelDensity(1);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  frameRate(60);
  noStroke();
  let stars_amount = int((windowWidth*windowHeight) * (80/(600 ** 2)))
  for (let i = 0; i < stars_amount; i++){
      stars.push(new Star());
  }
}

function draw() {
  translate(-width/2, -height/2);
  background(0);
  for(let star of stars){
    star.update();
    star.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when window size changes
  stars_amount = int((windowWidth * windowHeight) * (80 / (600 ** 2)));
  stars = []; // Clear existing stars
  for (let i = 0; i < stars_amount; i++) {
    stars.push(new Star()); // Recreate stars
  }
}

