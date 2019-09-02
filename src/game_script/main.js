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
        
    }

    draw(){
        this.background.createFillRect();
    }

    update(){
        
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

}

