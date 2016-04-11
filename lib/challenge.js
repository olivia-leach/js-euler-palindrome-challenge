'use strict';

let sum = 0;
let bin;
let int_string;

function dec2bin (dec) {
  return (dec >>> 0).toString(2);
}

function pal (num) {
  let reverse = [];
  for (let i = 0; i < num.length; i++) {
    reverse.unshift(num[i]);
  }
  reverse = reverse.join('');
  if (num === reverse) {
    return true;
  }
}

for (let i = 0; i < 1000000; i++) {
  int_string = String(i);
  bin = dec2bin(i);
  if (pal(bin) && pal(int_string)) {
    sum += i;
    console.log(i);
  }
}

console.log(sum);

module.exports = () => {
  return true;
};
