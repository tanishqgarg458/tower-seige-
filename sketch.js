const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, platform1, platform2;
var score=0;
var backgroundImg;

function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
  getBackground()
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1= new Ground(400,390,800,15 );
  platform1= new Ground(300,300, 200,10);

  b1= new Box(240,275,30,40);
  b2= new Box(270,275,30,40);
  b3= new Box(300,275,30,40);
  b4= new Box(330,275,30,40);
  b5= new Box(360,275,30,40);

  b6= new Box(255,235,30,40);
  b7= new Box(285,235,30,40);
  b8= new Box(315,235,30,40);
  b9= new Box(345,235,30,40);

  b10= new Box(270,195,30,40);
  b11= new Box(300,195,30,40);
  b12= new Box(330,195,30,40);

  b13= new Box(300,155,30,40);

  c = new Ball(10,250,20);
  sling1= new Rope(c.body, {x:10,y:250});
  

}

function draw() {
    if(backgroundImg){
        background(backgroundImg);
        text("Score: "+score, 1100, 50);
    }
    else{
        background("blue");
        text("Score: "+score, 1100, 50);
    }
  Engine.update(engine); 
  ground1.display();
  platform1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  c.display();
  sling1.display();
}
  


function mouseDragged(){
    Matter.Body.setPosition(c.body, {x:mouseX,y:mouseY});
    //to set the position of the bird for temporary use

}
function mouseReleased(){
    sling1.fly(); 
    // <<from slingshot.js; calling the function
    // calling the object not class
}

async function getBackground(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;
    console.log(datetime);
    var hour=datetime.slice(11,13);
    console.log(hour);
  
    if(hour<18 && hour>7){
    bg = "bg.png"; 
    }
    else{
        bg = "bg2.jpg"; 
    }
    backgroundImg= loadImage(bg);
  
  
  }