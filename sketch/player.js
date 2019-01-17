const mutationRate = 0.1;

class Player {

  constructor(brain) {
    this.pos = [0,300];
    this.size = 300;
    this.movement = 0;
    this.x = this.pos[0];
    this.y = height-this.size;
    this.score = 0;
    this.fitness = 0;

    if(brain){
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(4,4,1);
    }


  }

  
  update() {
    this.x = this.pos[this.movement];
    this.score ++;
    //console.log(this.fitness);
  }
  
  show() {
    fill(46,148,181);
    rect(this.x, this.y, this.size, this.size);
  }

  think() {
    let inputs = [];
    inputs[0] = this.x / width;
    inputs[1] = this.y / height;
    inputs[2] = enemy.x / width;
    inputs[3] = enemy.y / height;

    let output = this.brain.predict(inputs);
    if(output[0] > 0.5){
      this.movement = 1;
    }else {
      this.movement = 0;
    }
  }

  mutation() {
    this.brain.mutate(mutationRate);
  }

}