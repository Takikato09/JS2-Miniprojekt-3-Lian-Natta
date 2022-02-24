class Product{
    constructor(name, url, price, stockBalance){
        this.name = name;
        this.url = url; 
        this.price = price;
        this.stockBalance = stockBalance;
    }

    updateStockBalance() {
        console.log('Send my information to database.')
        const str = `${this.name}, ${this.url},${this.price},${this.stockBalance}`;
        return str;
    }
}

// const venusFlyTrap = new Product('Venus Fly Trap', 'https://www.plantagen.se/venus-flugfalla.html', 89, 100);
// console.log(venusFlyTrap);



export {Product};