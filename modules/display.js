function displayProduct(MOCKPRODUCTS) {
    for (const products of MOCKPRODUCTS) {
        const h2 = document.createElement('h2');
        h2.textContent = products.updateStockBalance();
        document.body.append(h2);
    }
}

export {displayProduct};