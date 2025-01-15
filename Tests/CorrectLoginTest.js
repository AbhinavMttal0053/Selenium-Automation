const LoginPage = require('../Pages/Login');
const { initializeSession } = require('../Utils/SessionManager');
module.exports = async function loginTest(driver) {

    const loginPage = new LoginPage(driver);

    try {
        await loginPage.navigate();

        // Test Valid Login
        await loginPage.login('performance_glitch_user', 'secret_sauce');
        await loginPage.ValidateLoginSuccess();
        console.log('Valid login successful.');
    } 
    catch (error) {
        console.error('Error during login test:', error);
    }
    finally {
        // await driver.quit();
    }
}
