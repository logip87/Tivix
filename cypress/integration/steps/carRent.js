const { Given } = require('@badeball/cypress-cucumber-preprocessor');
import carRentFormPage from '../pages/carRentFormPage';

Given('I visit car rent page', () => {
  carRentFormPage.goToUrl('/');
  carRentFormPage.urlIncludes('https://qalab.pl.tivixlabs.com/');
});
