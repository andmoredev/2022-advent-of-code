const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const moves = contents.split(/\r?\n/);

const stacks = {
  1: 'GDVZJSB',
  2: 'ZSMGVP',
  3: 'CLBSWTQF',
  4: 'HJGWMRVQ',
  5: 'CLSNFMD',
  6: 'RGCD',
  7: 'HGTRJDSQ',
  8: 'PFV',
  9: 'DRSTJ'
}

const regex = /move (\d{1,2}) from (\d) to (\d)/g;

moves.forEach((m) => {
  const [matches] = m.matchAll(regex);

  const move = parseInt(matches[1]);
  const from = matches[2];
  const to = matches[3];

  let valuesToMove = stacks[from].substring(stacks[from].length - move, stacks[from].length);
  stacks[from] = stacks[from].slice(0, stacks[from].length - move);
  stacks[to] = stacks[to].concat(valuesToMove);
});

console.log(stacks);

