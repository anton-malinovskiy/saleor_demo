
context('Check if there are product attributes listed', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/')
    })

    it('should enter a homePage', () => {

        cy.get(':nth-child(1) > .main-menu__nav-dropdown > :nth-child(1)')
            .click()

    cy.visit('https://demo.saleor.io/category/paints/20/')

        cy.get('[href="/product/hyperspace-turquoise-paint/65/"] > .sc-emmjRN > [data-test=productTile]')
            .click()
        cy.get('.khKpqh')
            .click()
            .should('contain.text')
    })
})
