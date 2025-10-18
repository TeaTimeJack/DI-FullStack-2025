const greet = require('./greeting.js');
const colorMsg = require('./colorful-message.js');
const read = require('./files/read-file.js')

console.log(greet.greet("Avner"));
console.log(colorMsg.redMSG);
read.readFile('./files/file-data.txt');
 
