let stars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noStroke();
  let stars_amount = int((windowWidth*windowHeight) * (80/(600 ** 2)))
  for (let i = 0; i < stars_amount; i++){
      stars.push(new Star());
  }
}

function draw() {
  resize();
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

