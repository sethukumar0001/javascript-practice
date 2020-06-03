const Game = require('./game.js');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const completionCallback = () => {
  reader.question('Would you like to play again? ', (answer) => {
    if (answer === 'Y') {
      hanoi = new Game(3, reader);
      hanoi.run(completionCallback);
    } else {
      console.log('Goodbye');
      reader.close();
    }
  });
};

let hanoi = new Game(3, reader);
hanoi.run(completionCallback);