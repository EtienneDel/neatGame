const popTotal = 500;
let players = [];
let savePlayers = [];
let enemy;
let score = 0;
let died = false;
let generation  = 1;
let speed = 1;
let button;
let highscore = 0;

function setup() {
  button = createButton("Speed");
  button.position(600,80);
  button.mousePressed(changeSpeed);
  createCanvas(600,800);
  textSize(40);
  for(let i = 0; i < popTotal; i++){
  players[i] = new Player();
  }
  enemy = new Enemy();
}

function draw() {
    
    for(n = 0; n < speed; n++){
      if(players.length === 0) {
        nextGeneration();
        score = 0;
        generation++;
      }

      for(let player of players) {
        player.think();
        player.update();
        collision(player);
      }
      enemy.move();

      score++;
      if(score > highscore){
        highscore = score;
      }
    }
    
    background(51);
    text('Generation : '+generation, width/2, 40);
    text('Population : '+popTotal, width/2, 100);
    text('High score : '+highscore, width/2, 160);
    for(let player of players){
      player.show();
    }
    enemy.show();
    drawScore();
}

function drawScore(){
 fill(255)
 text(score, 10, 40)
}

function collision(player){
  var d = dist(player.x,player.y,enemy.x,enemy.y);
  if(d < enemy.size){
    savePlayers.push(players.splice(player, 1)[0]);
  }
}

function changeSpeed(){
  if(speed === 1 ){
    speed = 100;
  } else {
    speed = 1;
  }
}


// function keyPressed() {
//   if(keyCode === LEFT_ARROW){
//     players[0].move(-1)
//   } else if(keyCode === RIGHT_ARROW){
//     players[0].move(1)
//   }
// }