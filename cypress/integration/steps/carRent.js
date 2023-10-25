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