import Product from './modules/products.js';
import {displayCart, displayProducts} from './modules/display.js';
import ShoppingCart from './modules/shoppingbag.js';
import {getDataFromDatabase} from './modules/database.js';


const MOCKPRODUCTS = [
    {
        name: 'Venus Flytrap',
        url:'img/venusfalla-ny.jpeg',
        price: 199,
        stockBalance: 20
    },
    {
        name: 'Hibiskus',
        url:'img/hibiskus.jpeg',
        price: 249,
        stockBalance: 30
    },
    {
        name: 'Lavender Artificial',
        url:'img/lavendelkonstgjord.jpeg',
        price: 299,
        stockBalance: 10
    },
    {
        name: 'Azura Silver Eucalyptus',
        url:'img/silvereukaluptus Azura.jpeg',
        price: 149,
        stockBalance: 5
    },
    {
        name: 'Spring heather',
        url:'img/vårljung.jpeg',
        price: 99,
        stockBalance: 15
    },
  ];

const products = MOCKPRODUCTS.map((data)=>{
    return new Product(data.name, data.url, data.price, data.stockBalance);
})

const shoppingCart = new ShoppingCart('test'); //this is on progress too 

function addItemToCart(item) {
    shoppingCart.addItem(item);
    displayCart(shoppingCart);
}

displayProducts(products, addItemToCart);
displayCart(shoppingCart);
getDataFromDatabase();
