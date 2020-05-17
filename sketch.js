
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(600,570,200,20);
	dustbin2 = new Dustbin(500,530,20,100);
	dustbin3 = new Dustbin(700,530,20,100);

	paper = new Paper();

	ground = new Ground();
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	   Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});

	 }
   }


