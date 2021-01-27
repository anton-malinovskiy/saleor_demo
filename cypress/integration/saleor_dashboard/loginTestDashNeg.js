
context('As an admin user I would d like to log in to my dashboard account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
    })

    it('should login to Saleor Dashboard with correct credentials SAL-DASH01002', () => {

        cy.get('[data-test=submit]')
            .click()

        cy.get('[data-test=userMenu]')
            .should('be.visible')

    })
})