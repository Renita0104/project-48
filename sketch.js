//const Engine = Matter.Engine
//const Bodies = Matter.Bodies
//const World = Matter.World

var dronec,towerc,buildingc,girlc,apartmentc,backgroundc,housec,libraryc,man1c,man2c,shopc,woman1c,woman2c,x;


function preload(){
  img0 = loadImage("images/apartment.png");
  img1 = loadImage("images/background.jpg");
  img3  = loadImage("images/building.png");
  img4 = loadImage("images/drone.png");   
  img5 = loadImage("images/girl.png");
  img6 = loadImage("images/house.png");
  img7 = loadImage("images/library.png");
  img8 = loadImage("images/man1.png");
  img9 = loadImage("images/man2.png");
  img10 = loadImage("images/shop.png");
  img11 = loadImage("images/tower.png");
  img12 = loadImage("images/woman1.png");
  img13 = loadImage("images/woman2.png");

}


function setup() {
  createCanvas(800,1200);
  
  dronec = createSprite(200,200,20,20);
  dronec.addImage("dog",img4);
  dronec.scale = 0.5;
  dronec.velocityX = -2;
  backgroundc = createSprite(200,200,1200,1200);
    backgroundc.addImage("5dog",img1);
    backgroundc.scale = 2;
    backgroundc.velocityX =  -2;
}


function draw() {
  background("white");
 
  dronec.velocityY = dronec.velocityY+0.8;
  
    
    if(backgroundc.x<0){
      backgroundc.x =backgroundc.width/2
      }
      spawnHouse();
      spawnTower();
      spawnBuilding();
      spawnGirl();
      spawnApartment();
      spawnLibrary();
      spawnMan();
      spawnShop();
      woman5();
      woman6();
  drawSprites();
}
function spawnHouse(){
  if (frameCount%60 === 0){
  housec= createSprite(100,20,50,30);
  housec.addImage("6dog",img6);
  housec.scale = 0.1;
  housec.velocityX = 2;
  }
}
function spawnTower(){
  if (frameCount%70 === 0){
  towerc = createSprite(300,200,10,50);
  towerc.addImage("1dog",img11);
  towerc.scale = 0.1;
  towerc.velocityX = 2;
}
}

function spawnBuilding(){
  if (frameCount%80 === 0){
  buildingc = createSprite(420.360,10,80);
  buildingc.addImage("2dog",img3);
  buildingc.scale = 0.1;
  buildingc.velocityX = 2;
}
}

function spawnGirl(){
  if (frameCount%100 === 0){
  girlc = createSprite(250,250,15,15);
  girlc.addImage("3dog",img5);
  girlc.scale = 0.1;
  girlc.velocityX = 2;
}
}

function spawnApartment(){
  if (frameCount%90 === 0){
  apartmentc = createSprite(260,23,20,30);
  apartmentc.addImage("4dog",img0);
  apartmentc.scale = 0.1;
  apartmentc.velocityX = 2;
}
}




function spawnLibrary(){
  if (frameCount%60 === 0){
  libraryc = createSprite(200,50,10,20);
libraryc.addImage("7dog",img7);
libraryc.scale = 0.1;
libraryc.velocityX = 2;
  }
}

function spawnMan(){
  if (frameCount%80 === 0){
  man1c = createSprite(320,10,20,30);
man1c.addImage("8dog",img8);
man1c.scale = 0.1;
man1c.velocityX = 2;
}
}

function spawnShop(){
  if (frameCount%90 === 0){
  shopc = createSprite(23,025,10,20);
  shopc.addImage("9dog",img10);
  shopc.scale = 0.1;
  shopc.velocityX = 2;
}
}

function woman5(){
  if (frameCount%40 === 0){
  woman1c = createSprite(100,20,50,20);
woman1c.addImage("10dog",img12);
woman1c.scale = 0.1;
woman1c.velocityX = 2;
}
}

function woman6(){
  if (frameCount%60 === 0){
  woman2c = createSprite(45,100,20,10);
  woman2c.addImage("11dog",img13);
  woman2c.scale = 0.1;
  woman2c.velocityX = 2;
}
}

