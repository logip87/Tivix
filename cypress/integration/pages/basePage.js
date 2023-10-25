export default class BasePage {
    goToUrl(url) {
        cy.visit(url);
    }

    urlIncludes(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}