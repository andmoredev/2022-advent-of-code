const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const dataStream = contents.split(/\r?\n/)[0];

let startOfMessageMarker = '';

for (let i = 0; i < dataStream.length; i++) {
  const value = dataStream[i];
  if(startOfMessageMarker.includes(value)) {
    startOfMessageMarker = startOfMessageMarker + value;
    const firstDuplicateIndex = startOfMessageMarker.indexOf(value);
    startOfMessageMarker = startOfMessageMarker.slice(firstDuplicateIndex + 1);

  } else {
    startOfMessageMarker = startOfMessageMarker + value;
  }2

  if (startOfMessageMarker.length === 14) {
    console.log('index', i + 1);
    break;
  }
}