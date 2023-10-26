/* eslint-disable max-len */
import { summary } from '../../support/selectors/carRentSummarySelectors';
export default class BasePage {
    goToUrl(url) {
        cy.visit(url);
    }

    urlIncludes(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }

    selectOption(locator, option) {
        cy.get(locator).should('be.visible').select(option);
    }

    fillInput(locator, text) {
        cy.get(locator).should('be.visible').type(text);
    }


    clickOn(locator) {
        cy.get(locator).should('be.visible').click();
    }


    clickOnFirst(locator) {
        cy.get(locator).eq(0).should('be.visible').click();
    }

    assertElementVisible(locator) {
        cy.get(locator).should('be.visible');
    }

    checkTableValues(header, data) {
        const headerToSearch = header;
        const textToMatch = data;

        if (headerToSearch === '#') {
            cy.get('#search-results thead th').contains(headerToSearch).invoke('index').then((headerIndex) => {
                cy.get(`#search-results tbody tr th:nth-child(${headerIndex + 1})`).then(($cell) => {
                    if (expect($cell.text()).to.contain(textToMatch)) {
                        cy.log(`${headerToSearch} contains text ${textToMatch}`);
                    }
                });
            });
        } else {
            cy.get('#search-results thead th').contains(headerToSearch).invoke('index').then((headerIndex) => {
                cy.get(`#search-results tbody tr td:nth-child(${headerIndex + 1})`).then(($cell) => {
                    if (expect($cell.text()).to.contain(textToMatch)) {
                        cy.log(`${headerToSearch} contains text ${textToMatch}`);
                    }
                });
            });
        }
    }
    getCardHeader() {
        return cy.get(summary.CARD_HEADER).should('be.visible');
    }

    getCardTitle() {
        return cy.get(summary.CARD_TITLE).should('be.visible');
    }

    getCardText() {
        return cy.get(summary.CARD_TEXT).should('be.visible');
    }

    assertTextIsVisible(text) {
        cy.contains(text).should('be.visible');
    }
}
