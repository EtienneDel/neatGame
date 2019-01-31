function nextGeneration() {

	calculateFitness();

	for(let i= 0; i < popTotal; i++) {
		players[i] = pickBestPlayer();
	}

	savePlayers = [];


}

function pickBestPlayer() {
  
  let index = 0;
  let r = random(1);

  while (r > 0) {
    r -= savePlayers[index].fitness;
    index ++;
  }

  index --;
  let player = savePlayers[index];
  bestPlayer = player;
  let child = new Player(player.brain)
  return child;
}

function calculateFitness() {
	
	let sum = 0;

	for(let player of savePlayers) {
		sum += player.score;
	}

	for(let player of savePlayers) {
		player.fitness = player.score / sum;
	}
}