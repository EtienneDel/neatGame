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
   fill(214,35,30)
   rect(this.x, this.y, this.size, this.size)
 }
}