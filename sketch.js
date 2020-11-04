const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var wreckingBall, rope, engine, world, ground, box1, box2, box3, box4, box5

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height,500,20);
    wreckingBall = new Ball(100,100,50);
    rope = new Rope(wreckingBall.body,{x:100,y:100});
    box1 = new Box(230,480,100,100);
    box2 = new Box(230,380,100,100)
    box3 = new Box(230,280,100,100)
    box4 = new Box(230,180,100,100)
    box5 = new Box(230,80,100,100)
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    wreckingBall.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(wreckingBall.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    rope.fly();
}