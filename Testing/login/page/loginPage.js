const I = require("../../steps_file");
const { loginLocator } = require("../locator/loginLocator");
const { loginData } = require("../data/loginData");

module.exports = {
    openLoginPage() {
        I.amOnPage(loginData.url);
        I.wait(4);
    },
     enterValidEmail() {
         I.fillField(loginLocator.email, loginData.email);
     },
     enterValidPassword() {
         I.fillField(loginLocator.password, loginData.password);
     },
     clickOnLoginButton() {
         I.click(loginLocator.loginButton);
     },
     onDashboard() {
         I.seeElement(loginLocator.onDashboard);
     },
     clickOnLoginButton() {
         I.click(loginLocator.loginButton);
     },
     enterValidEmail() {
         I.fillField(loginLocator.email, loginData.email)
     },
     passwordRequired() {
         I.seeElement(loginLocator.passwordRequired);
     },
     emailRequired() {
         I.seeElement(loginLocator.passwordRequired);
     },
     enterInvalidEmail() {
         I.fillField(loginLocator.email, loginData.invalidEmail);
     },
     enterInvalidPassword() {
         I.fillField(loginLocator.password, loginData.invalidPassword);
     },
     invalidCredentials() {
         I.seeElement(loginLocator.invalidCredentials);
     },
    
 };