import BasePage from './basePage';
import { DateComponent } from './dateComponent';
import { form } from '../../support/selectors/carRentFormSelectors';


class CarRentFormPage extends BasePage {
    selectCountry(country) {
        this.selectOption(form.COUNTRY_SELECT, country);
    }

    selectCity(city) {
        this.selectOption(form.CITY_SELECT, city);
    }

    enterModel(model) {
        this.fillInput(form.MODEL_INPUT, model);
    }

    alertWithTextIsVisible(alert) {
        this.getAlert(alert);
    }

    clickOnSearchButton() {
        this.clickOn(form.SEARCH_BUTTON);
    }

    carRentFormIsVisible() {
        this.assertElementVisible(form.CAR_RENT_FORM);
    }

    enterPickUpDate() {
        const currentDate = DateComponent.getTodaysDate();
        this.fillInput(form.PICK_UP_DATE_INPUT, currentDate);
    }

    enterDropOffDate() {
        const tomorrowsDate = DateComponent.getTomorrowsDate();
        this.fillInput(form.DROP_OFF_DATE_INPUT, tomorrowsDate);
    }

    alertWithTextIsNotVisible(alert) {
        cy.contains(form.ALERT, alert).should('not.exist');
    }

    carRentSearchResultsVisible(){
        this.assertElementVisible(form.SEARCH_RESULTS);
    }
}


export default new CarRentFormPage();