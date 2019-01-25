const mutationRate = 0.1;

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
      this.brain.mutate(mutationRate);
    } else {
      this.brain = new NeuralNetwork(6, 12, 3);
    }
  }

  
  update() {
    this.x = this.pos[this.movement];
    this.score ++;
  }
  
  show() {
    fill(46,148,181, 100);
    rect(this.x, this.y, this.size, this.size);
  }

  think(enemies) {
    let whitespaceX = 0;

    if(enemies[0].x === 0 && enemies[1].x === 200){
      whitespaceX = 400;
    }else if (enemies[0].x === 200 && enemies[1].x === 400){
      whitespaceX = 0;
    }else {
      whitespaceX = 200;
    }

    let inputs = [];
    inputs[0] = this.x / width;
    inputs[1] = this.y / height;
    inputs[2] = enemies[0].x / width;
    inputs[3] = enemies[0].y / height;
    inputs[4] = enemies[1].x / width;
    inputs[5] = enemies[1].y / height;
    // inputs[3] = whitespaceX / width;


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