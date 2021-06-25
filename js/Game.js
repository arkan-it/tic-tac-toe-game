export default class Game {
     constructor() {
          console.log('init game')
          this.turn = "X";
          this.board = new Array(9).fill(null);
     }

     nextTurn() {
          if (this.turn === "X") {
               this.turn = "O";
          }
          else {
               this.turn = "X";
          }
     }

     makeMove(i) {

          if (this.endOfGame()) {
               return;
          }

          if (this.board[i]) { //if sth were inside
               return;
          }
          this.board[i] = this.turn; //x or o
          let winingCombinations = this.findWiningCombinations();
          if (!winingCombinations) {
               this.nextTurn();
          }
     }

     findWiningCombinations() {
          const winingCombinations = [
               [0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [6, 4, 2]
          ];

          for (const combination of winingCombinations) {
               const [a, b, c] = combination;

               if (this.board[a] &&
                    this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                    console.log(this.board[c])
                    return combination;
               }
          }
          return null;
     }

     endOfGame() {
          let winingCombinations = this.findWiningCombinations();
          if (winingCombinations) {
               return true;
          } else {
               return false;
          }
     }

}