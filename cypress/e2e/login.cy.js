import LoginPages from "../pages/LoginPages"

describe('Fitur Login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
    LoginPages.visit()
  })
  it('TC01 - berhasil login dengan kredensial valid', function () {
    LoginPages.login(this.users.valid.username, this.users.valid.password)

    /*cy.get('[data-test="username"]').type(this.users.valid.username)
    cy.get('[data-test="password"]').type(this.users.valid.password)*/
    //cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('have.text', 'Products')
  })

  it('TC02 - error saat password salah', function () {
    LoginPages.login(this.users.wrongPassword.username, this.users.wrongPassword.password)

    /*cy.get('[data-test="username"]').type(this.users.wrongPassword.username)
    cy.get('[data-test="password"]').type(this.users.wrongPassword.password)*/
    //cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('TC03 - error saat username kosong', function () {
    LoginPages.login('', this.users.valid.password)
    //cy.get('[data-test="username"]').type('') - function tidak dipanggil karena username nya kosong
    //cy.get('[data-test="password"]').type(this.users.valid.password)
    //cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  it('TC04 - error saat password kosong', function () {
    LoginPages.login(this.users.valid.username, '')
    //cy.get('[data-test="username"]').type(this.users.valid.username)
    //cy.get('[data-test= "password"]').type('') - function tidak dipanggil karena password nya kosong
    //cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')
  })

  it('TC05 - error saat user terkunci', function () {
    LoginPages.login(this.users.locked.username, this.users.locked.password)
   // cy.get('[data-test="username"]').type(this.users.locked.username)
    //cy.get('[data-test="password"]').type(this.users.locked.password)
    //cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })

})