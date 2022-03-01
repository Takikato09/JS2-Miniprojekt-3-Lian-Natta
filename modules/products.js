export default class Product { //added the export here
    constructor(name, url, price, stockBalance){
        this.name = name;
        this.url = url; 
        this.price = price;
        this.stockBalance = stockBalance;
    }

    updateStockBalance() {
        console.log('UPDATESTOCKBALANCE: Send my information to database.')
        const str = `${this.name}, ${this.url},${this.price},${this.stockBalance}`;
        return str;
    }
}

// This one is the same as MOCKPRODUCTS in main.js but this one is done in the correct way based off of Class Constructor-product above 

const product1 = new Product('Venus Flytrap', 'img/venusfalla-ny.jpeg', 199, 20);
const product2 = new Product('Hibiskus', 'img/hibiskus.jpeg', 249, 30);
const product3 = new Product('Lavender Artificial', 'img/lavendelkonstgjord.jpeg', 299, 10);
const product4 = new Product('Azura Silver Eucalyptus', 'img/silvereukaluptus Azura.jpeg', 149, 5);
const product5 = new Product('Spring heather', 'img/vårljung.jpeg', 99, 15);

// They work and gets logged in console properly but they are not yet used in the code/methods
console.log(product1, product2, product3, product4, product5);