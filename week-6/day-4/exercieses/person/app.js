import {person} from "./data.js";

// console.log(person);
function avrgAge() {
    let sumAge=0;
    try {
        person.forEach(element => {
            sumAge+=element.age
        });
        const avrgAge = sumAge / person.length;
        console.log(avrgAge);
        return avrgAge; 
    } catch (error) {
        console.log(error.message); 
    }
}
avrgAge()