//declaring objects in variables
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup;
var obstacle,obstacleImage,obstacleGroup;
var ground;
var survivalTime;

function preload(){

//loading the monkey animation
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

//other images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
createCanvas(400,400) 

//monkey sprite and its feateaurs
monkey = createSprite(50,340,25,25);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.12;
//monkey.debug = true;

//ground sprite and its feauters
ground = createSprite(200,380,400,10);
ground.velocityX = -3; 

//mentioning the groups
obstacleGroup = new Group();
bananaGroup = new Group();
}

function draw() {
background("lightblue");

//making the monkey jump
if(keyDown("space")&& monkey.y > 100) {
  monkey.velocityY = -12;
}
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  console.log(monkey.y);
  
  //making the ground move 
if (ground.x < 0){
    ground.x = ground.width/2;
}
  //adding survival time
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate())
  text("survival Time"+survivalTime,100,50);
  
  //mentioning local functions
  food();
  obs();
  
  //for displaying all the sprites
  drawSprites();
}

function food(){
  
  //displaying the bananas
  if (frameCount % 60 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(50,150));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
}
}

function obs(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(300,360,40,10);
   obstacle.addImage("obstacle",obstacleImage)
   obstacle.velocityX = -6;
   //assign scale and lifetime to the obstacle           
   obstacle.scale = 0.13;
   obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}





