const mutationRate = 0.5;

class Player {

  constructor(brain) {
    this.pos = [0,200,400];
    this.size = 200;
    this.movement = 1;
    this.x = this.pos[0];
    this.y = height-this.size;
    this.score = 0;
    this.fitness = 0;

    if(brain){
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(4,8,3);
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
    if(output[0] > output[1] && output[0] > output[2]) {
      this.movement = 0;
    } else if(output[1] > output[0] && output[1] > output[2]){
      this.movement = 1;
    } else if(output[2] > output[1] && output[2] > output[0]) {
      this.movement = 2;
    }
  }

  mutation() {
    this.brain.mutate(mutationRate);
  }

}