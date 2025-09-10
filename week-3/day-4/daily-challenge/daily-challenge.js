

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () =>{
    groceries.fruits.forEach(friut => {
        console.log(friut);
    });
}

displayGroceries()

const cloneGroceries = () =>{
    let user = client;
    client = "Betty";
    // becuse client is not an object or an array
    console.log("becuse client is not an object or an array");
    const shopping = groceries;
    groceries.totalPrice = "35$";
    groceries.other.paid = false;
    // yes we will see a chanege because we have on a refrence to the the object (we dont have it twice in our data)
    console.log("yes we will see a chanege because we have on a refrence to the the object (we dont have it twice in our data)")
}

cloneGroceries()
