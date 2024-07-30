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
  background(0);
  for(let star of stars){
    star.update();
    star.display();
  }
}