//  Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, i) => {
    console.log(`${i+1}# choice is ${color}`);
});

const newArry = colors.filter(val=> val === "Violet");
if (newArry.length > 0) {
    console.log("YEAH");
}else{
    console.log("No...");
}


// Exercise 2 : Colors #2
const ordinal = ["th","st","nd","rd"];
colors.forEach((color,i) =>{
    if(ordinal[i+1]){
        console.log(`${i+1}${ordinal[i+1]} choice is ${color}`);
    }else{
         console.log(`${i+1}${ordinal[0]} choice is ${color}`);
    }
});

// Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread',"carrot", "potato",'chicken',"apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// ["U","S","A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// ["undefined", "undefined"]


//  Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const welcomeStudents = users.map(user =>{
   return `Hello ${user.firstName}`
});
console.log(welcomeStudents);

const fullStackUsers = users.filter(user =>{
    if (user.role === 'Full Stack Resident' ){
        return user
    }
})
console.log(fullStackUsers);

let lastNameFullStack = users.filter(user =>{
    if (user.role === 'Full Stack Resident' ){
        return user
    }
});
lastNameFullStack = lastNameFullStack.map(user =>{
    return user.lastName
});
console.log(lastNameFullStack);

// Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let theString = epic.reduce((string , word) =>{
    if(!string){
        string = word
    }else{
        string+= ` ${word}`
    }
    return string
});
console.log(theString);

// Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(student =>{
    if(student.isPassed){
        return student
    }
});
console.log(passedStudents);

passedStudents.forEach(student =>{
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
})
