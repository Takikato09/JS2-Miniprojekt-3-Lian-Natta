import ShoppingCart from "./shoppingbag.js";


function displayProduct(productList) { //changed into productList instead of mockproduct to make it clearer. 
    const container = document.querySelector('.product-wrapper'); //this is outside the loop since we only want to loop the products, not the wrapper. 

    for (const product of productList) {
        const productCard = document.createElement('div');
        container.append(productCard);

        const productHeader = document.createElement('h4');
        productCard.appendChild(productHeader);
        productHeader.textContent = product.name;

        const img = document.createElement('img');
        productCard.appendChild(img);
        img.src = product.url;

        const productPrice = document.createElement('h5');
        productCard.appendChild(productPrice);
        productPrice.textContent =  'Price: ' + product.price;
        
        const prodStockBalance = document.createElement('h5');
        productCard.appendChild(prodStockBalance);
        prodStockBalance.textContent = 'Stock: ' + product.stockBalance;

        // Fix button! It loops and is "the same" on all products which is why we only register the click-event but can't see WHICH product is being added. Every product needs a unique button

        const prodButton = document.createElement('button');
        productCard.appendChild(prodButton);
        prodButton.textContent = 'buy';
        prodButton.addEventListener('click', sendToCart);

        productCard.className = 'product-card'
    } 

    }

    function sendToCart (products) {
        // This function works cause the console logs all 5 products as an array
        console.log('Send product to shopping cart.', products);
        return sendToCart;

    }

export {displayProduct};
export {sendToCart};