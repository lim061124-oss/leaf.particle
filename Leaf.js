class Leaf {
  constructor(position, mass = 1) {
    this.position = position.copy();
    this.velocity = createVector(random(-1,1), random(-1,0));
    this.acceleration = createVector(0,0);
    this.mass = mass;
    this.color = color(random(100,200), random(150,255), 50);
    this.size = createVector(this.mass*10, this.mass*5);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
