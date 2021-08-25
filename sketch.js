var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;
var bath;
var bground;
var edges;
function preload() {
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/drink2.png");
move = loadAnimation("images/move.png","images/move1.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup() {
  createCanvas(400, 400);
  bground = createSprite(200,200,400,400);
  bground.addImage(bg);
  bground.scale = 0.1;
  astronaut = createSprite(200,130);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.05;
  edges = createEdgeSprites();
   astronaut.addAnimation("brushing",brush);
   astronaut.addAnimation("moving",move);
   astronaut.addAnimation("exercising",gym);
   astronaut.addAnimation("eating",eat);
   astronaut.addAnimation("drinking",drink);
   astronaut.addAnimation("bathing",bath);
}

function draw() {
  background(150);
  astronaut.bounceOff(edges);
  if(keyDown("UP_ARROW")) {
    astronaut.changeAnimation("brushing",brush);
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")) {
    astronaut.changeAnimation("exercising",gym);
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")) {
    astronaut.changeAnimation("eating",eat);
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")) {
    astronaut.changeAnimation("bathing",bath);
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("SPACE")) {
    astronaut.changeAnimation("drinking",drink);
    astronaut.y = 150;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")) {
    astronaut.changeAnimation("moving",move);
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  drawSprites();
}