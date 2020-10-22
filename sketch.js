var bullet1, bullet2, bullet3;
var wall1, wall2, wall3;
var seprator1, seprator2, seprator3;
var thickness, speed, weight;

function setup()
 {
  createCanvas(1600,600);

  speed=random(223, 321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet1=createSprite(50,100,80,50);
  bullet1.velocityX= speed;
  bullet1.shapeColor="white";

  wall1= createSprite(1200,20, thickness, height/2);
  wall1.shapeColor="brown";

  seprator1=createSprite(0,170,2600,15);
  seprator1.shapeColor="black";

  bullet2= createSprite(50, 250, 80,50);
  bullet2.velocityX= speed;
  bullet2.shapeColor=" white";

  wall2= createSprite(1200,200,thickness, height/2);
  wall2.shapeColor="brown";

  seprator2= createSprite(0, 350, 2600,15);
  seprator2.shapeColor="black";
  
  bullet3= createSprite(50, 500, 80,50);
  bullet3.velocityX= speed;
  bullet3.shapeColor=" white";

  wall3= createSprite(1200,480,thickness, height/2);
  wall3.shapeColor="brown";

  seprator3= createSprite(0, 570, 2600,15);
  seprator3.shapeColor="black";
  
  
}

function draw() 
{
  background("yellow");  

  if(bullet1.isTouching(wall1))
  {
    bullet1.velocityX=0;

    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness )
    if(damage>10)
    {
      wall1.shapeColor=("red");
    }

    if(damage<10)
  {
    wall1.shapeColor=("green");
  
  }
  
}

if(bullet2.isTouching(wall2))
  {
    bullet2.velocityX=0;

    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness )
    if(damage>10)
    {
      wall2.shapeColor=("red");
    }

    if(damage<10)
  {
    wall2.shapeColor=("green");
  
  }
  
}

if(bullet3.isTouching(wall3))
  {
    bullet3.velocityX=0;

    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness )
    if(damage>10)
    {
      wall3.shapeColor=("red");
    }

    if(damage<10)
  {
    wall3.shapeColor=("green");
  
  }
  
}
  drawSprites();
  
}

