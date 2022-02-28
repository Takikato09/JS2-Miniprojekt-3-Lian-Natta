

function displayProducts(productList, addToCart) { //changed into productList instead of mockproduct to make it clearer. 
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

        const prodButton = document.createElement('button');
        productCard.appendChild(prodButton);
        prodButton.textContent = 'buy';
        prodButton.addEventListener('click', () => addToCart(product));

        productCard.className = 'product-card';
        prodButton.className = 'product-button'
    } 

}

function updateShoppingCart (productList) {
    const cartContainer = document.querySelector('.shopping-bag-wrapper');
//this is on progress. Not yet visible in DOM
}    

export {displayProducts, updateShoppingCart};