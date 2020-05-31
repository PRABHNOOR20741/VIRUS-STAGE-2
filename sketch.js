var gameState = 0;
var backGround,Button;
var Pointer;
var Mask,Immubar,Sanitizer;
var Virus1,Virus2,Virus3;
var abc = 0;
var virus1health = 50;
var virus2health = 25;
var virus3health = 25;


function preload()
{
 backGround = loadImage("sprites/WORLD MAP 2.jpg"); 
 Pointer_img = loadImage("sprites/POINTER5.png");
 Mask_img = loadImage("sprites/MASK 5.png");
 Immubar_img = loadImage("sprites/IMMUNITY BAR 1.png");
 Sanitizer_img = loadImage("sprites/SANITIZER 3.png");
 Virus1_img = loadImage("sprites/VIRUS PIC 7.png");
 Virus2_img = loadImage("sprites/VIRUS PIC 2.jpg");
 Virus3_img = loadImage("sprites/VIRUS PIC 2.jpg");

}


function setup()
 {
  createCanvas(displayWidth,displayHeight-115);
  Pointer = createSprite(470,450,20,20);
  Pointer.addImage(Pointer_img);
  Pointer.scale = 0.2;
}


function draw() 
{
  background(255,255,255);  

  if(gameState === 0)
  {
    background(backGround);
    StartGame();
  }

  if(gameState === 1)
  {
    StartingGame();
    abc = 1;
  }
  
  drawSprites();
}


function Createbutton()
{
  Button = createButton('START');
}

function StartGame()
{
  if(mousePressedOver(Pointer))
  {
    gameState = 1; 
    //console.log("gameState");
    Pointer.visible = false;
    
  }
    
}

function StartingGame()
{
  background("YELLOW");
  text("Virus's Health  :  " + virus1health,displayWidth/2+300,200);
  text("Virus's Health  :  " + virus2health,displayWidth/2+350,50);
  text("Virus's Health  :  " + virus3health,displayWidth/2+350,475);
  if (abc === 0)
  {
   
    Mask = createSprite(displayWidth/2-350,displayHeight/2-50);
    Mask.addImage(Mask_img);
    Mask.scale = 0.5;
    Immubar = createSprite(displayWidth/2-500,displayHeight/2+150);
    Immubar.addImage(Immubar_img);
    Immubar.scale = 0.5;
    Sanitizer = createSprite(displayWidth/2-500,displayHeight/2-250);
    Sanitizer.addImage(Sanitizer_img);
    Sanitizer.scale = 0.3;
    Virus1 = createSprite(displayWidth/2+350,displayHeight/2-50,150,150);
    Virus1.addImage(Virus1_img);
    Virus1.scale = 1.5;
    Virus2 = createSprite(displayWidth/2+500,displayHeight/2-250);
    Virus2.addImage(Virus2_img);
    Virus2.scale = 0.2;
    Virus3 = createSprite(displayWidth/2+500,displayHeight/2+150);
    Virus3.addImage(Virus3_img);
    Virus3.scale = 0.2;
  }

  if(mousePressedOver(Mask))
  {
     Mask.velocityX = 10;
   }
    
  if(Mask.collide(Virus1))
  {
    virus1health = virus1health - 10;
    Mask.x = displayWidth/2-350;
  }

    
  if(Mask.collide(Virus2))
  {
    virus1health = virus1health - 10;
    Mask.x = displayWidth/2-350;
  }

    
  if(Mask.collide(Virus3))
  {
    virus1health = virus1health - 10;
    Mask.x = displayWidth/2-350;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     Sanitizer.velocityY = 2;
   }

   if(keyDown(RIGHT_ARROW))
  {
     Sanitizer.velocityX = 2;
   }

   if(keyDown(UP_ARROW))
   {
      Sanitizer.velocityY = -2;
    }
    
  if(Sanitizer.collide(Virus1))
  {
    virus1health = virus1health - 10;
    Sanitizer.x = displayWidth/2-500;
    Sanitizer.y = displayHeight/2-250;
  }

  if(Sanitizer.collide(Virus2))
  {
    virus2health = virus2health - 10;
    Sanitizer.x = displayWidth/2-350;
  }

    
  if(Sanitizer.collide(Virus3))
  {
    virus3health = virus3health - 10;
    Sanitizer.x = displayWidth/2-350;
  }

  if(keyDown("S"))
  {
     Immubar.velocityY = 2;
   }

   if(keyDown("D"))
  {
     Immubar.velocityX = 2;
   }

   if(keyDown("W"))
   {
      Immubar.velocityY = -2;
    }
    
  if(Immubar.collide(Virus1))
  {
    virus1health = virus1health - 10;
    Immubar.x = displayWidth/2-500;
    Immubar.y = displayHeight/2+150;
  }

  if(Immubar.collide(Virus2))
  {
    virus2health = virus2health - 10;
    Immubar.x = displayWidth/2-350;
  }

    
  if(Immubar.collide(Virus3))
  {
    virus3health = virus3health - 10;
    Immubar.x = displayWidth/2-350;
  }
}


