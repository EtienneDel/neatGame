class Enemy {

	constructor(){
		this.pos = [0,200,400]
		this.size = 200;
 		this.x = this.pos[int(random(3))];
 		this.y = 0;
	}
 

	move(x) {
   		if((this.y+this.size) === 800) {
     		this.y = 0;
     		this.x = this.pos[int(random(3))];

     		// if(this.x === 0 ){
     		// 	this.x = this.pos[1];
     		// } else if(this.x === 200){
     		// 	this.x = this.pos[2];
     		// } else {
     		// 	this.x = this.pos[0];
     		// }
   		}
   		this.y = this.y + 20;
 	}
 
 	show() {
   		fill(214,35,30)
   		rect(this.x, this.y, this.size, this.size)
 	}
}