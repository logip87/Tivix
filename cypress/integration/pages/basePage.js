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
}