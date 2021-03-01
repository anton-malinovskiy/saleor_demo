
context('As an admin user I would d like to filter the products', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
    })

    it('User should get all products with the price from 2 till 10 dollars. SaL-DASH01004', () => {
        cy.get('[data-test=email]')
            .clear(cy.get('[data-test=email]'))
        cy.get('[data-test=email]')
            .type('fake@email.com')


        cy.get('[data-test=submit]')
            .click()


    })
}) 