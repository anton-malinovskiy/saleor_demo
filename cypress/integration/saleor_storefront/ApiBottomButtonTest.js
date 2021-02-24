context('As an user I would like to open bottom GraphQL API tab', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io')
    })

    it('should open a HomePage', () => {

        cy.get(':nth-child(2) > .footer-nav__section-content > :nth-child(2) > a')
            .click()
            .should('exist https://demo.saleor.io/graphql/')

    })
})