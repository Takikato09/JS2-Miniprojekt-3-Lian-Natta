import Product from './modules/products.js';
import {displayCart, displayProducts, updateShoppingCart} from './modules/display.js';
import ShoppingCart from './modules/shoppingbag.js';


const MOCKPRODUCTS = [
    {
        name: 'Venus Flytrap',
        url:'img/venusfalla-ny.jpeg',
        price: 199,
        stockBalance: 100
    },
    {
        name: 'Hibiskus',
        url:'img/hibiskus.jpeg',
        price: 249,
        stockBalance: 50
    },
    {
        name: 'Lavender Artificial',
        url:'img/lavendelkonstgjord.jpeg',
        price: 299,
        stockBalance: 75
    },
    {
        name: 'Azura Silver Eucalyptus',
        url:'img/silvereukaluptus Azura.jpeg',
        price: 149,
        stockBalance: 100
    },
    {
        name: 'Spring heather',
        url:'img/vårljung.jpeg',
        price: 99,
        stockBalance: 200
    },
  ];

const products = MOCKPRODUCTS.map((data)=>{
    return new Product(data.name, data.url, data.price, data.stockBalance);
})

const shoppingCart = new ShoppingCart('test') //this is on progress too 

displayProducts(products, shoppingCart.addItem);
displayCart(shoppingCart.getItems());
