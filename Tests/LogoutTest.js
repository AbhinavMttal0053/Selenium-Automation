const { initializeSession, closeSession } = require('../Utils/SessionManager');
const LogoutPage = require('../Pages/Logout');

module.exports = async function logoutTest(driver) {

    const logoutPage = new LogoutPage(driver);
    try {
        // Perform logout action
        await logoutPage.logout();
        
        // Verify that the user has been redirected to the login page
        await logoutPage.verifyLogout();
        console.log('Logout was successful and redirected to the login page.');
    } catch (error) {
        console.error('Error during logout test:', error);
    } finally {
        // await closeSession();
    }
};
