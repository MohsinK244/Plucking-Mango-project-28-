
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, slingShotObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mongo14, mango15;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1160,150,30);
	mango3=new mango(990,180,30);
	mango4=new mango(1000,130,30);
	mango5=new mango(1220,220,40);
	mango6=new mango(1100,220,35);
	mango7=new mango(1750,230,20);
	mango8=new mango(900,185,15);
	mango9=new mango(1120,190,29);
	mango10=new mango(1090,155,30);
	mango11=new mango(1120,80,25);
	mango12=new mango(1030,220,30);
	mango13=new mango(1050,80,45);
	mango14=new mango(1220,260,27);
	mango15=new mango(930,210,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new Stone(80,300,30);

	slingShotObject = new SlingShot(stoneObj.body ,{x:238, y:414});


	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  detectollision(stoneObj,mango13);
  detectollision(stoneObj,mango14);
  detectollision(stoneObj,mango15);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  stoneObj.display();
  groundObject.display();
  slingShotObject.display();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		slingShotObject.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position

		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  		if(distance<=lmango.r+lstone.r)
		  {
			  Matter.Body.setStatic(lmango.body,false);
		  }

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
 }

 function mouseReleased(){
	 slingShotObject.fly()
 } 