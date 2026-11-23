import CheckoutPage from "../pages/CheckoutPage"

describe('Checkout', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
    cy.get('@users').then((users) => {
        cy.login(users.valid.username, users.valid.password)
    })
     cy.url().should('include', '/inventory.html')

        // tambahkan produk ke keranjang
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce Labs Backpack')
    })

    it('TC09 - Checkout Berhasil', function () {
        cy.task('clearDownloads', 'cypress/downloads')

        CheckoutPage.startCheckout()
        CheckoutPage.fillInfo(
            this.users.checkoutInfo.firstName,
            this.users.checkoutInfo.lastName,
            this.users.checkoutInfo.postalCode
        )
        CheckoutPage.finish()

        CheckoutPage.elements.completeHeader()
            .should('contain', 'Thank you for your order')

        //generate pdf order
        cy.get('[data-test="generate-pdf-order"]').click()
        cy.task('waitForDownload', 'cypress/downloads')
            .should('match', /^swag-labs-order-.*\.pdf$/)

        //back home
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('include', '/inventory.html')
    })

    it('TC10 - Checkout saat First Name Kosong', function () {
        CheckoutPage.startCheckout()
        CheckoutPage.fillInfo(
            '',
            this.users.checkoutInfo.lastName,
            this.users.checkoutInfo.postalCode
        )
        CheckoutPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Error: First Name is required')
    })

    it('TC11 - Checkout saat Last Name Kosong', function () {
        CheckoutPage.startCheckout()
        CheckoutPage.fillInfo(
            this.users.checkoutInfo.firstName,
            '',
            this.users.checkoutInfo.postalCode
        )
        CheckoutPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Error: Last Name is required')

    })

    it('TC12 - Checkout saat Zip/Postal Code Kosong', function () {
        CheckoutPage.startCheckout()
        CheckoutPage.fillInfo(
            this.users.checkoutInfo.firstName,
            this.users.checkoutInfo.lastName,
            ''
        )
        CheckoutPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Error: Postal Code is required')

    })
})