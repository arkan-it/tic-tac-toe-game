import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameview = new GameView();

document.querySelector('.restart').addEventListener('click', () => {
     return onRestartClick();
});

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
     tile.addEventListener('click', () => {
          onTileClick(tile.dataset.index)
     })
})

function onTileClick(i) {
     //make a move
     game.makeMove(i);
     //update board
     gameview.updateBoard(game);
}

function onRestartClick() {
     game = new Game();
     gameview.updateBoard(game);
}

gameview.updateBoard(game);

