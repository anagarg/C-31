const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinko1=[];
var plinko2=[];
var plinko3=[];
var plinko4=[];
var plinko5=[];
var plinko6=[];
var plinko7=[];
var plinko8=[];
var plinko9=[];
var plinko10=[];
var plinko11=[];
var plinko12=[];
var plinko13=[];
var plinko14=[];
var plinko15=[];
var plinko16=[];
var plinko17=[];
var plinko18=[];
var plinko19=[];
var division1=[];
var division2=[];
var division3=[];
var division4=[];
var division5=[];
var division6=[];
var ground=[];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,760,480,20);
  division1 = new Division(0,660,10,220);
  division2 = new Division(80,660,10,220);
  division3 = new Division(160,660,10,220);
  division4 = new Division(240,660,10,220);
  division5 = new Division(320,660,10,220);
  division6 = new Division(400,660,10,220);
  division7 = new Division(480,660,10,220);
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  plinko1 = new Plinko(40,50, 10);
  plinko2 = new Plinko(90,50, 10);
  plinko3 = new Plinko(140,50, 10);
  plinko4 = new Plinko(190,50, 10);
  plinko5 = new Plinko(240,50, 10);
  plinko6 = new Plinko(290,50, 10);
  plinko7 = new Plinko(340,50, 10);
  plinko8 = new Plinko(390,50, 10);
  plinko9 = new Plinko(440,50, 10);
  plinko10 = new Plinko(15,150, 10);
  plinko11 = new Plinko(65,150, 10);
  plinko12 = new Plinko(115,150, 10);
  plinko13 = new Plinko(165,150, 10);
  plinko14 = new Plinko(215,150, 10);
  plinko15 = new Plinko(265,150, 10);
  plinko16 = new Plinko(315,150, 10);
  plinko17 = new Plinko(365,150, 10);
  plinko18 = new Plinko(415,150, 10);
  plinko19 = new Plinko(465,150, 10);

}

function draw() {
  background(0,0,0); 
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
}