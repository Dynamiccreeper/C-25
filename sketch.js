const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World
var box1,box2,box3,box4,box5,pig1,pig2,plank1,plank2,plank3,plank4,bird;
var engine,world,ground;
var bgImg;
function preload(){

bgImg = loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);

engine = Engine.create();
world=engine.world;

box1= new Box (700,320,70,70);

bird= new Bird (200,200);
box2 = new Box (920,320,70,70 );
ground = new Ground (600,380,1200,10);
pig1 = new Pig (810,350 );
plank1 = new Plank (810,260,300,PI/2 );
box3 = new Box (700,240,70,70 );
box4 = new Box (920,240,70,70 );
pig2 = new Pig (810,240 );
plank2 = new Plank(810,180,300,PI/2);
box5 = new Box (810,160,70,70 );
plank3 =  new Plank (760,120,150,PI/7 );
plank4 = new Plank (870,120,130,-PI/7 );
}

function draw() {
background(bgImg);  

Engine.update(engine);

console.log(plank3.body.position.x);
console.log(plank3.body.position.y);
console.log(plank3.body.angle);
//console.log(box1.body.position);
 box1.display();
ground.display();
box2.display();
pig1.display();
plank1.display();
box3.display();
box4.display();
pig2.display();
plank2.display();
bird.display();
box5.display();
plank3.display();
plank4.display();
// drawSprites();
}


