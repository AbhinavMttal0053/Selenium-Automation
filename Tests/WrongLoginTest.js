const createDriver = require('../Utils/Driver');
const LoginPage = require('../Pages/Login');
const { initializeSession } = require('../Utils/SessionManager');
module.exports = async function loginTest(driver) {
    // const driver = await initializeSession();
    const loginPage = new LoginPage(driver);

    try {
        //Navigate the login page
        await loginPage.navigate();

        // // Test Invalid Login
        await loginPage.navigate();
        await loginPage.login('invalid_user', 'wrong_password');
        const errorMessage = await loginPage.getErrorMessage();
        console.log('Error message:', errorMessage);
    } 
    catch (error) {
        console.error('Error during login test:', error);
    }
    finally {
        // await driver.quit();
    }
}
