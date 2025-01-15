
// I am currently learning testNg RunAll is an alternative to testNg
// Run All Tests Simultaneously
const { initializeSession, closeSession } = require('../Utils/SessionManager');

//import All the test cases
const WrongLogin = require('./WrongLoginTest');
const correctLoginTest = require('./CorrectLoginTest');
const addItemTest = require('./AddItemTest');
const addItem3Test = require('./AddItem3');
const RemoveItem = require('./RemoveItemTest');
const Checkout = require('./CheckoutTest');
const Logout =require("./LogoutTest");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
(async function RunAllTests() {
    // Initialize driver Session and pass it to different test cases
    const driver = await initializeSession();
    console.log("driver initialized");

    try {

       // Run the test cases one by one 
        console.log('Running Login Test...');
        await WrongLogin(driver);
        await sleep(10000);
        await correctLoginTest(driver);
        await sleep(8000)
        console.log('Running Add Item Test...');

        await addItemTest(driver);
        await sleep(8000);
        await addItem3Test(driver);
        await sleep(8000);
        await RemoveItem(driver);
        await sleep(8000);
        await Checkout(driver);
        await sleep(8000);
        await Logout(driver);
        console.log("All Tests Executed Successfully!");
    } catch (error) {
        console.error("Error during test execution:", error.message);
    } finally {
        // await closeSession();
    }
})();

