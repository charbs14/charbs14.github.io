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

function resize(){
	resizeCanvas(windowWidth, windowHeight);
	let new_star_amount = int((windowWidth*windowHeight) * (80/(600 ** 2)));
	let curr_length = stars.length;
	if(new_star_amount > curr_length){
		for(let i = new_star_amount; i < curr_length; i++){
			stars.push(new Star());
		}
	}else{
		for(let i = new_star_amount; i < curr_length; i++){
			stars.pop();
		}
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
