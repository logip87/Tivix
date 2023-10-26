const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import carRentFormPage from '../pages/carRentFormPage';
import carRentSummaryPage from '../pages/carRentSummaryPage';
import { DateComponent } from '../pages/dateComponent';
import carRentPersonalDataFormPage from '../pages/carRentPersonalDataFormPage';

Given('I visit car rent page', () => {
  carRentFormPage.goToUrl('/');
  carRentFormPage.urlIncludes('https://qalab.pl.tivixlabs.com/');
});

Given('I can see the car rent form', () => {
  carRentFormPage.carRentFormIsVisible();
});

When('I select country {string}', (country) => {
  carRentFormPage.selectCountry(country);
});

When('I select city {string}', (city) => {
  carRentFormPage.selectCity(city);
});

When('I enter model {string}', (model) => {
  carRentFormPage.enterModel(model);
});

When('I enter pick-up date', () => {
  carRentFormPage.enterPickUpDate();
});

When('I enter drop-off date', () => {
  carRentFormPage.enterDropOffDate();
});

When('I click on search button', () => {
  carRentFormPage.clickOnSearchButton();
});

Then('I should not see alert {string}', (alert) => {
  carRentFormPage.alertWithTextIsNotVisible(alert);
});

Given('I can see the car rent search results', () => {
  carRentFormPage.carRentSearchResultsVisible();
});

// eslint-disable-next-line max-len
Then('I can see the #: {string}, Company: {string}, Model: {string}, License plate: {string}, Price: {string} and Price per day: {string} on the list', (number, company, model, licensePlate, price, pricePerDay) => {
  carRentFormPage.checkTableValues('#', number);
  carRentFormPage.checkTableValues('Company', company);
  carRentFormPage.checkTableValues('Model', model);
  carRentFormPage.checkTableValues('License plate', licensePlate);
  carRentFormPage.checkTableValues('Price', price);
  carRentFormPage.checkTableValues('Price per day', pricePerDay);
});
When('I click on rent button', () => {
  carRentFormPage.clickOnRentButton();
});

Then('I should see car rent summary page', () => {
  carRentSummaryPage.carRentSummaryPageIsVisible();
});

Then('I should see summary header {string}', (header) => {
  carRentSummaryPage.summaryHeaderIsVisible(header);
});

Then('I should see summary title {string}', (title) => {
  carRentSummaryPage.summaryTitleIsVisible(title);
});

Then('I should see summary text {string}', (text) => {
  carRentSummaryPage.summaryTextIsVisible(text);
});

Then('I should see text {string}', (text) => {
  const todaysDate = DateComponent.getTodaysDate();
  const tomorrowsDate = DateComponent.getTomorrowsDate();
  if (text.includes('currentDate')) {
    const textTodaysDate = text.replace('currentDate', todaysDate);
    carRentSummaryPage.assertTextIsVisible(textTodaysDate);
  } else if (text.includes('tomorrowsDate')) {
    const textTomorrowsDate = text.replace('tomorrowsDate', tomorrowsDate);
    carRentSummaryPage.assertTextIsVisible(textTomorrowsDate);
  } else {
    carRentSummaryPage.assertTextIsVisible(text);
  }
});

Given('I click on rent button on summary page', () => {
  carRentSummaryPage.clickOnRentButtonSummaryPage();
});

Given('I can see car rent personal data form', () => {
  carRentPersonalDataFormPage.personalDataFormPageIsVisible();
});

When('I enter name {string}', (name) => {
  carRentPersonalDataFormPage.enterName(name);
});

When('I enter last name {string}', (lastName) => {
  carRentPersonalDataFormPage.enterLastName(lastName);
});

When('I enter card number {string}', (cardNumber) => {
  carRentPersonalDataFormPage.enterCardNumber(cardNumber);
});

When('I enter email {string}', (email) => {
  carRentPersonalDataFormPage.enterEmail(email);
});

When('I click on rent button on personal data form page', () => {
  carRentSummaryPage.clickOnRentButtonSummaryPage();
});
