import {displayProduct} from './display.js';
export default class ShoppingCart {
    constructor () {
        this.items = []; //should be an empty array
        
    }

        addItem(product) {
        
         //TODO: Add logic for checking if the product is already in the cart and what should happen then?
         // Add-button which adds one more of that specific product

        this.items.push(product);
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




    
