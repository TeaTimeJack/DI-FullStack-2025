// Exercise 1

const addressNumber = 27
const addressStreet = "Bezalel"
const country = "Israel"

let globalAddress = `I live in ${addressNumber} av ${addressStreet} in ${country}`
console.log(globalAddress)

// Exercise 2

let MyBirthDay =  1990;
let futereYear = 2030;
let calculatedAge = futereYear - MyBirthDay;

console.log(`I will be ${calculatedAge} in ${futereYear}`)

// Exercise 3

let pets = ['cat','dog','fish','rabbit','cow']
console.log(pets[1])
pets.splice(3,1,"horse")
console.log(pets)
console.log(pets.length)

// Exercise 1 - objects

let myObject = {
    "username" : "hulk",
    "password" : "geen"
}

let database = [myObject]

let newsFeed = [{
    "username" : "hulk",
    "timeline" : "sunday"
},
{
    "username" : "spidy",
    "timeline" : "monday"
},
{
    "username" : "ironman",
    "timeline" : "tuesday"
}]

// Exercise conditinals

let age = prompt("What is your age?")

    if (age == 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!") 
    } else if (age > 18) {
        console.log("Powering On. Enjoy the ride!")
    } else {
        console.log("Sorry, you are too young to drive this car. Powering off")
    }


for (let i=1; i<=15; i++){
    if (i % 2 === 0){
        console.log(i + ": is EVEN NUMBER" )
    }
    else{ console.log(i + ": is ODD NUMBER" )} 
}


let names= ["john", "sarah", 23, "Rudolf",34]

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if(typeof(element) === "string"){
        names[i] = `${element[0].toUpperCase()}${element.slice(1,element.length)} `
    }else{
        continue
    }
   
}

console.log(names)