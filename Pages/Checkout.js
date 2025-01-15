// Automate Cart Checkout Process
const { By, until } = require("selenium-webdriver");

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToCheckout() {
        //Finds And Click on the checkout Button
        const checkoutButton = await this.driver.findElement(By.id("checkout"));
        await checkoutButton.click();
    }

    async fillCheckoutForm(firstName, lastName, zipCode) {
        // Fill the checkout form
        await this.driver.findElement(By.id("first-name")).sendKeys(firstName);
        await this.driver.findElement(By.id("last-name")).sendKeys(lastName);
        await this.driver.findElement(By.id("postal-code")).sendKeys(zipCode);

        //Finds And  Click on the Continue button
        const continueButton = await this.driver.findElement(By.id("continue"));
        await continueButton.click();
    }

    async verifyCheckoutOverview() {
        // Make Sure the checkout overview page loads correctly
        const checkoutOverviewHeader = await this.driver.findElement(By.css(".checkout_summary_container"));
        await this.driver.wait(until.elementIsVisible(checkoutOverviewHeader), 5000);

        // Get the total amount element and scroll to it to ensure it's visible
        const totalElement = await this.driver.findElement(By.css(".summary_total_label"));
        await this.scrollToElement(totalElement);

        // Get total amount 
        const totalAmountText = await totalElement.getText();
        const totalAmount = totalAmountText.replace("Total: $", "");
        console.log("Total amount: ",totalAmount);

        return totalAmount;
    }

    async completePurchase() {
        // Scroll to the "Finish" button to ensure it's visible
        const finishButton = await this.driver.findElement(By.id("finish"));
        await this.scrollToElement(finishButton);
        await finishButton.click();

        // Wait for the success message to appear
        const successMessage = await this.driver.findElement(By.css(".complete-header"));
        await this.driver.wait(until.elementIsVisible(successMessage), 5000);
        const message = await successMessage.getText();
        return message;
    }

    // Scroll into view helper function
    async scrollToElement(element) {
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
    }
}

module.exports = CheckoutPage;
