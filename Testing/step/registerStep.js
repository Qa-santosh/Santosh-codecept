const loginPage = require("../page/registerPage");

Given('User goes to marketcube login page', () => {
  registerPage.openLoginPage();
});

When('User clicks on login button', () => {
  registerPage.clickOnLoginButton();
});

When('User clicks on proceed as vendor', () => {
  registerPage.openLoginPage();
});

When('User enters valid email', () => {
  registerPage.enterEmail();
});

When('User enters valid password', () => {
  registerPage.enterPassword();
});

When('User enters confirm valid password', () => {
  registerPage.reEnterPassword();
});

When('User clicks on I agree checkbox', () => {
  registerPage.clickOnCheckbox();
});

When('User clicks on register button', () => {
  registerPage.clickOnRegisterButton();
});

Then('User sucessfully register', () => {
  // Fr;
});
