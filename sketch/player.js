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
    fill(46,148,181);
    rect(this.x, this.y, this.size, this.size);
  }
  
  this.move = function(x) {
    this.xSpeed = x;
  }
}