<<<<<<< HEAD
README: Automated Testing Framework

Overview

This project is an automated testing framework designed for validating a web application using Selenium WebDriver with JavaScript (Node.js). It includes scripts to test functionalities such as login, adding items to the cart, removing items, checkout workflow, and logout functionality.

Prerequisites

Ensure the following are installed and properly configured on your system:

Node.js and npm: Verify installation by running node -v and npm -v in your terminal.

Google Chrome Browser: The tests are designed to run on Chrome.

ChromeDriver: Ensure it matches your Chrome version and is added to your system PATH.

Selenium WebDriver: Installed as a dependency via npm.

Project Dependencies: Install required packages by running:

npm install

Project Structure

.
├── Pages
│   ├── Login.js          # Page object for login functionality
│   ├── AddToCart.js      # Page object for cart functionality
│   ├── Checkout.js       # Page object for checkout workflow
│   ├── Logout.js         # Page object for logout functionality
├── Tests
│   ├── CorrectLoginTest.js # Test script for login functionality
│   ├── AddItemTest.js      # Test script for adding items to the cart
│   ├── RemoveItemTest.js   # Test script for removing items from the cart
│   ├── CheckoutTest.js     # Test script for the checkout workflow
│   ├── LogoutTest.js       # Test script for logout functionality
│   ├── RunAll.js           # Master script to run all tests sequentially
├── Utils
│   ├── Driver.js           # Driver initialization logic
│   ├── SessionManager.js   # Handles WebDriver sessions
├── package.json            # Node.js configuration file
├── README.md               # Project documentation

Steps to Execute the Scripts

1. Clone the Repository

git clone <repository_url>
cd <repository_folder>

2. Install Dependencies

npm install

3. Run Individual Tests

To execute a specific test, use the following command:

node Tests/<TestFileName>.js

For example, to run the login test:

node Tests/CorrectLoginTest.js

4. Run All Tests

To execute all tests sequentially, run the master test script:

node Tests/RunAll.js

5. View Results

Test results and logs will be displayed in the terminal.

Assumptions

Test Data: The default credentials performance_glitch_user and secret_sauce are valid.

URL: The application URL is predefined in the Login.js file.

Browser: Tests are designed for the Chrome browser.

Dynamic Elements: Scripts handle dynamic elements using explicit waits and retries.

Observations

Click Interception: Issues with click interception were addressed by scrolling elements into view and waiting for them to become clickable.

Performance: Test execution may be slower on systems with high CPU usage due to dynamic waits.

Session Management: Reusable sessions are implemented to improve efficiency across tests.

Error Handling: Comprehensive error logging is integrated to capture execution issues.

Troubleshooting

Element Not Found: Ensure the web application is running and the UI has not changed.

Driver Issues: Verify the ChromeDriver version matches your Chrome browser version.


Contact

For questions, feedback, or issues, please contact [abhinavwork0053@gmail.com].

=======
# Selenium-Automation
This project is an automated testing framework designed for validating a web application using Selenium WebDriver with JavaScript (Node.js). It includes scripts to test functionalities such as login, adding items to the cart, removing items, checkout workflow, and logout functionality.
>>>>>>> da45ca8f17e80fb1cc8ef188742b942017e0d66b
