export default class GameView {

     constructor() {
          console.log('init game view');
     }

     updateBoard(game) {
          this.updateTurn(game);
          const winingCombinations = game.findWiningCombinations();

          for (let i = 0; i < game.board.length; i++) {
               const tile = document.querySelector(`.board-tile[data-index='${i}']`);

               tile.classList.remove('tile-winner');

               let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o"; //shortcut for if else

               tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span >`

               /*if (game.board[i]){
                    game.board[i];
               }else{
                   game.board[i]= "";
               }
               */

               if (winingCombinations && winingCombinations.includes(i)) {
                    tile.classList.add('tile-winner');
               }

          }
     }

     updateTurn(game) {
          let playerX = document.querySelector('.player-x');
          let playerO = document.querySelector('.player-o');


          if (game.turn == 'X') {
               playerX.classList.add('active');
               playerO.classList.remove('active');
          } else {
               playerO.classList.add('active');
               playerX.classList.remove('active');
          }

     }

}