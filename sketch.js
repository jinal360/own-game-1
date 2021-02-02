var man,ground,obstacle,obstaclesGroup,groundImg,obstacleImg,manImg;
var invisibleGround;
var gameState = "rules"



function preload(){
  groundImg = loadImage("sprites/ground3.webp");
  obstacleImg = loadImage("sprites/obstacle.png");
  manImg = loadImage("sprites/man2.png");

}


function setup() {
  createCanvas(displayWidth - 30, displayHeight - 30);

  ground = createSprite(displayWidth/2 + 85, displayHeight/2 + 0);
  ground.addImage("ground", groundImg)
  ground.scale = 2.8;

  invisibleGround = createSprite(displayWidth/2 - 30,displayHeight - 30,width,100);
  invisibleGround.shapeColor = " black";
// invisibleGround.debug = true

  man = createSprite(55,displayHeight - 160,10,10);
  man.addImage("man", manImg);
  man.scale = 0.3;
  man.setCollider("rectangle",0,0,360,470);
  man.debug = true

  form = new Form();
  obstaclesGroup = new Group();
}


function draw() {
  background("black"); 

  textSize(18);
  fill(255);

  if(gameState === "rules"){
    background("white")
    form.display();
    ground.visible = false;
   /* obstacle.visible = false;
    man.visible = false;
    invisibleGround.visible = false;*/
  }
  if(gameState === "play"){
    
    /*obstacle.visible = true;
    man.visible = true;
    invisibleGround.visible = false;*/
    ground.visible = true;
    ground.velocityX = -3;

    
    if (ground.x < 500){
      ground.x = ground.width/2;
    }

    if(keyDown("space")){
    man.velocityY = -5;
    }

    man.velocityY = man.velocityY + 0.5;
    //man.collide(ground);
    man.collide(invisibleGround);

    if(obstaclesGroup.isTouching(man)){
      //man.x = 200;
       console.log("obstacle touched")
     }
    
    createObstacle();

    //if frame count % 200 === 0 { create new ques; gamestate = "ques"
    if(frameCount % 200 === 0){
      gameState = "ques";
      question = new Ques()
    }
   }

  if(gameState === "ques"){
    ground.velocityX = 0;
    question.display();
  }
//if(gamestate = "ques") {bg should stop; }

man.collide(invisibleGround);
  drawSprites();

 // createQuestion();
}

function createObstacle(){

  if(frameCount % 200 === 0){
  obstacle = createSprite(950,displayHeight - 90,30,50);
  obstacle.addImage("obstacle", obstacleImg);
  obstacle.velocityX = -3;
  obstacle.scale = 0.5;
  obstaclesGroup.add(obstacle);
  obstacle.debug = true;

  }
}