
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 300);
  
  monkey=createSprite(50,250,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  banana=createSprite(300,150,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  
  obstace=createSprite(300,250,20,20);
  obstace.addImage(obstaceImage);
  obstace.scale=0.1;
  obstace .velocityX=-4;

  ground=createSprite(300,280,600,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
}


function draw() {
   background(180);
  
   if(ground.x<0){
     ground.x=ground.width/2;
     
   }
  
      if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  drawSprites();
}

function spawnobstace() {

  if (frameCount % 20 === 0) {
   obstace=createSprite(300,250,20,20);
      obstace.addImage(obstaceImage);
      obstace.scale = 0.1;
      obstace.velocityX = -4;
  }
}

