
// Start Game

const WINDOW_WIDTH = 700;
const WINDOW_HEIGHT = 500;
const FRAMES_PER_SECOND = 60;

let game = new Game(WINDOW_WIDTH,WINDOW_HEIGHT,document.querySelector('canvas'));
game.init();

let intervals = setInterval(() => {

    game.draw();
    game.update();

}, 1000/FRAMES_PER_SECOND)