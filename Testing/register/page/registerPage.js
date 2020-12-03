const I = require("../../steps_file");
const { registerData } = require("../data/registerData");
const { registerLocate } = require("../locator/registerLocator");

module.exports = {
    openLoginPage() {

         I.amOnPage(registerData.url);
         I.wait(4);

    },
    clickOnRegisterHereButton() {
        I.click(registerLocate.onRegister);
    },
     enterEmail() {
        I.fillField(registerLocate.email, registerData.email);
    },
    enterPassword() {
        I.fillField(registerLocate.password, registerData.password);
    },
    reEnterPassword() {
        I.fillField(registerLocate.confirmPassword, registerData.confirmPassword);
    },
    clickOnCheckboxButton() {
        I.click(registerLocate.onCheckBox);
    },
    clickOnRegisterButton() {
        I.click(registerLocate.onSubmit);
    },
    onLoginPageDashboard() {
        I.wait(4);
        I.seeElement(registerLocate.onDashboard);
    },
};