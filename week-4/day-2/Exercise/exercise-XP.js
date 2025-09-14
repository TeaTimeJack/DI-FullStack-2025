
// Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible(divisor){
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0){
            sum+=i
            console.log(i)
        } 
    }
    console.log(sum)
}

displayNumbersDivisible(23)   
//      UNCOMMENT ME BEFORE SENDING!

//  Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let ShoppingList = ["banana", "orange", "apple"]
function myBill() {
    let totalbill = 0
    for (let i = 0; i < ShoppingList.length; i++) {
        const fruit = ShoppingList[i];
        if (fruit in stock){
            if(stock[fruit] > 0){
                totalbill += prices[fruit]
                stock[fruit]-=1
            }
        }
    }
    console.log(totalbill)
    return totalbill
}

myBill()       
//  UNCOMMENT ME BEFORE SENDING!


// Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange){
    let changeRepresent = [0.25, 0.10, 0.05, 0.01]
    let sum = 0;
    for (let i = 0; i < amountOfChange.length; i++){
        change = amountOfChange[i] * changeRepresent[i]
        sum += change;
    }
    if(sum >= itemPrice){
        return true;
    }else{
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0]))
console.log(changeEnough(0.75, [0,0,20,5]))   
//      UNCOMMENT ME BEFORE SENDING!




// Exercise 4 : Vacations Costs

function hotelCost(){
    while (true){
        let numOfNights = prompt("How many nights would you want to have in your vacation?")
        if (Number(numOfNights) !== NaN){
            let totalCost = 140 * numOfNights
            return totalCost
        }
    }
}
function planeRideCost() {
    while(true){
        let userDestination = prompt("What is your destination?")
        if(!Number(userDestination)){
            if(userDestination === "london"){
                return 183
            }else if(userDestination === "paris"){
                return 220
            }else{
                return 300
            }
        }
    }
}
function rentalCarCost(){
    while (true){
        let numOfDays = prompt("How many days would you want to rent a car?")
        if (Number(numOfDays) !== NaN){
            if(numOfDays > 10){
                let totalCost = 38 * numOfDays;
                return totalCost;
            }else{
                let totalCost = 40 * numOfDays;
                return totalCost;
            }
        }
    }
}
function totalVacationCost(){
    let hotelprise = hotelCost()
    let flightPrise = planeRideCost()
    let carPrise = rentalCarCost()
    let totalprise = hotelprise + flightPrise +carPrise

    console.log(`The car cost: $${carPrise}, the hotel cost: $${hotelprise}, the plane tickets cost: $${flightPrise}`)
    console.log(`Total Vacation cost is $${totalprise}`)
    return totalprise
}
totalVacationCost()