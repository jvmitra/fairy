var bg,bgImage,fairy,fairyImage,star,starImage,JoyMusic;

function preload(){
   bgImage = loadImage("images/starnight.png")
   fairyImage = loadAnimation("images/fairy1.png","images/fairy2.png")
   starImage = loadImage("images/star.png")

   JoyMusic = loadSound("JoyMusic.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(400,375)
  bg.addImage(bgImage)

  fairy = createSprite(100,375)
  fairy.addAnimation("fairy",fairyImage)
  fairy.scale = 0.1;

  star = createSprite()
  star.addImage(starImage)
  star.scale = 0.2;
}


function draw(){
  background("bg");
  //JoyMusic.loop();

  drawSprites();
  if(keyDown("LEFT_ARROW")){
    fairy.velocityX = -1;
  }
  if(keyDown("RIGHT_ARROW")){
    fairy.velocity.x = 1;
  }
  if(keyDown("DOWN_ARROW")){
    star.velocity.y = 4;
  }
}
