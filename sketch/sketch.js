const popTotal = 500;
const nbEnemies = 2;
let player;
let players = [];
let bestPlayer;
let savePlayers = [];
let enemies = [];
let score = 0;
let generation  = 1;
let speed = 1;
let button;
let highscore = 0;
let state = false;
let brainJSON;
let data;

function preload(){
  brainJSON = loadJSON("bestPlayer.json");
}

function setup() {
  let canvasG = createCanvas(600,800);
  canvasG.parent('game');
  
  button = createButton(" Change speed");
  button.parent('game');
  button.position(485, 10);

  button2 = createButton("Run best");
  button2.parent('game');
  button2.position(519, 40);

  button.mousePressed(changeSpeed);
  button2.mousePressed(runBest);

  for(let i = 0; i < popTotal; i++){
    players[i] = new Player();
  }
    
  for(let i = 0; i < nbEnemies; i++){
    enemies[i] = new Enemy(enemies[i-1]);
  }
}

function draw() {

  for(n = 0; n < speed; n++){

    background(51)

    if(players.length === 0 && enemies[0].y <= 400) {
      nextGeneration();
      score = 0;
      generation++;
    }

    for(let player of players) {
      player.think(enemies);
      player.update();
      collision(player);
    }

    for(let [index, enemy] of enemies.entries()){
      enemy.move(enemies[index-1], players);
    }
    score++;

  } 

  
  if(score > highscore){
    highscore = score;
  }

  for(let player of players){
    player.show();
  }

  for(let enemy of enemies){
    enemy.show();
  }  
  
  drawScore();
}

function collision(player){
  for(let i = 0; i < enemies.length; i++){
    var d = dist(player.x,player.y,enemies[i].x,enemies[i].y);
    if(d < enemies[i].size){
      player.score > 100 ? player.score -= 100 : player.score = 0;
      savePlayers.push(players.splice(player, 1)[0]);
    }
  }
}

function keyPressed(){
  if (key === 'S') {
    let player = players[0];
    saveJSON(player.brain, 'bestPlayer.json')
  }
}

function changeSpeed(){
  if(speed === 1 ){
    speed = 100;
  } else {
    speed = 1;
  }
}

function runBest(){
  state = !state;
  if(state){
    savePlayers.push(players);
    resetGame();
  } else {
    nextGeneration();
    score = 0;
    generation++;
  }
}

function resetGame(){
  players = []
  score = 0;
  for(let enemy of enemies){
    enemy.y = 0;
  }
  let playerBrain = NeuralNetwork.deserialize(brainJSON);
  player = new Player(playerBrain)
  players[0] = player;
  console.log(players)
}

function drawScore(){
  strokeWeight(1);
  stroke(0);
  fill(255);
  textSize(30);
  text('Generation : '+generation, 10, 30);
  text('Population : '+popTotal, 10, 70);
  text('High score : '+highscore, 10, 110);
  text('Score : '+score, 10, 150);
}