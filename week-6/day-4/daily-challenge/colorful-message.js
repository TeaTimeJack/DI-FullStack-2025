
const chalk = require('chalk');

const redMSG = (msg) => chalk.red.bold(msg);
const greenMSG = (msg) => chalk.green(msg);
// console.log(redMSG);

module.exports = {
    redMSG,
    greenMSG
}