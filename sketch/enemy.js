class Enemy {

	constructor(){
		this.pos = [0,300]
		this.size = 300;
 		this.x = this.pos[0];
 		this.y = 0;
	}
 

	move(x) {
   		if((this.y+this.size) === 800) {
     		this.y = 0;
     		//this.x = this.pos[int(random(3))];

     		if(this.x === 0 ){
     			this.x = this.pos[1];
     		} else {
     			this.x = this.pos[0];
     		}
   		}
   		this.y = this.y + 10;
 	}
 
 	show() {
   		fill(214,35,30)
   		rect(this.x, this.y, this.size, this.size)
 	}
}