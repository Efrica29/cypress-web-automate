class CheckoutPage {
    elements = {
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
        completeHeader: () => cy.get('[data-test="complete-header"]'),
        generatePdfButton: () => cy.get('[data-test="generatePdfButton"]'),
        backHomeButton: () => cy.get('[data-test="backHomeButton"]')
    }

    startCheckout() {
        this.elements.checkoutButton().click()
    }

    fillInfo(firstName, lastName, postalCode) {
        if (firstName) this.elements.firstName().type(firstName)
        if (lastName) this.elements.lastName().type(lastName)
        if (postalCode) this.elements.postalCode().type(postalCode)
        this.elements.continueButton().click()
    }

    finish() {
        this.elements.finishButton().click()
    }
}

export default new CheckoutPage()