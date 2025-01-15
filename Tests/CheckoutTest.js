const CheckoutPage = require("../Pages/Checkout");
require('dotenv').config();
module.exports = async function checkoutTest(driver) {
    const checkoutPage = new CheckoutPage(driver);

    try {
        // console.log("Navigating to Checkout Page...");

        await checkoutPage.navigateToCheckout();//call the function to navigate to checkout page

        // console.log("Filling out the checkout form...");

        // call the function to fill the checkout form
        await checkoutPage.fillCheckoutForm(process.env.CUS_FNAME,
             process.env.CUS_SNAME, process.env.CUS_PINCODE);

        // console.log("Verifying checkout overview...");

        const totalAmount = await checkoutPage.verifyCheckoutOverview();
        console.log("Total amount in checkout overview: ",totalAmount);

        // console.log("Completing the purchase...");

        //Complete the purchase
        const successMessage = await checkoutPage.completePurchase();
        console.log("Purchase completed successfully. Success message:", successMessage);

        //Validate the Success Message
        if (successMessage !=
             "Thank you for your order!") {
            throw new Error("Checkout failed, success message not found.");
        }

        console.log("Test passed: Checkout process completed successfully.");
    } catch (error) {
        console.error("Error during Checkout Test:", error.message);
        throw error; // Propagate error to stop execution
    }
};
