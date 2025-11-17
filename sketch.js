let systems = [];

function setup() {
  createCanvas(720, 400);
  for (let i=0;i<3;i++){
    systems.push(new LeafSystem(createVector(100+i*200, 50)));
  }
}

function draw() {
  background(200, 230, 255);
  let gravity = createVector(0,0.05);
  let wind = createVector(random(-0.02,0.02),0);

  for (let sys of systems){
    sys.addLeaf();
    sys.addForce(gravity);
    sys.addForce(wind);
    sys.run();
  }
}

function mousePressed() {
  let burst = createVector(0,-0.5);
  for (let sys of systems){
    sys.addForce(burst);
  }
}
