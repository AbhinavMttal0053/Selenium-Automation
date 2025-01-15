const { By, until } = require("selenium-webdriver");  

class CartPage {  
    constructor(driver) {  
        this.driver = driver;  
    }  

    async navigateToProductDetails(itemName) {  
        const link = await this.driver.wait(  
            until.elementLocated(By.xpath(`//div[text()="${itemName}"]/ancestor::a`)),  
            10000 // Waits for upto 10 Seconds 
        );  
        await link.click();  
    }  

    async addItemToCart(name) {  
        try {  
            const button = await this.driver.wait(  
                until.elementLocated(By.xpath(`//div[text()='${name}']/ancestor::div[@class='inventory_item']//button`)),  
                10000   
            );  

            //Makes the code wait until the Button is visible and enabled to
            //Ensure it is clickable and does not get overlapped by any other button
            await this.driver.wait(until.elementIsVisible(button), 10000);  
            await this.driver.wait(until.elementIsEnabled(button), 10000);  
            await button.click();  
        } catch (error) {  
            console.error(`Error Adding this Item To Cart: ${name}`, error);  
        }  
    }  

    async addItemToCartFromDetails() {  
        const addButton = await this.driver.wait(  
            until.elementLocated(By.id('add-to-cart')),  
            10000 
        );  

        //Makes the code wait until the Button is visible and enabled to
        //Ensure it is clickable and does not get overlapped by any other button
        await this.driver.wait(until.elementIsVisible(addButton), 10000);  
        await this.driver.wait(until.elementIsEnabled(addButton), 10000);  
        await addButton.click();  
    }  
}  

module.exports = CartPage;