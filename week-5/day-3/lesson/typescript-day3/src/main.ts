

console.log("hi day 3 TS");

type Opreation = (a: number, b:number) => number;

const multiply: Opreation = (a,b)=>{
  return a*b
};
console.log(multiply(3,4));

const didvide: Opreation = (a,b) =>{
  //Type guard
  if (b === 0) {return -1}
  return a / b
};
console.log(didvide(40,4));

type StrOrNum = string|number;

function sumOrConcat(param1:number ,param2: StrOrNum): StrOrNum {
  if (typeof(param2) === "string"){
      return param1 + param2 +"";
  }else{
    return param1 + param2;
  }
}

console.log(sumOrConcat(5,"6"));

//optinal params

const addOptinal = (a:number, b?:number): number => {
  return a + (b||0)
};
console.log(addOptinal(5));



/** function overloading */
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b + "";
  if (typeof a === "number" && typeof b === "number") return a + b;
  return -1;
};

add(1,1);
add("1","1");
// add(1,"1");
// add("1",1);

//never Type
const errorMessage = (msg: string):never =>{
  throw new Error(msg);
}
//void Type




const yearSpan = document.querySelector("#year") as HTMLSpanElement;
console.log(yearSpan);

if(yearSpan){
  const thisYear:string = new Date().getFullYear().toString();
  yearSpan.textContent = thisYear
}