const databaseUrl = `https://nlplantshop-default-rtdb.europe-west1.firebasedatabase.app/MOCKPRODUCTS.json`;

function getDataFromDatabase() {
    fetch(databaseUrl)
.then(response => response.json())
.then(data => {
    console.log('Testing fetch-URL for database = success!', data) // URL works. Console logs our array of products from firebase
})}

// Created "fake function" for now. This will be implemented with products to check if current stockBalance is enough for adding to cart (with proper values from products and an if-statement to compare current stock with amount of products being added to cart I guess)

function updateStock () {

    const checkStock = {
        this:stockBalance = stockBalance,
    }

    const headerObject = {
        "content-type": "application/json; charset=UTF-8"
    };

    const init = {
        method: 'PUT',
        body: JSON.stringify(checkStock),
        headers: headerObject
    }

    fetch(databaseUrl, init)
    .then(response => response.json())
    .then(d=> console.log('Check current stock in database', d));
}
       


export {getDataFromDatabase};

