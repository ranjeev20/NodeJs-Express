
const {readFileSync, writeFileSync} = require('fs');
console.log("start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log("read first and second")

writeFileSync(
    './content/resultSync.txt',
    `Here is the result: ${first}, ${second}`, {flag:`a`}
)

console.log("finish")
