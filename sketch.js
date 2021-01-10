//Create variables here
var dogImg,happydogImg,database,foodS,foodStock;
 var dog;
var database;




function preload()
{
	//load images here
  dogImg = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");

}

function setup() {
  createCanvas(800, 700);
  
  //database = firebase.database();
  
  dog = createSprite(475,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogImg)
}


dog.display();
  drawSprites();
  fill(238, 241, 18);
  noStroke();
  textSize(30);
  text("Food Remaining: " + foodS,50,265);

  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


