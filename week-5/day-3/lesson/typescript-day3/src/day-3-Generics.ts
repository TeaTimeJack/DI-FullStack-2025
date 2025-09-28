console.log("GENERICS");


const strEcho = (value:string): string => value;
const numEcho = (value:number): number => value;
const bolEcho = (value:boolean): boolean => value;


const echo = <T>(value:T): T => value;

echo<string>("abc");
echo<number>(456);
// echo<number>("abc");  
