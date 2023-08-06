const { WinningCombinations } = require("./winning-combinations");

class Players {
  #players;

  constructor(player1, player2) {
    this.#players = [player1, player2];
  }

  changeTurn() {
    this.#players.reverse();
  }

  recordMove(move) {
    this.#players[0].recordMove(move);
  }

  getCurrentPlayer() {
    return this.#players[0].getDetails();
  }

  totalMovesMade() {
    return this.#players
      .map(player => player.numberOfMoves())
      .reduce((a, b) => a + b);
  }

  hasWon() {
    return WinningCombinations.some((combination) => this.#players[0].hasPlayed(combination))
  }

  movesMade() {
    return Object.fromEntries(
      this.#players.flatMap(player => player.movesMade())
    );
  }
}

exports.Players = Players;
