const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

const data = {
  A: {
    name: 'Rock',
    points: 1,
    defeats: 'C'
  },
  B: {
    name: 'Paper',
    points: 2,
    defeats: 'A'
  },
  C: {
    name: 'Scissor',
    points: 3,
    defeats: 'B'
  }
}

const expectedResults = {
  X: {
    outcome: 'lose'
  },
  Y: {
    outcome: 'draw'
  },
  Z: {
    outcome: 'win'
  }
}

let myPoints = 0;
arr.forEach((game) => {
  let myHand;
  const [opponentHand, expectedResult] = game.split(' ');

  switch (expectedResults[expectedResult].outcome) {
    case 'lose':
      myHand = data[opponentHand].defeats;
      myPoints = myPoints + data[myHand].points;
      break;

    case 'draw':
      myHand = opponentHand;
      myPoints = myPoints + 3 + data[myHand].points;
      break;

    case 'win':
      for (const [key, value] of Object.entries(data)) {
        if (value.defeats === opponentHand) {
          myHand = key;
          myPoints = myPoints + 6 + data[myHand].points;
        }
      }
      break;
    default:
      break;
  }
});

console.log('myPoints', myPoints);