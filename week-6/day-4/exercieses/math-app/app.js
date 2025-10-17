const lodash = require("lodash")
const mathObjc = require('./math');


let numArr = [0];
numArr.push(mathObjc.add(5));
numArr.push(mathObjc.multiply(3,2));
numArr.push(mathObjc.add(7,4));
numArr.push(mathObjc.multiply(5,7));
numArr.push(mathObjc.add(0,0));

console.log(lodash.chunk(numArr,2));
console.log(lodash.compact(numArr));
console.log(lodash.reverse(numArr));
console.log(lodash.partition(numArr,(n)=>{
    return n%2 === 0
}));
