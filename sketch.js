const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
backgroundImg = loadImage("pro-c34+images/images/GamingBackground.png");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  hero1 = new hero(190,200,90);
  ground1 = new ground(350,270,650,20);
  rope1 = new fly(hero1.body,{x:190,y:90});
  monster1 = new monster(800,200,90);
  block1 = new block(380,240,30,30);
  block2 = new block(380,210,30,30);
  block3 = new block(380,180,30,30);
  block4 = new block(380,150,30,30);
  block5 = new block(380,130,30,30);

  block6 = new block(440,240,30,30);
  block7 = new block(440,210,30,30);
  block8 = new block(440,180,30,30);
  block9 = new block(440,150,30,30);
  block10 = new block(440,130,30,30);
  block11 = new block(440,100,30,30);

  block12 = new block(500,240,30,30);
  block13 = new block(500,210,30,30);
  block14 = new block(500,180,30,30);
  block15 = new block(500,150,30,30);
  block16 = new block(500,130,30,30);

  block18 = new block(560,240,30,30);
  block19 = new block(560,210,30,30);
  block20 = new block(560,180,30,30);
  block21 = new block(560,150,30,30);
  block22 = new block(560,130,30,30);
  block23 = new block(560,100,30,30);

  block24 = new block(620,240,30,30);
  block25 = new block(620,210,30,30);
  block26 = new block(620,180,30,30);
  block27 = new block(620,150,30,30);
  block28 = new block(620,130,30,30);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  hero1.display();
  ground1.display();
  rope1.display();
  monster1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}