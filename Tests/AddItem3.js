// Test For Adding Items from The Details Page
const { initializeSession, closeSession } = require('../Utils/SessionManager');
const Cart1 = require('../Pages/AddToCart');
const Cart = require('../Pages/AddItem3');

// const item = require("")
module.exports = async function addItemFromDetailsPageTest() {
    const driver = await initializeSession();
    const CartPage = new Cart(driver);
    const count = new Cart1(driver);
    try {
        // Call The Functions From the page object 
        await CartPage.navigateToProductDetails('Sauce Labs Onesie');// Go TO Product details page
        await CartPage.addItemToCartFromDetails();// Add to Cart
        const counter = await count.getCartCount();
        console.log('Cart Item Count (after adding from details):', counter);
    } finally {
        // await closeSession();
    }
};
