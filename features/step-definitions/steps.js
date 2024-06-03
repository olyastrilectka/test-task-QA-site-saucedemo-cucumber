const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User clicks "Login" button', async () => {
    await loginPage.clickLoginButton();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    await expect(await loginPage.getErrorMessage()).toContain("Epic sadface: Username is required");
});



