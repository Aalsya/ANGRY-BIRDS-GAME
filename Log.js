class Log extends BaseClass{
  constructor(x, y, height, angle){
    super(x, y, 20, height, angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visiblity = 255;
  }

  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255, this.visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
  score() {
    if (this.visiblity < 0 && this.visiblity > -502.5) {
      score++;
    }
  }
}