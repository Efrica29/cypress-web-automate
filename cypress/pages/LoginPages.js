class LoginPage {
    elements = {
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    }

    visit() {
        cy.visit('/')
    }

    login(username, password) {
        if (username) this.elements.username().type(username)
        if (password) this.elements.password().type(password)
        this.elements.loginButton().click()
    }
}

export default new LoginPage()