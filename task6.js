const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'task6> '
});

rl.prompt();

rl.on('line', (line) => {
  let noNumLine = replaceAll(line, /\d/g, '')
  console.log(noNumLine)
  rl.prompt()
}).on('close', () => {
  process.exit(0);
});

function replaceAll(str, re, replace) {
    return str.replace(re, replace);
}