const popTotal = 500;
const nbEnemies = 2;
let players = [];
let savePlayers = [];
let enemies = [];
let score = 0;
let generation  = 1;
let speed = 1;
let button;
let highscore = 0;

function setup() {
  let canvas = createCanvas(600,800);
  canvas.parent('game');
  button = createButton(" Change speed");
  button.parent('game');
  button.position(485,10);
  button.mousePressed(changeSpeed);
  for(let i = 0; i < popTotal; i++){
    players[i] = new Player();
  }
  for(let i = 0; i < nbEnemies; i++){
    enemies[i] = new Enemy(enemies[i-1]);
  }
}

function draw() {
    
    for(n = 0; n < speed; n++){
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
        enemy.move(enemies[index-1]);
      }

      score++;
      if(score > highscore){
        highscore = score;
      }
    }
    
    background(51);
    
    for(let player of players){
      player.show();
    }
    for(let enemy of enemies){
      enemy.show();
    }
    drawScore();
}

function drawScore(){
  fill(255);
  textSize(30);
  text('Generation : '+generation, 10, 30);
  text('Population : '+popTotal, 10, 70);
  text('High score : '+highscore, 10, 110);
  text('Score : '+score, 10, 150);
}

function collision(player){
  for(let i = 0; i < enemies.length; i++){
    var d = dist(player.x,player.y,enemies[i].x,enemies[i].y);
    if(d < enemies[i].size){
      savePlayers.push(players.splice(player, 1)[0]);
    }
  }
}

function changeSpeed(){
  if(speed === 1 ){
    speed = 100;
  } else {
    speed = 1;
  }
}