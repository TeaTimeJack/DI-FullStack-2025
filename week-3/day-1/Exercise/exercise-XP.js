const people = ["Greg", "Mary", "Devon", "James"];
people.shift("Greg")
// let gregIndex = people.indexOf("Greg")
// let newPeople = people.splice(gregIndex,1)
people.splice(2,1,"Jason")
people.push("Amit")
console.log(people.indexOf("Mary"))
console.log(people);

let copyPeople = people.slice(1,3)
console.log(copyPeople)
people.indexOf["Foo"]

let last = people.length -1

// Part II - Loops

for (let i = 0; i < people.length; i++) {
    let element = people[i];
    console.log(element)
    if (element === "Devon"){
        break
    }
}

// Exercise 2 : Your favorite colors

const colors = ["red", "green", "blue", "yellow"]
const suffix = ["st", "nd", "rd", "th"]

for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    console.log(`My ${i+1}${suffix[i]} choice is ${color}`)
}

// Exercise 3 : Repeat the question

while(true) {
    let userInput = prompt("TYPE A NUMBER")
    if(Number(userInput) === "NaN"){
        alert("please type only a number")
    }else{
         if(userInput >= 10){
            alert("You picked the number " + userInput)
            break
        } else{
            alert("please pick a Number greater then 10")
        }
    }
}

// Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(`${building.numberOfAptByFloor.firstFloor} + ${building.numberOfAptByFloor.thirdFloor}  =  ${building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor}`)
console.log(`Name: ${building.nameOfTenants[1]} Number of rooms: ${building.numberOfRoomsAndRent.dan[0]}`)
let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let daividsRent = building.numberOfRoomsAndRent.david[1]
// console.log(building.numberOfRoomsAndRent.dan[1])
if (sarahRent + daividsRent > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
}
// console.log(building.numberOfRoomsAndRent.dan[1])

// Exercise 5 : Family

const family = {
    dad: "Homer",
    mom: "Marge",
    boy: "Bart",
    girl: "Lissa",
    baby: "Maggey"
}

for (key in family){
    console.log(key)
}
for (key in family){
    console.log(family[key])
}

// Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
sentence = "";
for (key in details){
    sentence += key + " "
    sentence += details[key]+ " "
}
console.log(sentence)

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sortedNames = names.sort()
let firstLetters = ""
for (let i = 0; i < sortedNames.length; i++) {
    const name = sortedNames[i];
    firstLetters += name[0]
}
console.log(firstLetters)
