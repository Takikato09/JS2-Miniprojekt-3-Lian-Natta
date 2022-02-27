import Product from './modules/products.js';
import {displayProduct} from './modules/display.js';
import ShoppingCart from './modules/shoppingbag.js';
import {sendToCart} from './modules/display.js';


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
    },
  ];

const products = MOCKPRODUCTS.map((data)=>{
    return new Product(data.name, data.url, data.price, data.stockBalance);
})

displayProduct(products);
sendToCart(products);


