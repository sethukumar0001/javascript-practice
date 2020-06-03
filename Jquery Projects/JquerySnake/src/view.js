const Board = require('./board');
const frameRate = 120;

class View {
  constructor($el, $score, $title, buttonsObj) {
    this.$display = $el;
    this.$score = $score;
    this.$title = $title;
    this.buttons = buttonsObj;
    this.board = new Board();

    this.bindKeys();
    this.bindButtons();
    this.render();

    $title.html('Snake');

    setTimeout(() => {
      this.clock = setInterval(() => {
        this.animate();
      }, frameRate);
    }, 250);
    
  }

  clearView() {
    clearInterval(this.clock);
    this.$display.html('');
  }

  animate() {
    if (!this.board.gameOver()) {
      this.render();
      this.updateScore();
      this.board.updateBoard();
    } else {
      clearInterval(this.clock);
      this.$title.html('Goodbye Snake ☹');
    }
  }

  render() {
    this.$display.html('');

    this.board.board.forEach((row) => {
      let $ul = $('<ul></ul>');

      row.forEach((space) => {
        if (space === 'S') {
          $ul.append('<li class="snake"></li>');
        } else if (space === 'A') {
          $ul.append('<li class="apple"></li>');
        } else {
          $ul.append('<li></li>');
        }
      });

      this.$display.append($ul);
    });
  }

  updateScore() {
    this.$score.text(this.board.appleCount * (10 + this.board.appleCount));
  }

  handleKey(e, dir) {
    this.board.snake.setDir(dir);
    e.preventDefault();
  }

  bindKeys() {
    $(document).keydown((e) => {
      const charCode = e.keyCode || e.which;

      switch(charCode) {
        case 38:
        case 87:
          this.handleKey(e, 'up');
          break;
        case 40:
        case 83:
          this.handleKey(e, 'down');
          break;
        case 37:
        case 65:
          this.handleKey(e, 'left');
          break;
        case 39:
        case 68:
          this.handleKey(e, 'right');
          break;
      }
    });
  }

  bindButtons() {
    ['up', 'down', 'left', 'right'].forEach((dir) => {
      this.buttons[dir].on('click touchstart', (e) => {
        this.handleKey(e, dir);
      });
    });
  }
}

module.exports = View;