class Enemy {

	constructor(enemy){
		this.pos = [0,200,400]
		this.size = 200;
		this.i = 0;
		this.y = 0;
		this.x = this.pos[1];
		enemy ? enemy.x = this.pos[0] : this.x = this.pos[1];
	}
 

	move(enemy, players) {
		
   		if((this.y+this.size) === 800) {

			for(let player of players){
				player.score += 100
			}

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