const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const puzzles = contents.split(/\r?\n/);

const letters = ['a', 'b', 'c', 'd', 'e' , 'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let sum = 0;

let isDone = false;
puzzles.forEach((puzzle) => {
  for (let i = 0; i < puzzle.length/2; i++) {
    const leftItem = puzzle[i];
    for (let j = puzzle.length/2; j < puzzle.length; j++) {
      const rightItem = puzzle[j];
      if (leftItem === rightItem) {
        sum = sum + letters.indexOf(leftItem) + 1;
        isDone = true;
        break;
      }
    }

    if (isDone) {
      isDone = false;
      break;
    }
  }
});
console.log('sum', sum);