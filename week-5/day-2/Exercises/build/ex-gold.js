"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exercise 1: Union Types
function processValue(params) {
    if (typeof (params) === "number") {
        const formatted = params.toFixed(2);
        return `$${formatted}`;
    }
    else if (typeof (params) === "string") {
        const charArray = params.split('');
        const reversedArray = charArray.reverse();
        const reversedStr = reversedArray.join('');
        return reversedStr;
    }
}
console.log(processValue("name"));
console.log(processValue(63.2));
//Exercise 2: Array Type Annotations
const sumNumbersInArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof (element) === "number") {
            sum += element;
        }
    }
    return sum;
};
console.log(sumNumbersInArray([6, "hello", 2, 1, "me", "7", 1, true]));
const introduceAdvancedUser = (prm) => {
    let retunString = `Hello ${prm.name}! You are ${prm.age} years old!`;
    if (prm.address) {
        retunString += ` You live in ${prm.address}!`;
    }
    return retunString;
};
const info1 = {
    name: "Amit",
    age: 35,
    address: "israel"
};
const info2 = {
    name: "Tohar",
    age: 6,
};
console.log(introduceAdvancedUser(info1));
console.log(introduceAdvancedUser(info2));
//Exercise 4: Optional Parameters
const welcomeUser = (name, greeting = "Hello") => {
    return `${greeting} ${name}`;
};
console.log(welcomeUser("Amit"));
console.log(welcomeUser("lital", "Hi"));
//# sourceMappingURL=ex-gold.js.map