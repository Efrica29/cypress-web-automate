class CartPage {
    elements = {
        cartLink: () => cy.get('[data-test="shopping-cart-link"]'),
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        itemName: () => cy.get('[data-test="inventory-item-name"]'),
        continueShopping: () => cy.get('[data-test="continue-shopping"]'),
        title: () => cy.get('[data-test="title"]')
    }

    addToCart(slug) {
        cy.get(`[data-test="add-to-cart-${slug}"]`).click()
    }

    removeFromCart(slug) {
        cy.get(`[data-test="remove-${slug}"]`).click()
    }

    openCart() {
        this.elements.cartLink().click()
    }
}

export default new CartPage()