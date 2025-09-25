

//Exercise 1: Union Types
function processValue(params:string | number) {
    if(typeof(params) === "number"){
        const formatted = params.toFixed(2);
        return `$${formatted}`
    }else if(typeof(params) === "string"){
        const charArray = params.split('');
        const reversedArray = charArray.reverse();
        const reversedStr = reversedArray.join('');
        return reversedStr;
    }
}

console.log(processValue("name"));
console.log(processValue(63.2));

//Exercise 2: Array Type Annotations

const sumNumbersInArray=(arr:any):number =>{
    let sum:number = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(typeof(element)==="number"){
            sum+=element;
        }
    }
    return sum;
}
console.log(sumNumbersInArray([6, "hello", 2,1,"me","7",1,true]));

//Exercise 3: Type Aliases

type AdvancedUser ={
    name: string,
    age:number,
    address?:string
}

const introduceAdvancedUser = (prm:AdvancedUser):string=>{
    let retunString = `Hello ${prm.name}! You are ${prm.age} years old!`;
    if(prm.address){
        retunString+= ` You live in ${prm.address}!`
    }
    return retunString;
}
const info1: AdvancedUser = {
    name: "Amit",
    age:35,
    address: "israel"
}
const info2: AdvancedUser = {
    name: "Tohar",
    age:6,
}
console.log(introduceAdvancedUser(info1));
console.log(introduceAdvancedUser(info2));

//Exercise 4: Optional Parameters

const welcomeUser = (name:string, greeting:string = "Hello"):string =>{
    return `${greeting} ${name}`
}
console.log(welcomeUser("Amit"));
console.log(welcomeUser("lital", "Hi"));

