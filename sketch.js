const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var loadingimage;

var birdstate = "onSling";
var bg;
var score = 0;
var levelstate = "loading";

function preload() {
  //getBackgroundImg();
  bg = loadImage("sprites/bg1.png");
  loadingimage = loadImage("sprites/loading.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Level1();
  //Level2();
}

function draw() {
  //if(backgroundImg) {
    background(bg);
  //}
//frameRate(0.5);
  if (levelstate === "loading") {
    background(loadingimage);
    if (frameCount % 100 === 0) {
      levelstate = "level1";
    }
  } else if (levelstate !== "loading") {
    if(backgroundImg) {
      background(backgroundImg);
    }
  }

  if (levelstate === "level1") {
    level1();
  } else if (levelstate === "level2") {
    level2();
  }

  if (birdstate === "launched") {
    slingshot.attach(red2.body);
    red1.trajectory = [];
    Matter.Body.setPosition(red2.body, {x: 200 , y: 50});
    birdstate = "onSling";
  }

  noStroke();
  textSize(35)
  fill("white")
  text("Score : " + score, width-300, 50)

  Engine.update(engine);
}

function mouseDragged(){
  if (birdstate === "onSling" && red1.body.position.x > 30 && red1.body.position.x < 250) {
    Matter.Body.setPosition(red1.body, {x: mouseX , y: mouseY});
  } else if (birdstate === "onSling" && red2.body.position.x > 30 && red2.body.position.x < 250) {
    Matter.Body.setPosition(red2.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  slingshot.fly();
  //birdstate = "launched";
  //slingshot.fly();
}
//200, 250
function keyPressed() {
  if(keyCode === 32 && birdstate === "launched" && (red1.body.position.x > 250)) {
    slingshot.attach(red2.body);
    red1.trajectory = [];
    Matter.Body.setPosition(red2.body, {x: 200 , y: 250});
    birdstate = "onSling";
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
    
  if(hour>=0600 && hour<=1900){
    bg = "sprites/bg2.jpg";
  }
  else{
    bg = "sprites/bg1.png";
  }
  backgroundImg = loadImage(bg);
}