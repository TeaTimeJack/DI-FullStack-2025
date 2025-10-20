const {greet} = require('./greeting.js');
const {redMSG , greenMSG} = require('./colorful-message.js');
const {readFile} = require('./files/read-file.js')


console.log(greenMSG(greet("Avner")));
console.log(redMSG(greet("Avner")));
readFile('./files/file-data.txt');
 
