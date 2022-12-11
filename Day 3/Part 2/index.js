const { Console } = require('console');
const fs = require('fs');

const contents = fs.readFileSync('../input.txt', 'utf-8');
const puzzles = contents.split(/\r?\n/);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let sum = 0;
let isDone = false;

const groupPuzzles = [];
while (puzzles.length) {
  groupPuzzles.push(puzzles.splice(0, 3));
}

groupPuzzles.forEach((groupPuzzle) => {
  for (let i = 0; i < groupPuzzle[0].length; i++) {
    const firstPuzzleLetter = groupPuzzle[0][i];
    for (let j = 0; j < groupPuzzle[1].length; j++) {
      const secondPuzzleLetter = groupPuzzle[1][j];
      if (firstPuzzleLetter === secondPuzzleLetter) {
        for (let x = 0; x < groupPuzzle[2].length; x++) {
          const thirdPuzzleLetter = groupPuzzle[2][x];
          if (firstPuzzleLetter === thirdPuzzleLetter) {
            sum = sum + letters.indexOf(firstPuzzleLetter) + 1;
            isDone = true;
            break;
          }
        }
      }

      if (isDone) {
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