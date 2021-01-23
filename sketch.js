
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score ,ground,invisibleground,groundimg,bananaGroup,obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
  
}



function setup() {
  createCanvas(600,300);

  monkey = createSprite(80,230,10,10);
  monkey.scale = 0.12;
  monkey.addAnimation("monkey", monkey_running);
  
  banana = createSprite(600,90,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.12;
  banana.lifetime = 220;
  banana.velocityX = -4;
 
  ground = createSprite(300,280,600,35);
  
  invisibleground = createSprite(300,275,600,20);
  invisibleground.visible = false;
  
  obstacle = createSprite(600,240,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.12;
  obstacle.velocityX = -4;
  obstacle.lifetime = 220;
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("skyblue");
  
 
    
    if(keyDown("space")&&monkey.y>100){
       monkey.velocityY = -13;
       
       }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleground);
 
    if(frameCount%120 === 0){
       banana = createSprite(600,90,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.12;
  banana.lifetime = 220;
  banana.velocityX = -4;
       
       }

  if(frameCount%280 === 0){
     obstacle = createSprite(600,240,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.12;
  obstacle.velocityX = -4;
  obstacle.lifetime = 220;
     }

drawSprites();

}






