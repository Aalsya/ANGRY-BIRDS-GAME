
function Level1() {
  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 505, 300, 170);

  box1 = new Box(700, 555, 70, 70);
  box2 = new Box(920, 555, 70, 70);
  pig1 = new Pig(810, 560);
  log1 = new Log(810, 510, 300, PI/2);
  
  box3 = new Box(700, 465, 70, 70);
  box4 = new Box(920, 465, 70, 70);
  pig3 = new Pig(810, 470);
  
  log3 = new Log(810, 420, 300, PI/2);
    
  box5 = new Box(810, 370, 70, 70);
  log4 = new Log(770, 340, 150, PI/5);
  log5 = new Log(870, 340, 150, -PI/5);

  red1 = new Red(210, 250);
  red2 = new Red(150, 450);

  slingshot = new SlingShot(red1.body, {x:200, y:250});
}

function level1() {
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  pig1.display();
  pig1.score();
  log1.display();
  
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  pig3.display();
  pig3.score();
  log3.display();
  
  box5.display();
  box5.score();
  log4.display();
  log5.display();
 
  red1.display();
  red2.display();
  platform.display();
  slingshot.display();
  ground.display();
}

function Level2() {
  platform2 = new Ground(150, 505, 300, 170);
  ground2 = new Ground(800, height-50, 600, 100);
}
function level2() {
  //red1 = red2_1 2= level, 1 = number
  platform2.display();
  ground2.display();
}