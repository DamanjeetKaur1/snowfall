function preload() {
backgroundImage = loadImage("snow2.jpg");
snowmanI = loadImage("snowman.jpg");
}

function setup() {
  createCanvas(1800, 800);
 snowman = createSprite(400, 700, 50, 50);
 snowman.addImage(snowmanI);

 invisibleGround = createSprite(100,800,4000,10);
  invisibleGround.visible = false;
}

function draw() {
  background(backgroundImage);
  if(keyCode = 32) {
    snowman.y = snowman.y-2;
    
  }  
  snowman.velocityY = snowman.velocityY+0.5;
  snowman.collide(invisibleGround);
  drawSprites();
}