
context('As an admin user I would d like to log in to my dashboard account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
    })

    it('should not login to Saleor Dashboard with incorrect credentials SAL-DASH01006', () => {
        cy.get('[data-test=email]')
            .clear(cy.get('[data-test=email]'))
        cy.get('[data-test=email]')
            .type('fake@email.com')


        cy.get('[data-test=submit]')
            .click()


    })
})