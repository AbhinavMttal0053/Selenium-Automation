// Automate The Logout Process
const { By, until } = require("selenium-webdriver");

class LogoutPage {
    constructor(driver) {
        this.driver = driver;
    }
    async logout() {
        try {
            //Find and  Click the burger menu icon
            const burgerMenu = await this.driver.findElement(By.id('react-burger-menu-btn'));
            await burgerMenu.click();

            // Wait for the logout option to be visible and click it
            const logoutOption = await this.driver.findElement(By.id('logout_sidebar_link'));
            await this.driver.wait(until.elementIsVisible(logoutOption), 5000);
            await logoutOption.click();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }

    async verifyLogout() {
        // Wait for the login page ('/')to be visible
        await this.driver.wait(until.urlIs('https://www.saucedemo.com/'), 5000);
    }
}

module.exports = LogoutPage;
