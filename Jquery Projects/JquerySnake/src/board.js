const Snake = require('./snake');
const pixels = 20;
const limits = [0, pixels - 1];

class Board {
  constructor() {
    this.board = this.emptyBoard();
    this.snake = new Snake.Snake(Board.snakeLocation());
    this.apple = this.applePos();
    this.appleCount = 0;
    this.placeItems();
  }

  emptyBoard() {
    return Array(pixels).fill(null).map(row => Array(pixels).fill(null));
  }

  placeItems() {
    this.placeSnake();
    this.placeApple();
  }

  updateBoard() {
    this.board = this.emptyBoard();
    this.snake.move();
    this.eatApple();

    if (!this.gameOver()) {
      this.placeItems();
    }
  }

  placeSnake() {
    this.snake.segments.forEach((coords) => {
      // Don't place snake tail that grows out of bounds
      // Let later iterations add it in

      if (!Board.outOfBounds(coords)) {
        this.board[coords[0]][coords[1]] = 'S';
      }
    });
  }

  placeApple() {
    const [y, x] = this.apple;

    this.board[y][x] = 'A';
  }

  applePos() {
    const snakeBits = this.snake.segments.map(coords => coords.join(' '));
    let pos = Board.randomLocation();

    while (snakeBits.includes(pos.join(' '))) {
      pos = Board.randomLocation();
    }

    return pos;
  }

  eatApple() {
    if (Board.sameLoc(this.snake.segments[0], this.apple)) {
      this.snake.grow();
      this.apple = this.applePos();
      this.appleCount++;
    }
  }

  snakeCollision() {
    const head = this.snake.segments[0];
    
    for (let i = 1; i < this.snake.segments.length; i++) {
      if (Board.sameLoc(this.snake.segments[i], head)) {
        return true;
      }
    }

    return false;
  }

  gameOver() {
    return Board.outOfBounds(this.snake.segments[0]) || this.snakeCollision();
  }

  static outOfBounds(pos) {
    const [y, x] = pos;

    return y < 0 || x < 0 || x >= pixels || y >= pixels;
  }

  static sameLoc(pos1, pos2) {
    return pos1.join(' ') === pos2.join(' ');
  }

  // Never start game with snake on edge cuz kindness
  static snakeLocation() {
    let [y, x] = this.randomLocation();

    while (limits.includes(y) || limits.includes(x)) {
      [y, x] = this.randomLocation();
    }

    return [y, x];
  }

  static randomLocation() {
    return [this.randomVal(), this.randomVal()];
  }

  static randomVal() {
    return Math.floor(Math.random() * pixels);
  }
}

module.exports = Board;