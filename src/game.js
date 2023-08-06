class Game {
  #players;
  #isGameOver;
  #winner;

  constructor(players) {
    this.#players = players;
  }

  isGameOver() {
    return this.#isGameOver;
  }

  makeMove(move) {
    this.#players.recordMove(move);

    if (this.#players.hasWon()) {
      this.#isGameOver = true;
      this.#winner = this.#players.getCurrentPlayer();
      return;
    }

    if (this.#players.totalMovesMade() === 9) {
      this.#isGameOver = true;
      return;
    }

    this.#players.changeTurn();
  }

  status() {
    return {
      moves: this.#players.movesMade(),
      currentPlayer: this.#players.getCurrentPlayer(),
      isGameOver: this.#isGameOver,
      winner: this.#winner,
    };
  }
}

exports.Game = Game;
