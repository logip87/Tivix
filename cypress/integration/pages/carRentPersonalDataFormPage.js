import BasePage from './basePage';
import { personalDataForm } from '../../support/selectors/carRentPersonalDataFormSelectors';

class CarRentPersonalDataFormPage extends BasePage {
    personalDataFormPageIsVisible() {
        this.assertElementVisible(personalDataForm.RENT_FORM);
    }

    enterName(name) {
        this.fillInput(personalDataForm.NAME_INPUT, name);
    }

    enterLastName(lastName) {
        this.fillInput(personalDataForm.LAST_NAME_INPUT, lastName);
    }

    enterCardNumber(cardNumber) {
        this.fillInput(personalDataForm.CARD_NUMBER_INPUT, cardNumber);
    }

    enterEmail(email) {
        this.fillInput(personalDataForm.EMAIL_INPUT, email);
    }
}

export default new CarRentPersonalDataFormPage();