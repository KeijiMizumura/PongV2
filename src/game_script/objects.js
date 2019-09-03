class GameObjects{

    constructor(ctx, x, y, width = 0, height = 0, radius = 0){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    setXVel(xVel){
        this.xVel = xVel; 
    }

    setYVel(yVel){
        this.yVel = yVel;
    }

    getXVel(){
        return this.xVel;
    }

    getYVel(){
        return this.yVel;
    }

    createFillRect(color = 'black'){
        this.ctx.fillStyle=color;
        this.ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    createStrokeRect(color = 'black',thickness = 1){
        this.ctx.strokeStyle=color;
        for(let i = 0; i < thickness; i++){
            this.ctx.strokeRect(this.x,this.y,this.width,this.height);
        }
    }

    createFillCircle(color = 'black'){
        this.ctx.beginPath();
        this.ctx.fillStyle=color;
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.ctx.fill();
    }

    createStrokeCircle(color = 'black',thickness = 1){
        this.ctx.beginPath();
        this.ctx.strokeStyle=color;
        for(let i = 0; i < thickness; i++){
            this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        }
        this.ctx.stroke();
    }

    // Collision Detection (Game Borders)

    checkCollision(){

        if(this.radius > 0){
            if(this.x + this.radius > game.getWidth() || this.x - this.radius < 0){
                this.xVel *= -1;
            }

            if(this.y + this.radius > game.getHeight() || this.y - this.radius < 0){
                this.yVel *= -1;
            }
        } 
    
    }

}