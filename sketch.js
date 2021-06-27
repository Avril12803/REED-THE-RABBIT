var garden,rabbit,APPLE;
var gardenImg,rabbitImg,APPLEImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  APPLEImg  = loadImage("APPLE.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites = Math.round(random(1,2))
  if (frameCount % 80 === 0) {
    if (select_sprites === 1){
        createAPPLE() 
    }  else if (select_sprites === 2){
      createAPPLE() 

    }
  } 
  drawSprites();
  }

function createAPPLE() {
  APPLE = createSprite(random(50,350),40,10,10)
  APPLE.addImage(APPLE.png)
  APPLE.scale= 0.1
  APPLE.velocityY=5
  APPLE.lifetime=150
 }

