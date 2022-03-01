export default class ShoppingCart {
    items = [];
    quantity;

    constructor () {
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.totalSum = this.totalSum.bind(this);
        this.purchaseProducts = this.purchaseProducts.bind(this);
        this.getItems = this.getItems.bind(this);
        this.quantity = 0;
    }

    addItem(product, quantity = 1) {

        const productIsAlreadyInCart = this.items.includes(product);//on progress
        
        //TODO: Add logic for checking if the product is already in the cart and what should happen then?

        console.log('Added product to cart!', product.name, quantity); //this will show which plant we press in log
        console.log(this.items);
        if(this.items.length === 0){
            this.items.push(product);
        }
        else{
            let addNewItem = true;
            for(const item of this.items){
                console.log('NAMES:', item.name, product.name);
                if(item.name === product.name){
                    console.log('product already exists in the item array')
                    addNewItem = false;
                    break;
                }
            }
            if(addNewItem){
                this.items.push(product);
            }
        }
        
        console.log(this.items);
    }

    getItems(){
        return this.items;
    }

    removeItem(product){
        //Google removing item from array. 
        // Delete-button which erases the selected product from shopping cart

        this.items.splice(product);
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






    
