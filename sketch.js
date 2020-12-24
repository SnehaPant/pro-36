//Create variables here
var dog,happydog,database, foodStock;
 var foodS = 20
 var lastFed ;
 var food1,food2
function preload()
{
  //load images here
  dog=loadImage('Dog.png')
  happydog=loadImage('happydog.png')
}

function setup() {
  createCanvas(900, 900);
  database=firebase.database()
  dog1=createSprite(750,390,10,10)
  dog1.addImage(dog)
  dog1.scale=0.3
  foodStock=database.ref('food')
foodStock.on("value",readStock)



    var button1 = createButton('feed the dog');
    button1.position(600, 95);
   // button1.mousePressesd(feedDog)
    var button2 = createButton('Add Food');
    button2.position(700, 95);
   // button2.mousePressesd(addFoods)


   for(var i=0;i<10;i++){
  food1.push(new Food(500,50))
    }
}

  function draw() {  
  background(46,139,87)
if(keyWentDown(UP_ARROW)){
         foodS=foodS-1
         writeStock(foodS)
         dog1.addImage(happydog)
}
for(var i=0;i<food1.length;i++){
	food1[i].display()
	  }
  drawSprites();
  //textSize(20)
  //fill("white")
  //text('food Remaining:' + foodS ,100,250)
  //text('NOTE:Press UP_ARROW key to feed Drago Milk!',30,30)
  

  //add styles here
 
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  database.ref('/').update(
    {
      food: x
    }
  )
  
}



