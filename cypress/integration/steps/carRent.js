const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import carRentFormPage from '../pages/carRentFormPage';

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