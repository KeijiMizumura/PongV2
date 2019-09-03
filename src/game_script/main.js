class Game{

    constructor(width, height, canvas){
        this.width = width;
        this.height = height;
        this.canvas = canvas;
    }

    init(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.initialDraw();
    }

    initialDraw(){
        // Background
        this.background = new GameObjects(this.ctx, 0,0,this.width,this.height);
        // Test Code
        this.balls = [];
        for(let rand = 0; rand < 50; rand++){
            let xRandom = this.width/2;
            let yRandom = this.height/2;
            let radiusRandom = 2 + Math.random() * 25;
            this.balls.push(new GameObjects(this.ctx, xRandom, yRandom, 0, 0, radiusRandom));
        }
        for(let i = 0; i < this.balls.length; i++){
            let xRandomVel = Math.random() * (10 - -10) + -10;
            let yRandomVel = Math.random() * (10 - -10) + -10;
            this.balls[i].setXVel(xRandomVel);
            this.balls[i].setYVel(yRandomVel);
        }
        // Test Code
    }

    draw(){
        this.background.createFillRect();
        let randomColors = ['#565c5e','#455954', '#9d7463', '#b5c2c7', '#dfdbd8'];
        for(let i = 0; i < this.balls.length; i++){
            let randomNum = Math.floor(Math.random() * randomColors.length);
            this.balls[i].createFillCircle(randomColors[randomNum]);
        }
    }

    update(){
        for(let i = 0; i < this.balls.length; i++){
            this.balls[i].x += this.balls[i].getXVel();
            this.balls[i].y += this.balls[i].getYVel();
            this.balls[i].checkCollision();
        }
    }

    getCanvas(){
        return this.canvas;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

}

