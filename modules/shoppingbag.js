export default class ShoppingCart {
    constructor () {
        this.items = []; //should be an empty array, and we still need to figure this out. I removed the stuff on the parenthesis.  
    }

    //Adds ONE product to cart, or as many as specified by second argument
    addItem(product, quantity = 1) {
        //TODO: Add logic for checking if the product is already in the cart and what should happen then?
        // Add-button which adds one more of that specific product
        console.log('Added product to cart!', product.name, quantity); //this will show which plant we press in log
        this.items.push(product);
        console.log(this.items);
    }

    removeItem(product){
        //Google removing item from array. 
        // Delete-button which erases the selected product from shopping cart

        this.items.pop(product);
    }

    totalSum() {
        // A function that takes product.price and amount as arguments, and return price*amount
        // Display this as an element in shopping bag (a number that is being updated)
    }

    purchaseProducts() {
        // Buy-button which will remove all products in shopping cart
        // When this method happens, show an alert that tells the buyer their products are on their way
    }

}




    
