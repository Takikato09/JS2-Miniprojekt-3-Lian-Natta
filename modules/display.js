function displayProducts(productList, addToCart) { //changed into productList instead of mockproduct to make it clearer. 
    const container = document.querySelector('.product-wrapper'); //this is outside the loop since we only want to loop the products, not the wrapper. 

    console.log(productList); // For Firebase reference

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
        productPrice.textContent =  'Price: ' + product.price + ' SEK';
        
        const prodStockBalance = document.createElement('h5');
        productCard.appendChild(prodStockBalance);
        prodStockBalance.textContent = 'In stock: ' + product.stockBalance;

        const prodButton = document.createElement('button');
        productCard.appendChild(prodButton);
        prodButton.textContent = 'BUY';
        prodButton.addEventListener('click', () => addToCart(product));

        productCard.className = 'product-card';
        prodButton.className = 'product-button'
    } 

}

function displayCart(cart) {
    const cartContainer = document.querySelector('.shopping-bag-wrapper');
    cartContainer.innerHTML = ''; //to update everytime a user want to add another product
    const cartItems = cart.getItems();

    for (const product of cartItems){
       const cartItem = document.createElement ('div');
        cartContainer.append(cartItem);

        const itemImg = document.createElement ('img');
        cartItem.appendChild(itemImg);
        itemImg.src = product.url;

        const itemName = document.createElement ('h5');
        cartItem.appendChild(itemName);
        itemName.textContent = product.name;

        const removeButton = document.createElement('button');
        cartItem.appendChild(removeButton);
        removeButton.textContent = ' - ';

        removeButton.addEventListener('click', () => cart.removeItem(product));

        const addButton = document.createElement ('button');
        cartItem.appendChild(addButton);
        addButton.textContent = ' + ';
        addButton.addEventListener('click', () => cart.addItem(product));

        const itemPrice = document.createElement ('h6');
        cartItem.appendChild(itemPrice);
        itemPrice.textContent = product.price;

        removeButton.className = 'remove-button';
        addButton.className = 'add-button';
    }
    const sum = document.createElement('h6');
    cartContainer.appendChild(sum);
    sum.textContent = 'totalSum';

    const buyProductButton = document.createElement('button');
    cartContainer.appendChild(buyProductButton);
    buyProductButton.textContent = 'PURCHASE';
}

export { displayCart, displayProducts};