// Create Pawn class
class Pawn {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteWidth/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    
    update(){
        //console.log('update');
        if (keys[38]){ //Up
            if(this.moving === false){
                this.y -= grid;
                this.moving = true;
            }
        }
        if (keys[40]){ //Down
            if (this.moving === false && this.y < canvas.height - this.height * 2){
                this.y += grid;
                this.moving = true;
            }
        }
        if (keys[37]){ //Left
            if (this.moving === false && this.x > this.width){
                this.x -= grid;
                this.moving = true;
            }
        }
        if (keys[39]){ //Right
            if (this.moving === false && this.x < canvas.width - this.width * 2){
                this.x += grid;
                this.moving = true;
            }
        }
    }
    draw(){
        ctx3.fillStyle = 'green';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    jump() {
        //console.log('jump');
    }
}

const pawn = new Pawn();