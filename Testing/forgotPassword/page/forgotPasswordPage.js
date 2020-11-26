const I = require("../../steps_file");
const { forgotPasswordData } = require("../data/forgotPasswordData");
const { forgotPasswordLocator } = require("../locator/forgotPasswordLocator");
module.exports = {
    openLoginPage() {
        I.amOnPage(forgotPasswordLocator.url);
        I.wait(4);
    },
    clickOnForgottenPassword() {
        I.click(forgotPasswordLocator.clickOnForgottenPassword);
    },
    enterEmail() {
        I.fillField(forgotPasswordLocator.emailField , forgotPasswordData.email);
    },
    clickOnResetPassword() {
        I.doubleClick(forgotPasswordLocator.clickOnResetPassword);
    },
    OnDashboard() {
        I.wait(5);
        I.seeElement(forgotPasswordLocator.onDashboard);
    },
    resetPasswordPage() {
        I.seeElement(forgotPasswordLocator.emailField);
    },
    wrongEmail() {
        I.fillField(forgotPasswordLocator.emailField , forgotPasswordData.wrongEmail);
    },
    invalidEmail() {
        I.seeElement(forgotPasswordLocator.bannerHeading);
    },
    spacesInEmail() {
        I.fillField(forgotPasswordLocator.emailField , forgotPasswordData.spacesInEmail);
    },
    messageValidEmail() {
        I.seeElement(forgotPasswordLocator.emptyEmailField);
    },
};