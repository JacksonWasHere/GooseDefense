var game
function setup(){
  game = new fieldView();
  createCanvas(60*16,60*9)
}
function draw(){
  background(0)
  game.draw()
}
