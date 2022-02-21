describe('Visit to login', function () {

    let email = 'acknoledger@dispostable.com';
    let password = 'Sunil123$';

    it('Check to login', function () {
        cy.viewport(1326, 1326)
        cy.visit('https://app.acknoledger.com/login')

        cy.url()
            .should('include', '/login')

        cy.get('input[name="email"]').type(email)
        cy.get('input[name="email"]').should('have.value', email)
        cy.get('input[name="password"]').type(password)
        cy.get('.show-password').click()
        cy.wait(800)
        cy.get('input[name="password"]').should('have.value', password)
        // .should('have.value','acknoledger@dispostable.com')
        // cy.wait(15000)

        cy.get('button[type="submit"]').click()

        cy.url()
            .should('include', '/dashboard')
    })
})