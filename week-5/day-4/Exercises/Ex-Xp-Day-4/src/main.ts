

console.log("EX-XP-day 4 ");

// Exercise 1: Intersection Types
type Person = {
  name:string,
  age:number
}
type Address = {
  street:string,
  city: string
}
type PersonWithAddress = Person & Address;
const p1:PersonWithAddress = {
  name:"amit",
  age:35,
  street: "GG",
  city: "London"
}
console.log(p1);

// Exercise 2: Type Guards with Union Types

function describeValue (param:number | string):string {
  if (typeof param === "number") {
    return "This is a number"
  }else{
    return "This is a string"
  }
}
console.log(describeValue(5));
console.log(describeValue("hi"));

// Exercise 3: Type Casting

let someValue : any = "doors"
let str:string = someValue as string 
console.log(str);

// Exercise 4: Type Assertions with Union Types

function getFirstElement (arr:(number | string)[]): string {
 return `the first val is ${arr[0]}`
}
console.log(getFirstElement([2,5,"hi","bye",7]));

// Exercise 5: Generic Constraints
interface HasLength {
    length: number;
}

function logLength <T extends HasLength>(param:T):void {
  console.log(param.length);
}
logLength("hi amit")
logLength([1,2,3,4,5]);

// Exercise 6: Intersection Types and Type Guards
type Person2 = {
  name:string,
  age: number
}
type Job = {
  position:string,
  department: string
}
type Employee = Person2 & Job

function describeEmployee (param:Employee): string {
  if(param.position === "Manager"){
    return "You are the boss, Boss!"
  }else if (param.position === "Developer"){
    return "Dont stop Coding!!!!"
  }else{
    return "keep working fool"
  }
}
const empl2:Employee = {
  name:"Jim",
  age: 55,
  position: "Developer",
  department: "hi"
}
console.log(describeEmployee(empl2));

// Exercise 7: Type Assertions and Generic Constraints

interface HasToString {
    toString(): string;
}

function formatInput <T extends HasToString>(param:T):string {
  let madeString = param.toString() as string
  for (let i = 0; i < madeString.length; i++) {
    const element = madeString[i];
    console.log(element);
  }
  return `this is a string: ${madeString}`
}
console.log(formatInput(5867));
