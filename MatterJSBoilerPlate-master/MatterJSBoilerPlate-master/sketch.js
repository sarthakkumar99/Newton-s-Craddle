
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject
var rope1, rope2,rope3,rope4,rope5
var world


function setup() {
	createCanvas(1600,700);
	rectMode(CENTER)



	engine = Engine.create();
	world = engine.world;
roofObject=new roof(width/2,height/4,width/7,20)
bobdiameter=40
	//Create the Bodies Here.
	startbobpositionX=width/2
	startbobpositionY=height/4+500
	bobObject1=new bob(startbobpositionX-bobdiameter*2,startbobpositionY,bobdiameter)
	bobObject2=new bob(startbobpositionX-bobdiameter,startbobpositionY,bobdiameter)
	bobObject3=new bob(startbobpositionX,startbobpositionY,bobdiameter)
	bobObject4=new bob(startbobpositionX+bobdiameter,startbobpositionY,bobdiameter)
	bobObject5=new bob(startbobpositionX+bobdiameter*2,startbobpositionY,bobdiameter)

var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
})
rope1= new rope(bobObject1.body,roofObject.body,-bobdiameter*2,0)
rope2= new rope(bobObject2.body,roofObject.body,-bobdiameter*1,0)
rope3= new rope(bobObject3.body,roofObject.body,0,0)
rope4= new rope(bobObject4.body,roofObject.body,bobdiameter*1,0)
rope5= new rope(bobObject5.body,roofObject.body,bobdiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



