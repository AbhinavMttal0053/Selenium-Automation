// Manage the Session across tests to save login info

const CreateDriver = require('../Utils/Driver');
const LoginPage = require('../Pages/Login');
// const env = require('dotenv');
require('dotenv').config();
let driver;
let isLoggedIn = false; // Tracks login state
let savedCookies = []; // Stores cookies for reuse
console.log(process.env.USER_NAME);
module.exports = {

    // initialize Session  
    initializeSession: async () => {

        //if driver does not exist then create a new one and login
        if (!driver) {
            try{
            driver = await CreateDriver();
            }
            catch(error){
                console.error('Error creating driver:', error);
                throw error; // 
            }
        }

        if (!isLoggedIn) {
            const Login = new LoginPage(driver);

            try {
                await Login.navigate();
                await Login.login(process.env.USER_NAME, process.env.USER_PWD);

                // Save cookies after successful login to manage sessions
                savedCookies = await driver.manage().getCookies();
                isLoggedIn = true;
            } catch (error) {
                console.error('Error during login:', error);
                throw error;
            }
    }
         else {
            try {
                // Apply saved cookies if logged in
                for (const cookie of savedCookies) {
                    await driver.manage().addCookie(cookie);
                }
                await driver.navigate().refresh(); // Refresh to apply cookies
            } catch (error) {
                console.error('Error applying cookies:', error);
                throw error;
            }
        }

        return driver;
    },
    // close the ongoing driver session
    closeSession: async () => {
        if (driver) {
            try {
                await driver.quit();
            } catch (error) {
                console.error('Error during session termination:', error);
            } finally {

                // remove cookies and remove logged,in state
                driver = null;
                isLoggedIn = false;
                savedCookies = [];
            }
        }
    },
};
