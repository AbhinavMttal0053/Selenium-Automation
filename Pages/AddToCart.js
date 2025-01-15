// Automate Adding Items to Cart
const{By,until} = require("selenium-webdriver");

class CartPage{
    constructor(driver){
        this.driver = driver;
    }

    async addItemToCart(Name){
        try{
            //Finds the Add to Cart Button
            const Button = await this.driver.findElement(By.xpath
            (`//div[text()='${Name}']/ancestor::div[@class='inventory_item']//button`));

            //WAits for it to be visible and enabled
            await this.driver.wait(until.elementIsVisible(Button), 5000);
            await this.driver.wait(until.elementIsEnabled(Button), 5000);
            

            // Scrolls to the Button so it does not get overlapped//
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", Button);
            await Button.click();
        }
        catch(error){
            console.error(`Error Adding this Item To Cart: `,error);
        }
    }

    //Filters the Products based on price
    async FilterBy(option){
        const dropdown = await this.driver.findElement(By.className('product_sort_container'));
        await dropdown.sendKeys(option);
    }

    //Gets The count of the items in the Cart
    async getCartCount(){
        const CartImg = await this.driver.findElement(By.css('.shopping_cart_badge'));
        return parseInt(await CartImg.getText());
    }
}

module.exports = CartPage;