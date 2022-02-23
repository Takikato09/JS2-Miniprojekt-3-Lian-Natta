class Product{
    constructor(name, url, price, stockBalance){
        this.name = name;
        this.url = url; 
        this.price = price;
        this.stockBalance = stockBalance;
    }

    updateStockBalance() {
        console.log('Send my information to database.')
    }
}

// const venusFlyTrap = new Product('Venus Fly Trap', 'https://www.plantagen.se/venus-flugfalla.html', 89, 100);
// console.log(venusFlyTrap);


const MOCKPRODUCTS = [
    {
        name: 'Venus Flytrap',
        url:'kj212123kjasdkjsadkad12lk',
        price: 200,
        stockBalance: 100
    },
    {
        name: 'Zombie Plant',
        url:'kj212123kjasdkjsadkad1rhsrd2lk',
        price: 200,
        stockBalance: 100
    },
    {
        name: 'Scary Plant',
        url:'kj212123kjasdkjsadkadshdsrhd12lk',
        price: 200,
        stockBalance: 100
    },
    {
        name: 'Very Scary Plant',
        url:'kj212123kjasdkjsadkaulud12lk',
        price: 200,
        stockBalance: 100
    },
    {
        name: 'Mega Scary Plant',
        url:'kj212123kjasdkjsadkaetawd12lk',
        price: 200,
        stockBalance: 100
    } 
  ];
const products = MOCKPRODUCTS.map((data)=>{
    return new Product(data.name, data.url, data.price, data.stockBalance);
})
console.log(products);

export {Product};