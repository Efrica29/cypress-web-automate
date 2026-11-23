import CartPages from "../pages/CartPages"

describe('Keranjang Belanja', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.valid.username, users.valid.password)
        })
        cy.url().should('include', '/inventory.html')
    })

    it('TC06 - Tambah 1 produk ke keranjang', () => {
        CartPages.addToCart('sauce-labs-backpack')
        CartPages.openCart()

        //cek isi keranjang
        CartPages.elements.title().should('have.text', 'Your Cart')
        CartPages.elements.itemName().should('contain', 'Sauce Labs Backpack')

        //back to homepage
        CartPages.elements.continueShopping().click()
        CartPages.elements.itemName().should('contain', 'Sauce Labs Backpack')

        //remove dari homepage
        CartPages.removeFromCart('sauce-labs-backpack')

    })

    it('TC07 - Tambah 2 produk ke keranjang', () => {
        CartPages.addToCart('sauce-labs-bike-light')
        CartPages.addToCart('sauce-labs-bolt-t-shirt')
        CartPages.openCart()

        //cek isi keranjang
        CartPages.elements.title().should('have.text', 'Your Cart')
        CartPages.elements.itemName().should('contain', 'Sauce Labs Bike Light')
        CartPages.elements.itemName().should('contain', 'Sauce Labs Bolt T-Shirt')

        //back to homepage
        CartPages.elements.continueShopping().click()
        CartPages.elements.itemName().should('contain', 'Sauce Labs Backpack')

        //remove dari homepage
        CartPages.removeFromCart('sauce-labs-bike-light')
        CartPages.removeFromCart('sauce-labs-bolt-t-shirt')

    })

    it('TC08 - Remove produk dari keranjang', () => {
        CartPages.addToCart('sauce-labs-fleece-jacket')
        CartPages.addToCart('sauce-labs-onesie')
        CartPages.openCart()

        //cek isi keranjang
        CartPages.elements.title().should('have.text', 'Your Cart')
        CartPages.elements.itemName().should('contain', 'Sauce Labs Fleece Jacket')
        CartPages.elements.itemName().should('contain', 'Sauce Labs Onesie')

        //Remove dari Keranjang
        CartPages.removeFromCart('sauce-labs-fleece-jacket')
        CartPages.removeFromCart('sauce-labs-onesie')

       //back to homepage
        CartPages.elements.continueShopping().click()
        CartPages.elements.itemName().should('contain', 'Sauce Labs Backpack')
        
    })
})