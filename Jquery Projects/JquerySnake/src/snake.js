const growthRate = 3;
const dirs = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1]
};

class Snake {
  constructor(pos) {
    this.dir = dirs.up;

    // head is always at 0, tail at length - 1
    this.segments = [pos];
  }

  move() {
    const head = this.segments[0];

    this.segments.unshift([head[0] + this.dir[0], head[1] + this.dir[1]]);
    this.segments.pop();
  }

  setDir(dir) {
    const dirStr = this.dir.join(' ');

    switch(dir) {
      case 'up':
      case 'down':
        if ([dirs.right.join(' '), dirs.left.join(' ')].includes(dirStr)) {
          this.dir = dirs[dir];
        }

        break;
      case 'right':
      case 'left':
        if ([dirs.up.join(' '), dirs.down.join(' ')].includes(dirStr)) {
          this.dir = dirs[dir];
        }
  
        break;
    }
  }

  grow() {
    let growthDir = this.dir.map(coord => coord * -1);

    if (this.segments.length > 1) {
      const len = this.segments.length;
      const tailEnd = this.segments[len - 1];
      const tailPrev = this.segments[len - 2];
      growthDir = [tailEnd[0] - tailPrev[0], tailEnd[1] - tailPrev[1]];
    }

    for (let i = 0; i < growthRate; i++) {
      const tail = this.segments[this.segments.length - 1];

      this.segments.push(tail.map((coord, idx) => coord + growthDir[idx]));
    }
  }
}

module.exports = {
  Snake: Snake,
  growthRate: growthRate
};