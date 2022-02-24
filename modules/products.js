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
