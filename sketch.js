var PLAY = 1;
var END = 0;
var background_img;
var gameState=PLAY;
//var ground;
var cloud;
var boy, boy_running , boy_collided , boy_jumping , boy_sliding
var bg;
var rock1 , rock2
var bird;
var birdsGrp;
var obsGrp;




function preload(){
  background_img = loadImage("assets/backgroundd.gif")
  //groundImg = loadImage("ground.png")
  boy_running = loadAnimation("assets/running 1 .png","assets/running 2 .png","assets/running 3 .png","assets/running 4 .png","assets/running 5 .png","assets/running 6 .png")
  boy_collided = loadAnimation("assets/boycollided.png",)
 // boy_jumping = loadAnimation("jump.1.png","jump.2.png","jump.3.png")
  rock1 = loadImage("assets/rockobs.png")
  rock2 = loadImage("assets/rockobs2.png")
  birdImg = loadAnimation("assets/bd1.png","assets/bd2.png","assets/bd3.png","assets/bd4.png","assets/bd5.png","assets/bd6.png","assets/bd7.png","assets/bd8.png","assets/bd9.png","assets/bd10.png","assets/bd11.png","assets/bd12.png","assets/bd13.png","assets/bd14.png","assets/bd16.png","assets/bd17.png",)
  boy_sliding = loadAnimation("assets/slide.png")
}




function setup() {
  createCanvas(700,700);
  edges=createEdgeSprites()
 // ground = createSprite(200,700,700,20)
 // ground.addImage(groundImg)
 // ground.scale = 0.1
 // ground.velocityX=-1

  bg = createSprite(350,350,700,700)
  bg.addImage(background_img)
  bg.scale = 2
  bg.velocityX=-3

  boy = createSprite(50,600,20,20)
  boy.addAnimation("running",boy_running)

  birdsGrp=new Group()

  obsGrp=new Group()

  


}



function draw() {
  background("black"); 
  

 // if(keyDown("DOWN_ARROW")){
 //   boy.addAnimation("sliding",boy_sliding) 
 //   console.log("inside")
 // }

 boy.collide(edges[3])
  

  if(gameState===PLAY){
    if(bg.x<0){
      bg.x = bg.width/2
    } 

    if(keyDown("space")){
      boy.velocityY=-13
    }

    boy.velocityY=boy.velocityY+0.8

    spawnobstacles()
    spawnBirds()
if(obsGrp.isTouching(boy)){
  console.log("collided")
  gameState=END

}

  }
else if(gameState===END){
  console.log("end")
  //boy.changeAnimation("collided",boy_collided)
bg.velocityX=0
obsGrp.setVelocityXEach(0)
birdsGrp.setVelocityXEach(0)

}
  drawSprites();
  
}

function spawnobstacles(){
  if(frameCount%120===0){
  var obstacles = createSprite(660,650,20,20)
  obstacles.shapeColor="red"
  obstacles.velocityX=-3
  obstacles.scale=0.3

  var rand = Math.round(random(1,2))
  switch(rand){
    case 1 :obstacles.addImage(rock1);
            break;
    case 2 :obstacles.addImage(rock2);
            break;
    default:break;                
    
  }
  }

}

function spawnBirds(){
  if(frameCount%90===0){
    bird = createSprite(650,300,20,20)
  bird.addAnimation("birdflying",birdImg)
  bird.velocityX =-3

  var randH = Math.round(random(200,500))
 bird.y=randH

 birdsGrp.add(bird)


  }
}

