
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(400,200)
  monkey=createSprite (80,315,20,20);
    monkey.addAnimation("moving",monkey_running)
    monkey.scale=0.1
  
    ground=createSprite(400,350,900,10)
   ground.velocityX=-9;
  ground.x=ground.width/2;
  console.log(ground.x)

FoodGroup = createGroup()
  obstacleGroup=createGroup();  
  
  survivalTime=0;
}


function draw() {
   background(290);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
   ground.velocityX=-9;
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY +1.50;
  
  if(ground.x < 0){
    ground.x=ground.x/2
  }
  monkey.collide(ground)
  createbanana();
  
  createobstacle();
  
drawSprites();
  
}

function createbanana(){
  if(frameCount%80===0){
    var banana=createSprite(370,50)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale=0.05
    banana.velocityX=-2
    banana.lifetime=180;
    
    FoodGroup.add(banana);
  }
}

function createobstacle(){
  if(frameCount%300==0){
   var obstacle=createSprite(300,300,10,10)
  
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.25;
    obstacle.velocityX=-4;
    obstacle.lifetime=180;
    
    obstacleGroup.add(obstacle);
  }
}


