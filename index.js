const { Game } = require("./src/game");
const { Player } = require("./src/player");
const { Players } = require("./src/players");
const { GameRenderer } = require("./src/game-renderer");
const { GameController } = require("./src/game-controller");
const { KeyboardController } = require("./src/input-controller");
const { Symbols } = require('./src/symbols');

exports.Game = Game;
exports.Player = Player;
exports.Players = Players;
exports.Symbols = Symbols;
exports.GameRenderer = GameRenderer;
exports.GameController = GameController;
exports.KeyboardController = KeyboardController;