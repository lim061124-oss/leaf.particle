class LeafSystem {
  constructor(origin) {
    this.origin = origin.copy();
    this.leaves = [];
    this.forces = [];
  }

  addLeaf() {
    this.leaves.push(new Leaf(this.origin, random(1,3)));
  }

  addForce(force) {
    this.forces.push(force.copy());
  }

  run() {
    for (let i = this.leaves.length - 1; i >= 0; i--) {
      let leaf = this.leaves[i];
      for (let f of this.forces) {
        leaf.applyForce(f);
      }
      leaf.update();
      leaf.display();
      if (leaf.position.y > height) this.leaves.splice(i,1);
    }
    this.forces = [];
  }
}
