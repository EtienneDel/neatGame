class Enemy {

	constructor(enemy){
		let i = 0;
		this.pos = [0,200,400]
		this.size = 200;
		console.log(enemy);
		if(typeof enemy !== 'undefined'){
			do {
				this.x = this.pos[int(random(3))];
			} while (this.x == enemy.x);
		} else {
			this.x = this.pos[int(random(3))];
		}
 		this.y = 0;
	}
 

	move(enemy) {
   		if((this.y+this.size) === 800) {
     		this.y = 0;
     		if(typeof enemy !== 'undefined'){
				do {
					this.x = this.pos[int(random(3))];
				} while (this.x == enemy.x);
			} else {
				this.x = this.pos[int(random(3))];
			}
   		}
   		this.y = this.y + 10;
 	}
 
 	show() {
   		fill(214,35,30)
   		rect(this.x, this.y, this.size, this.size)
 	}
}