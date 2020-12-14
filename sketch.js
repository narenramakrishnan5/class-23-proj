
const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies;
var engine,world
var obj
var ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var obj_options ={ isStatic: true }
  obj=Bodies.rectangle(200,390,200,20,obj_options)
World.add(world,obj)
console.log(obj.type)
var ball_options={restitution:1.0}
ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(obj.position.x,obj.position.y,400,20)
    
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
} 