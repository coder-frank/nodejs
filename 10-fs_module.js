const fs = require('fs');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
fs.writeFileSync('./content/third.txt', 'Hello World \n This is a new line', {flag: 'a'});