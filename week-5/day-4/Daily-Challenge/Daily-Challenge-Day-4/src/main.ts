console.log("Daily Challenge Day4 week 5");

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

function handleData(param :User | Product | Order):string{
  if(param.type === "user"){
    return `Hello ${param.name}! Your age is ${param.age}`
  }else if (param.type === "product"){
    return `ID: ${param.id} price: ${param.price}`
  }else{
    return `OrderID: ${param.orderId} and amount: ${param.amount}`
  }
}

const user1:User ={
  type: "user",
  name:"mike",
  age:2
}
const product1: Product = {
  type: "product",
  id: 568,
  price: 25
}
const order1:Order = {
  type: "order",
  orderId: "aaa-bbbb-2",
  amount: 14
}

console.log(handleData(user1));
console.log(handleData(product1));
console.log(handleData(order1));
