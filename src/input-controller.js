const { EventEmitter } = require('events');

class KeyboardController extends EventEmitter {
  #stdin;
  #keymap;

  constructor(stdin, keymap) {
    super();
    this.#stdin = stdin;
    this.#keymap = keymap;
  }

  #isInvalidKey(key) {
    return this.#keymap[key] === undefined;
  }

  start() {
    this.#stdin.setRawMode(true);
    this.#stdin.setEncoding('utf-8');
    this.#stdin.on('data', (key) => {
      if (key === '\u0003') {
        this.#stdin.setRawMode(false);
        return;
      }
      if (this.#isInvalidKey(key)) {
        this.emit('illegal-move');
        return;
      }
      const [event, eventData] = this.#keymap[key];
      this.emit(event, eventData);
    });
  }

  stop() {
    this.#stdin.destroy();
  }
}

exports.KeyboardController = KeyboardController;
