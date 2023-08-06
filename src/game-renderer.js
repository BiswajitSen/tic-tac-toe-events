class GameRenderer {
  renderGameResult({ moves, winner }) {
    this.#renderBoard(moves);
    if (winner) {
      console.log('WINNER: ', winner);
      return;
    }

    console.log('---Draw---');
  }

  #renderBoard(moves) {
    const separator = '-'.repeat(9);
    console.clear();
    console.log(separator);
    for (let i = 0; i < 9; i += 3) {
      const row = [i, i + 1, i + 2].map((x) => moves[x] || ' ').join(' | ');
      console.log(row);
      console.log(separator);
    }
    console.log('');
  }

  render({ moves, currentPlayer }) {
    this.#renderBoard(moves);
    console.log(currentPlayer, "'s turn");
  }
}

exports.GameRenderer = GameRenderer;
