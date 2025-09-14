
function logAges(myAge){
    let mumAge = myAge * 2
    let dadAge = Math.round(mumAge *1.2)

    console.log(`Mum age: ${mumAge} Dad age: ${dadAge}`)
    return mumAge
}

// console.log(logAges(10))

let calculator = (num1, num2, operrator) => {
    switch (operrator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            break;
    }
}

// console.log(calculator(4,5,"+"))



