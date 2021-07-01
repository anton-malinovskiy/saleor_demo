
context('As an admin user I would d like to log in to my dashboard account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
    })

    it('verify if user can filter the products SAL-DASH01004', () => {
        cy.get('[data-test=email]')
            .clear(cy.get('[data-test=email]'))
        cy.get('[data-test=email]')
            .type('fake@email.com')


        cy.get('[data-test=submit]')
            .click()


    })
})