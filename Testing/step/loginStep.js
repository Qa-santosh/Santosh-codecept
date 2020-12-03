const loginPage = require("../page/loginPage");

Given('User goes to marketcube login page', () => {
     loginPage.openLoginPage();
});

When('User enters valid email', () => {
    loginPage.enterEmail() ;
});

When('User enters valid password', () => {
    loginPage.enterPassword();
});

When('User clicks on login button', () => {
    loginPage.clickOnLoginButton();
});

Then('User should be on the marketcube dashboard', () => {
    loginPage.onDashboard();
});
