const I = require("../steps_file");
 const { loginLocator } = require("../locator/loginLocator");
 const { loginData } = require("../data/loginData");

module.exports = {
    openLoginPage() {
        I.amOnPage("https://release-ui.marketcube.io/login");
        I.wait(4);
    },
     enterEmail() {
         I.fillField(loginLocator.email, loginData.email);
     },
     enterPassword() {
         I.fillField(loginLocator.password, loginData.password);
     },
     clickOnLoginButton() {
         I.click(loginLocator.loginButton);
     },
     onDashboard() {
         I.wait(8);
         I.seeElement(loginLocator.onDashboard);
     },
 };