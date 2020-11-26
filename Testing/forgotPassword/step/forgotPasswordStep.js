const loginLocator = require("../../login/locator/loginLocator");
const forgotPassword = require("../page/forgotPasswordPage");


Given('User goes to marketcube login page', () => {
    forgotPassword.openLoginPage();
});

When('User clicks on forgotten password', () => {
    forgotPassword.clickOnForgottenPassword();
});

When('User enters email', () => {
    forgotPassword.enterEmail();
});

When('User clicks on Reset Password', () => {
    forgotPassword.clickOnResetPassword();
});

Then('User should be on the marketcube LoginPage', () => {
    forgotPassword.OnDashboard();
});

Then('User should see Reset password page', () => {
    forgotPassword.resetPasswordPage();
});

When('User enters Wrong email', () => {
    forgotPassword.wrongEmail();
});

Then('User should see Invalid email provided', () => {
    forgotPassword.invalidEmail();
});

When('User enters valid email with spaces inbetween the email', () => {
    forgotPassword.spacesInEmail();
});

Then('User should see please enter a valid email', () => {
    forgotPassword.messageValidEmail();
});
