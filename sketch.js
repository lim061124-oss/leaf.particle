class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    return this.lifespan < 0;
  }
}

class ParticleSystem {
  constructor(origin) {
    this.origin = origin.copy();
    this.particles = [];
    this.forces = []; 
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  addForce(force) {
    this.forces.push(force.copy());
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];

      for (let f of this.forces) {
        p.applyForce(f);
      }

      p.update();
      p.display();

      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }

    this.forces = [];
  }
}

let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.05);
  let wind = createVector(random(-0.02, 0.02), 0);

  system.addForce(gravity);
  system.addForce(wind);

  system.addParticle();
  system.run();
}

function mousePressed() {
  let burst = createVector(0, -0.5);
  system.addForce(burst);
}
