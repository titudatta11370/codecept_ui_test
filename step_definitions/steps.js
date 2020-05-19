const { I } = inject();
const faker = require('faker');

// Add in your custom step files

Given(/^I am in login page$/, function () {
    I.amOnPage('/');
});
When(/^I enter wrong login information$/, function () {
    I.fillField('#UserName','miles@davis.com');
    I.click('Continue')
    I.see('Password')
    I.fillField('#Password','fail');
    I.click('Log In')
});
Then(/^I should get an error message$/, function () {
    I.see('The username or password you entered is incorrect')
});
When(/^I enter valid login info$/, function () {
    I.fillField('#UserName','nisha_ann_mathew@yahoo.com');
    I.click('Continue')
    I.see('Password')
    I.fillField('#Password','Admin123$');
    I.click('Log In')
});
Then(/^I should be directed to homepage$/, function () {
    I.see('DASHBOARD', '.nav-item')
});

Then('I click on {string}', (text) => {
    I.click(text)
});
When(/^I should be in create third party page$/, function () {
    I.see('Creating new Third-Party')
});
When(/^I choose first option from the list of client$/, function () {
    I.selectOption('#ClientAccountId', 'Prod Test - NewDDIQ')
});

Then('I choose {string} option', (text) => {
    I.click(text)
});

When(/^I fill out the company third party form$/, function () {
    I.fillField('//*[@id="ThirdPartyFields[0].Value"]', faker.name.firstName())
    I.click('Continue')
    I.see('RISK FACTORS')
    I.click('Continue')
    I.click('#product-type-20')
    I.click('Continue')
    I.click('Continue')
    I.click('Submit')
    I.see('Summary')
});
When(/^I search a thirdparty by relationship "([^"]*)"$/, function (status) {
    I.waitForClickable('.ui-widget-content')
    I.selectOption("Relationship Status", status)
});
