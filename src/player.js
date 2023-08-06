class Player {
  #name;
  #moves;
  #symbol;

  constructor(name, symbol) {
    this.#name = name;
    this.#symbol = symbol;
    this.#moves = new Set();
  }

  recordMove(move) {
    this.#moves.add(move);
  }

  getDetails() {
    return this.#name;
  }

  numberOfMoves() {
    return this.#moves.size;
  }

  movesMade() {
    return [...this.#moves].map(move => [move, this.#symbol]);
  }

  hasPlayed(combination) {
    return combination.every((move) => this.#moves.has(move));
  }
}

exports.Player = Player;