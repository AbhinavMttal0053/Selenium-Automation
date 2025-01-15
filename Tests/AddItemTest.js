//Test for Adding items to Cart
const createDriver = require('../Utils/Driver');
const LoginPage = require('../Pages/Login');
const InventoryPage = require('../Pages/AddToCart');
const { initializeSession } = require('../Utils/SessionManager');

module.exports = async function addItemTest(driver) {
    // const driver = await initializeSession();
    const inventoryPage = new InventoryPage(driver);
    // this.timeout(1000);

    try {
        // Call Functions from the page Object
        await inventoryPage.FilterBy('Price (low to high)');// Filter Products
        await inventoryPage.addItemToCart('Sauce Labs Backpack');// Add Items to Cart
        await inventoryPage.addItemToCart('Sauce Labs Bike Light');

        // GEt the count of the items in Cart
        const count = await inventoryPage.getCartCount();
        console.log('Cart item count:', count);
    } finally {
        // await driver.quit();
    }
};
