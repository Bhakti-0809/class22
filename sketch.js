const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var world, engine; 
var ground;
var ball;

function setup() {
  var canvas =createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_option={
    isStatic : true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_option);
  World.add(world,ground);
  console.log(ground)

  var ball_option={
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);

}

function draw() {
  Engine.update(engine);
  background(0);  

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20,20 )  ;
  
}