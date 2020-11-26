const loginPage = require("../page/loginPage");


Given('User goes to marketcube login page', () => {
    loginPage.openLoginPage();
});

When('User enters valid email', () => {
  loginPage.enterValidEmail();
});

When('User enters valid password', () => {
  loginPage.enterValidPassword();
});

When('User clicks on login button', () => {
  loginPage.clickOnLoginButton();
});

Then('User should be on the marketcube dashboard', () => {
  loginPage.onDashboard();
});

When('User clicks on login', () => {
  loginPage.clickOnLoginButton();
});

When('User enters valid email', () => {
    loginPage.enterValidEmail();
});

Then('User should see password is required message', () => {
  loginPage.passwordRequired();
});

Then('User should get email field required message', () => {
  loginPage.emailRequired();
});

When('User enters invalid email', () => {
  loginPage.enterInvalidEmail();
});

When('User enters invalid password', () => {
  loginPage.enterInvalidPassword();
});

Then('User should get Invalid credentials provided message', () => {
  loginPage.invalidCredentials();
});
