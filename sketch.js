
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  mangoimg = loadImage('mango.png')
  stoneimg = loadImage('stone.png')
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//ground= new Ground(600,680,1300,20)
tree = new Tree(950,450)
//boy= new Boy(250,620)
mango1 = new Mango(850,350,20)
mango2 = new Mango(920,400,20)
mango3 = new Mango(995,325,20)
mango4 = new Mango(1055,370,20)
mango5 = new Mango(935,340,20)
stone = new Stone(188,300,20)
sling = new Slingshot(stone.body,{x:258,y:300});
}


function draw() {
	Engine.run(engine);
  

  background(255);
  
  //ground.display();
  tree.display();
  //boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  stone.display();
   sling.display()
    drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX ,y:mouseY })

}

function mouseReleased(){
  sling.fly()
}


