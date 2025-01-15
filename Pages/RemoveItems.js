// Automate Removing items From Cart 
const { By, until } = require("selenium-webdriver");

class CartPage {
    constructor(driver) {
        this.driver = driver;
    }
    //FInd the Cart button and click it
    async navigateToCart() {
        await this.driver.findElement(By.id("shopping_cart_container")).click();
    }
    
    async getItemPrices() {
        const priceElements = await this.driver.findElements(By.css(".inventory_item_price"));
        const prices = [];
        for (const priceElement of priceElements) {
            const priceText = await priceElement.getText();
            const price = parseFloat(priceText.replace("$", ""));
            prices.push(price);
        }
        return prices;
    }
    
    //Remove Items From Cart that cost between certain prices
    async removeItemByPrice(minPrice, maxPrice) {
        const priceElements = await this.driver.findElements(By.css(".inventory_item_price"));
        const removeButtons = await this.driver.findElements(By.css(".cart_button"));
        // Loop to extract price and Remove the items
        for (let i = 0; i < priceElements.length; i++) {
            const priceText = await priceElements[i].getText();
            const price = parseInt(priceText.replace("$", ""));

            if (price >= minPrice && price <= maxPrice) {
                await removeButtons[i].click(); // Remove the item
                return true;
            }
        }

        return false; 
    }


    async getCartItemCount() {
        // Find the cart icon and get the count from it 
        const badgeElement = await this.driver.findElement(By.id("shopping_cart_container"));
        const count = await badgeElement.getText();
        return parseInt(count, 10);
    }
}

module.exports = CartPage;
