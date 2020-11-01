//Global codes start
//helocopter and package objects 
var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody;
//ground objects
var ground;
//physics engine
const Engine = Matter.Engine;
//physics world
const World = Matter.World;
//physics bodies
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Global codes ends
//Function preload starts
function preload()
{
	//Preloading helicopter and package image
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
//function preload ends
//function setup starts
function setup() {
	//create canvas
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//rectMode
	rectMode(CENTER);
	var boxPosition=width/2-100;
	var boxY=610;
	var boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	var boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	var boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	var boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	var boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

var	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);


   Engine.run(engine);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1,isStatic:true});
	World.add(world, packageBody);
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }



