const fs = require('fs');

const contents =  fs.readFileSync('../input.txt', 'utf-8');
const dataStream = contents.split(/\r?\n/)[0];

let startOfPacketMarker = '';

for (let i = 0; i < dataStream.length; i++) {
  const value = dataStream[i];
  if(startOfPacketMarker.includes(value)) {
    startOfPacketMarker = value;
  } else {
    startOfPacketMarker = startOfPacketMarker + value;
  }
  if (startOfPacketMarker.length === 4) {
    console.log('index', i + 1);
    break;
  }
}