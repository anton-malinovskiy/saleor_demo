
context('As an admin user I would d like to log in to my account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io')
    })

    it('should login to Saleor Store Front', () => {

        cy.get('[data-test=desktopMenuLoginOverlayLink]')
            .click()

        cy.get('[data-test=submit]')
            .click()

        cy.get('[data-test=alert]')
            .should('be.visible')

    })
})