
const scripts2 = require('./scripts2');
const fs = require("fs");
// import { largNum } from "./scripts2";  can do this on NODE JS

const a = scripts2.largNum;
const b = 7;
console.log(a+b);

fs.readFile("./hello.txt",(err,data) =>{
    if (err) {
        console.log('eerrrrroooorrrrr');
    }else{
        console.log('1', data.toString('utf8'));
    }
})

const file = fs.readFileSync("./hello.txt");
console.log('Sync', file.toString());


// fs.appendFile('./hello.txt',' this is soo cool', err =>{
//     if (err) {
//         console.log(err);
//     }
// })

// fs.writeFile('bye.txt', 'Sad to see you go',err =>{
//     if (err) {
//         console.log(err);
//     }
// })

fs.unlink('./bye.txt',err =>{
    if (err) {
        console.log(err);
    }else{
        console.log('approved');
        
    }
})