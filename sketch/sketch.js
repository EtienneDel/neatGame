var player;
var enemy;
var score = 0;
var died = false;

function setup() {
  createCanvas(500,800);
  textSize(40);
  player = new Player();
  enemy = new Enemy();
}

function draw() {
    if(died == true) {
      background(51);
      text('You loose\nyou\'re score is '+score, 10, height/2);
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
  if(d < enemy.size) {
    died = true;
    console.log(d)
  }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    player.move(-10)
  } else if(keyCode === RIGHT_ARROW){
    player.move(10)
  }
}

function Player(){
  this.xSpeed = 0;
  this.size = 50;
  this.x = 0;
  this.y = height-this.size;
  
  this.update = function() {
    this.x = this.x + this.xSpeed;
    
    this.x = constrain(this.x, 0, width-this.size)
  }
  
  this.show = function() {
    fill(0,0,255);
    rect(this.x, this.y, this.size, this.size);
  }
  
  this.move = function(x) {
    this.xSpeed = x;
  }
}

function Enemy() {
 this.size = 100;
 this.x = int(random(width-this.size));
 this.y = 0;

 this.move = function(x) {
   if(this.y === 800) {
     this.y = 0;
     this.x = int(random(width-this.size));
   }
   this.y = this.y + 20;
 }
 
 this.show = function() {
   fill(255,0,0)
   rect(this.x, this.y, this.size, this.size)
 }
}
