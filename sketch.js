function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
var PLAY = 1; 
var END = 0;
var gameState = PLAY;
