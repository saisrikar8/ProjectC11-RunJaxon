var path, boy, pathimg, boyimg,edges;
var height = 400;

function preload(){
  //pre-load images
  boyimg = loadAnimation("Runner-1.png", "Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,height);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite((1007/3), 300);
  boy.addAnimation("running",boyimg);
  boy.scale = 0.1;

  edges = createEdgeSprites();
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  if (keyDown("left")){
    boy.x = boy.x - 10;
  }
  if (keyDown("right")){
    boy.x = boy.x + 10;
  }

  boy.bounceOff(edges);

  drawSprites();
}
