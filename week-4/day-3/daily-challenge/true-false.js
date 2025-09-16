
function allTruthy(...values) {
    for (let i = 0; i < values.length; i++) {
        const val = values[i];
        if(!val){
            return false
        }
    }
    return true
}

console.log(allTruthy(true, true, true)) 
console.log(allTruthy(true, false, true))
console.log(allTruthy(5, 4, 3, 2, 1, 0))