class Star{
  constructor(){
    this.xPos = int(random(599));
    this.yPos = int(random(599));
    this.rand = color(int(random(254)), int(random(254)),int(random(254)),255);
  }
  
  update(){
    this.yPos = this.yPos + 4;
    if(this.yPos > windowHeight){
      this.yPos = 0;
      this.xPos = int(random(599));
      this.rand = color(int(random(254)), int(random(254)),int(random(254)), 255);
    }
  }
  display(){
    noStroke();
    fill(this.rand);
    rect(this.xPos,this.yPos,2,2);
  }
}
