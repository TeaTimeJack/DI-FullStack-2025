

console.log("ex xp day 3 :)");

// Exercise 1: Class with Access Modifiers

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name:string, salary:number, position:string, department:string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getEmployeeInfo():string{
        return `Emply Name: ${this.name} Emply Position: ${this.position} sallary: ${this.salary}`
    }
}
 const emply1 = new Employee("shahar",1500,"maneger", "sales")
 console.log(emply1.getEmployeeInfo());
 console.log(emply1);
 

// Exercise 2: Readonly Properties in a Class
class Product{
    readonly id:number;
    public name: string;
    public price: number;

    constructor(id:number,name:string,price:number){
        this.id=id;
        this.name =name;
        this.price= price
    }

    getProductInfo():string{
        return `name: ${this.name} price: $${this.price}`
    }
}

const prdc1 = new Product(1,"t-shirt", 19);
console.log(prdc1.getProductInfo());
console.log(prdc1);
prdc1.name = "Pants"
// prdc1.id = 5
console.log(prdc1);

// Exercise 3: Class Inheritance
class Aminal{
    public name:string

    constructor(name:string){
        this.name = name;
    }
    makeSound():string{
        return "Shhhhh"
    }
}

class Dog extends Aminal{
    constructor(name:string){
        super(name)
    }
    makeSound():string{
        return "Bark"
    }
}
const dog1 = new Dog("Mika")
console.log(dog1.makeSound())

// Exercise 4: Static Properties and Methods
class Calculator{
    static add(a:number, b:number):number{
        return a+b;
    }
    static subtract(a:number, b:number):number{
        return a-b;
    }
}
console.log(Calculator.add(5,3));
console.log(Calculator.subtract(5,3));

// Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User{
    readonly id: number,
    name: string,
    email: string
}

interface PremiumUser extends User{
    membershipLevel?: number
}

function logDetails (param:PremiumUser) {
    if (param.membershipLevel) {
       return `${param.id} Name: ${param.name} Email:${param.email} Level: ${param.membershipLevel}` 
    }else{
        return `${param.id} Name: ${param.name} Email:${param.email}`
    }
}

const preUserLital : PremiumUser = {
    id:83,
    name: "Lital",
    email: "lital@gmail.com",
    membershipLevel: 5
}
const preUserAmit : PremiumUser = {
    id:38,
    name: "Amit",
    email: "Amit@gmail.com"
}

console.log(logDetails(preUserLital));
console.log(logDetails(preUserAmit));