var path,pathImage;
  var Runner,RunnerImage;
  var leftboundry,rightboundry;

function preload(){
  //pre-load images
RunnerImage=loadAnimation("Runner-1.png","Runner-2.png")
pathImage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
 path=createSprite(200,200);
 path.addImage(pathImage);
 path.velocityY = 4;
 path.scale=1.3;

 Runner=createSprite(200,200,13,13);
 Runner.addAnimation("running",RunnerImage);
 Runner.scale=0.050;
 
 leftboundry=createSprite(40,200,10,400)
 leftboundry.visible=false;

 rightboundry=createSprite(360,200,10,400)
 rightboundry.visible=false;
}

function draw() {
  background(0);

  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false;

  Runner.x=World.mouseX;

  if (path.y > 400 ) {
    path.y = height/2
  }

  Runner.collide(leftboundry);
  Runner.bounceOff(rightboundry);

  drawSprites();
}