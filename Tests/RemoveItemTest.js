const CartPage = require("../Pages/RemoveItems");

module.exports = async function removeItemTest(driver) {
    const cartPage = new CartPage(driver);

    try {
        console.log("Navigating to Cart Page...");
        await cartPage.navigateToCart();

        // console.log("Fetching item prices...");

        // gET prices from cart
        const prices = await cartPage.getItemPrices();
        // console.log("Prices in cart:", prices);

        console.log("Removing an item with price between $8 and $10...");

        //remove items based on conditions
        const itemRemoved = await cartPage.removeItemByPrice(8, 10);

        if (!itemRemoved) {
            throw new Error("No item found in the specified price range ($8 - $10).");
        }

        // console.log("Verifying cart item count...");

        //GEt items count in cart after removing Items
        const itemCount = await cartPage.getCartItemCount();
        console.log("Cart count after removal: ",itemCount);
        if (isNaN(itemCount)) {
            throw new Error("Failed to retrieve the cart count after item removal.");
        }

        console.log("Test passed: Item removed successfully, and cart count updated.");
    } catch (error) {
        console.error("Error during Remove Item Test:", error.message);
        throw error; // Propagate error to stop execution
    }
};
