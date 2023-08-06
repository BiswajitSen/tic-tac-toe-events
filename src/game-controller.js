class GameController {
  #game;
  #inputController;
  #renderer;

  constructor(game, inputController, renderer) {
    this.#game = game;
    this.#inputController = inputController;
    this.#renderer = renderer;
  }

  start() {
    this.#renderer.render(this.#game.status());

    this.#inputController.on('move-entered', (move) => {
      this.#game.makeMove(move);
      this.#renderer.render(this.#game.status());

      if (this.#game.status().isGameOver) {
        this.#inputController.stop();
        this.#renderer.renderGameResult(this.#game.status());
      }
    });

    this.#inputController.on('illegal-move', (move) => {
      console.log('Illegal move entered!');
    });

    this.#inputController.start();
  }
}

exports.GameController = GameController;
