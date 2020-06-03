class Game {
    constructor(discs, reader) {
      let startRod = Array(discs).fill(0).map((el, idx) => idx);
      this.towers = {
        1: startRod,
        2: [],
        3: []
      };
      this.reader = reader;
    }
  
    async promptMove(callback) {
      this.print();
  
      let startRod;
  
      while (!this.isValidResponse(startRod)) {
        startRod = await this.getResponse('Choose a rod to move a disc from: ');
      }
      
      let endRod;
  
      while (!this.isValidResponse(endRod)) {
        endRod = await this.getResponse('Choose a rod to move the disc to: ');
      }
  
      callback(startRod, endRod);
    }
  
    async getResponse(question) {
      return new Promise((resolve, reject) => {
        this.reader.question(question, (answer) => {
          resolve(answer);
        });
      });
    }
  
    isValidResponse(response) {
      return ['1', '2', '3'].includes(response);
    }
  
    isValidMove(startTowerIdx, endTowerIdx) {
      const startTower = this.towers[startTowerIdx];
      const endTower = this.towers[endTowerIdx];
  
      return startTower.length > 0 && (endTower.length === 0 || (startTower[0] < endTower[0]));
    }
  
    move(startTowerIdx, endTowerIdx) {
      if(this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.towers[endTowerIdx].unshift(this.towers[startTowerIdx].shift());
        return true;
      }
      return false;
    }
  
    print() {
      this.printRod(1, '1');
      this.printRod(2, '2');
      this.printRod(3, '3');
    }
  
    printRod(num, key) {
      console.log(`Rod ${num}`);
      console.log(JSON.stringify(this.towers[key]));
      console.log('');
    }
  
    isWon() {
      if (this.towers['1'].length === 0 && (this.towers['2'].length === 0 || this.towers['3'].length === 0)) {
        const tower = this.towers['2'].length === 0 ? this.towers['3'] : this.towers['2'];
        const sorted = Array(tower.length).fill(0).map((el, idx) => idx);
  
        return sorted.join('') === tower.join('');
      }
      return false;
    }
  
    run(completionCallback) {
      if (!this.isWon()) {
        this.promptMove((startTower, endTower) => {
          if (!this.move(startTower, endTower)) {
            console.log('Invalid move!');
          }
  
          this.run(completionCallback);
        });
      } else {
        this.print();
        console.log('You win!');
        completionCallback();
      }
    }
  }
  
  module.exports = Game;