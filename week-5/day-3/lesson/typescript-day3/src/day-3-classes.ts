console.log("hi day 3 classes lesson");

class User {
    public name: string;
    private age: number;
    protected active: boolean;

    constructor(name:string, age: number , active:boolean) {
        this.name = name;
        this.age = age;
        this.active = active
    }
    // getter methods
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    get isActive(): boolean{
        return this.active
    }
    // setter methods
    setName(val: string){
        this.name = val;
    }
}

const userJohn = new User("john", 27, true);
console.log(userJohn.name);
console.log(userJohn.age);




class Student extends User{
    constructor(name:string , age:number , active:boolean){
        super(name, age, active)
    }

    getStudentAge(): string{
        return this.name + " is " + this.age + " years old"  //must use GETTER - privet line 5
    }

    isStudentActiv():string{
        return this. name + " is " + "active: " + this.active  //is posible becuse the data is PROTECTED and not Privet
    }
}

const studentAnn = new Student("Anne", 26, true)

console.log(studentAnn.name);
console.log(studentAnn.getAge());
console.log(studentAnn.getStudentAge());
console.log(studentAnn.isActive);
console.log(studentAnn.isStudentActiv());

console.log("STATIC IN CLASSES");

class Book {
    static counter: number = 0
    name: string;
    id: number;

    constructor(name:string,){
        this.name = name;
        this.id = Book.counter++
    }
}

const book1 = new Book("hi")
console.log(book1);
const book2 = new Book("there")
console.log(book2);
const book3 = new Book("goodbye")
console.log(book3);
