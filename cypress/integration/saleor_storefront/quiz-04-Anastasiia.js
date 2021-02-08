context('As a customer i would like to log in.', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/')
    })

    it('The customer should log in successfully. quiz-04-Anastasiia', () => {
        cy.get('.slider-list li a[href*="/112/"]').click()
        cy.get('[data-test=variantPicker]').click()
        cy.get('div[data-test=attributeOption][data-test-id="M"]').click() //Specific T-shirt, size M
        cy.get('[data-test=addProductToCartButton]').click()
        cy.get('[data-test=gotoCheckoutButton]').click()
        cy.get('[data-test=continueAsGuestButton]').click()
        cy.get('[data-test=sku]').contains(55101176) //T-shirt's SKU
    })
})