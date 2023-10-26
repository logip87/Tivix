import BasePage from './basePage';
import { summary } from '../../support/selectors/carRentSummarySelectors';


class CarRentSummaryPage extends BasePage {
    carRentSummaryPageIsVisible() {
        this.assertElementVisible(summary.SUMMARY_CONTAINER);
    }

    summaryHeaderIsVisible(header){
        this.getCardHeader().should('contain', header);
    }

    summaryTitleIsVisible(title){
        this.getCardTitle().should('contain', title);
    }

    summaryTextIsVisible(text){
       this.getCardText().should('contain', text); 
    }

    clickOnRentButtonSummaryPage(){
        this.clickOn(summary.RENT_BUTTON);
    }
}

export default new CarRentSummaryPage();