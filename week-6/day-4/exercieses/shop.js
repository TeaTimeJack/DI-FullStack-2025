const products = require('./products');

// console.log(products);
function getProductDetails(productName) {
    try {
        products.products.forEach(element => {
            if(element.name === productName){
                console.log(element);
            }    
        });
    } catch (error) {
        console.log(error.message); 
    }
}
getProductDetails("hat")
getProductDetails("phone")
getProductDetails("shoes")