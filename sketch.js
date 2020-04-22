var jjk, kth;

function setup() {
  createCanvas(800,400);
  jjk = createSprite(400, 200, 50, 49);
  kth = createSprite(400,200,49,25);
  jjk.shapeColor = "purple";
  kth.shapeColor = "purple";

}

function draw() {
  background(0); 
  kth.x = World.mouseX;
  kth.y = World.mouseY;
  
  if(kth.x - jjk.x  < jjk.width/2 + kth.width/2 
   && jjk.x - kth.x  < jjk.width/2 + kth.width/2 
   && kth.y - jjk.y  < jjk.height/2 + kth.height/2 
   && jjk.y - kth.y  < jjk.height/2 + kth.height/2)
  {
    jjk.shapeColor = "red";
    kth.shapeColor = "red";
  }
  else
  {
    jjk.shapeColor = "purple";
    kth.shapeColor = "purple";
  }
  drawSprites();
}