const products = require('./products');

console.log(products);
function getProductDetails(productName) {
    let isInShop = false;
    try {
        products.forEach(element => {
            if(productName === element.name){
                isInShop = true;
                console.log(`${element.name} cost $${element.price} and its in the ${element.category} category.`);
            }
        });
        if (!isInShop) {
            console.log("We dont have this Product - Try in a diffrent Store.");
        }
    } catch (error) {
        console.log(error.message); 
    }
}
getProductDetails("hat")
getProductDetails("phone")
getProductDetails("boots")
getProductDetails("shoes")
