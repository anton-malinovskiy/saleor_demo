
context('As registered user I would d like to log in to my Saleor account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/')
    })

    it('should login to Saleor Storefront with correct credentials', () => {

        cy.get('[data-test=desktopMenuLoginOverlayLink]')
            .click()

        cy.get('[data-test=submit]')
            .click()
        cy.get('[data-test=alert]')
            .should('be.visible')

    })
})