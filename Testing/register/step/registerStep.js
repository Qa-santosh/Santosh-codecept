const registerPage = require("../page/registerPage");

Given('User goes to marketcube login page', () => {
   registerPage.openLoginPage();
});

When('User clicks on register here', () => {
    registerPage.clickOnRegisterHereButton();
});

When('User enters email', () => {
    registerPage.enterEmail();
});

When('User enters password', () => {
    registerPage.enterPassword();
});

When('User reEnter password', () => {
    registerPage.reEnterPassword();
});
When('User clicks on I agree checkbox', () => {
    registerPage.clickOnCheckboxButton();
    
});
   
When('User clicks on register button', () => {
    registerPage.clickOnRegisterButton();
    
});
   
Then('User will be on login page', () => {
    registerPage.onLoginPageDashboard();
});