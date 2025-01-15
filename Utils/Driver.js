const {Builder} = require("selenium-webdriver");
//function to create a driver
function CreateDriver(){
    return new Builder()
    .forBrowser("chrome")
    .build();
}

module.exports = CreateDriver;