const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions=[];
var particles=[];
var plinkos=[];
function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  for(var p=0;p<=800;p++){
    particles.push(new Particle());
  }
  for(var k=0;k<=800;k+=100){
    divisions.push(new Division(k,400,30,200))
  }
  for(var i=10;i<=800;i+=70){
    plinkos.push(new P(i,50));
  }
  for(var m=20;m<=800;m+=70){
    plinkos.push(new P(m,120));
  }
  for(var n=10;n<=800;n+=70){
    plinkos.push(new P(n,190));
  }
  for(var o=20;o<=800;o+=70){
    plinkos.push(new P(o,280));
  }

  ground=new Ground(400,490,800,20);
}

function draw() {
  background(255,255,0);
  Engine.update(engine);
  ground.display();
  for(var len=0;len<divisions.length;len++){
    divisions[len].display();
  }
  for(var len2=0;len2<plinkos.length;len2++){
    plinkos[len2].display();
  }
  for(var len3=0;len3<particles.length;len3++){
    particles[len3].addcolor();
    particles[len3].display();
  }
}