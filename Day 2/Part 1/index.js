const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

const opponent = {
  A: {
    name: 'Rock',
    points: 1,
    defeats: 'Z'
  },
  B: {
    name: 'Paper',
    points: 2,
    defeats: 'X'
  },
  C: {
    name: 'Scissor',
    points: 3,
    defeats: 'Y'
  }
}

const me = {
  X: {
    name: 'Rock',
    points: 1,
    defeats: 'C'
  },
  Y: {
    name: 'Paper',
    points: 2,
    defeats: 'A'
  },
  Z: {
    name: 'Scissor',
    points: 3,
    defeats: 'B'
  }
}

let opponentPoints = 0;
let myPoints = 0;
arr.forEach((game) => {
  const [opponentHand, myHand] = game.split(' ');

  if (opponent[opponentHand].defeats === myHand) {
    // opponent wins
    opponentPoints = opponentPoints + 6 + opponent[opponentHand].points;
    myPoints = myPoints + me[myHand].points;
  } else if (me[myHand].defeats === opponentHand) {
    //I win
    myPoints = myPoints + 6 + me[myHand].points;
    opponentPoints = opponentPoints + opponent[opponentHand].points;
  } else {
    // draw
    myPoints = myPoints + 3 + me[myHand].points;
    opponentPoints = opponentPoints + 3 + opponent[opponentHand].points;
  }
});

console.log('myPoints', myPoints);