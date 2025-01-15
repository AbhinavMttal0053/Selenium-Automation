// Automate The Login Process
const {By, until} = require("selenium-webdriver");

class LoginPage{
    constructor(driver){
        this.driver = driver;
        this.url = 'https://www.saucedemo.com/';
    }
    // Function To Navigate to The '/'page of site
    async navigate(){
        await this.driver.get(this.url);
    }

    async login(username,password){
        try{
            // Find The Fields and Fill data in them
            await this.driver.findElement(By.id('user-name')).sendKeys(username);
            await this.driver.findElement(By.id('password')).sendKeys(password);
            await this.driver.findElement(By.id('login-button')).click();
        }
        catch(error){
            console.error('Error During Login', error);
        }
    }

    async getErrorMessage(){
        try{
            // Pickup The Error Message in Case of Wrong Credentials
            const error = await this.driver.findElement(By.css('.error-message-container')).getText();
            return error;
        }
        catch(e){
            return null;
        }
    }
    async ValidateLoginSuccess(){
        // wait until the login is Successful and page changes to inventory
        await this.driver.wait(until.urlContains('/inventory.html'),5000);
    }
}

module.exports = LoginPage;