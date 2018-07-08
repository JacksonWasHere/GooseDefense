function fieldView(){
  this.attackers=[]
  this.draw=function(){
    this.drawBackground()
    for (var i = 0; i < this.attackers.length; i++) {
      this.attackers[i].update();
    }
  }
  this.addAttacker=function(){
    this.attackers.push(new hunter(30*16,0));
  }
  this.drawBackground=function() {
    noStroke();
    fill(200);
    rect(0,0,width,height);
  }
}
