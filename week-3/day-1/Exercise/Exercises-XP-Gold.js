
let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element%3 === 0){
        console.log("TRUE" + " " + element);
    }else{
        console.log("FALSE" + " " + element);
    }
}

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// let input = prompt("what is your name?")
// if(input in guestList){
//     console.log(`Hi! I'm ${input}, and I'm from ${guestList[input]}.`);
// }else{
//     console.log("Hi! I'm a guest.");
// }


let age = [20,5,12,43,98,55];
let sum = 0
let biggest = 0;
for (let i = 0; i < age.length; i++) {
    const element = age[i];
    sum+=element;
    if (element > biggest) {
        biggest = element;
    }
}
console.log(sum);
console.log(biggest);

