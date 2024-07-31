class Star{
  constructor(){
    this.xPos = int(random(windowWidth));
    this.yPos = int(random(windowHeight));
    this.rand = color(int(random(254)), int(random(254)),int(random(254)),255);
  }
  
  update(){
    this.yPos = this.yPos + 4;
    if(this.yPos > windowHeight){
      this.yPos = 0;
      this.xPos = int(random(windowWidth));
      this.rand = color(int(random(254)), int(random(254)),int(random(254)), 255);
    }
  }
  display(){
    noStroke();
    fill(this.rand);
    rect(this.xPos,this.yPos,2,2);
  }
}
