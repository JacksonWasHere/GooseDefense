function hunter(x,y){
  this.x=x;
  this.y=y;
  this.draw=function(){
    fill(200,50,40);
    rect(this.x,this.y,10,25);
  }
  this.update=function() {
    this.x+=1;
    this.draw();
  }
}
