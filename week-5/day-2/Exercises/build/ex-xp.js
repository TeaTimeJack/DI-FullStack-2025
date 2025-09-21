"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 1: Hello, World! Program
console.log("Hello, World!");
//  Exercise 2: Type Annotations
let age = 24;
let name = "Jack";
console.log(age);
console.log(name);
// Exercise 3: Union Types
let id = 0;
// Exercise 4: Control Flow with
function controlFlow(num) {
    if (num > 0) {
        return "positive";
    }
    else if (num < 0) {
        return "negative";
    }
    return "zero";
}
// Exercise 5: Tuple Types
function getDetails(name, age) {
    const great = `Hello, ${name}! You are ${age} years old.`;
    let returnValue;
    returnValue = [name, age, great];
    return returnValue;
}
// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
// Exercise 6: Object Type Annotations
let person;
function creatPerson(nameI, ageI) {
    return person = {
        name: nameI,
        age: ageI
    };
}
console.log(creatPerson("amit", 35));
// Exercise 7: Type Assertions
//  Exercise 8: switch Statement with Complex Conditions
function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
            break;
        case "editor":
            return "Edit content";
            break;
        case "viewer":
            return "View content";
            break;
        case "guest":
            return "Limited access";
            break;
        default:
            return "Invalid role";
            break;
    }
}
// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role
// Exercise 9: Function Overloading with Default Parameters
function greet(name) {
    if (name) {
        return `hello ${name}`;
    }
    else {
        return "hello";
    }
}
console.log(greet("Mike"));
console.log(greet());
//# sourceMappingURL=ex-xp.js.map