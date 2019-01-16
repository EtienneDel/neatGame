let player;
let enemy;
let score = 0;
let died = false;

function setup() {
  createCanvas(500,800);
  textSize(40);
  player = new Player();
  enemy = new Enemy();
}

function draw() {
    if(died == true) {
      background(51);
      text('You lost\nyou\'re score is '+score, 10, height/2);
    } else {
      background(51);
      player.update();
      player.show();
      enemy.move();
      enemy.show();
      drawScore();
      endGame();
      score++;
    }
}

function drawScore(){
 fill(255)
 text(score, 10, 40)
}

function endGame(){
  var d = dist(player.x, player.y, enemy.x, enemy.y)
  if((player.x+player.size) <= enemy.x){
    if(d <= player.size) {
      died = true;
      console.log(d)
    }
  } else {
    if(d <= enemy.size) {
    died = true;
    console.log(d)
    }
  }
  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    player.move(-10)
  } else if(keyCode === RIGHT_ARROW){
    player.move(10)
  }
}