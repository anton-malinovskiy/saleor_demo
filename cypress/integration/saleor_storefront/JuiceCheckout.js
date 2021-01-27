context('As an unregistered user I would like to add any juice to cart and go to checkout', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/')
    })

    it('Juice should be placed successfully in cart. SAL-STORE01002', () => {
        cy.get(':nth-child(2) > .main-menu__nav-dropdown').click()
        cy.get('[href="/product/apple-juice/72/"] > .sc-emmjRN > [data-test=productTile]').click()
        cy.get('[data-test=variantPicker]').click()
        cy.get(':nth-child(2) > [data-test=attributeOption]').click()
        cy.get('[data-test=addToCartQuantity]').click()
        cy.get('[data-test=addProductToCartButton]').click()
        cy.get('[data-test=gotoCheckoutButton] > span').click()
        cy.get('[data-test=continueAsGuestButton] > span').click()
        cy.get('.sc-ckVGcZ > div > span').click()
        cy.get(':nth-child(1) > :nth-child(1) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').click()
        cy.get('input[type=text]').type('JOHN');










        // cy.get('.slider-list li a[href*="/112/"]').click()
        // cy.get('[data-test=variantPicker]').click()
        // cy.get('div[data-test=attributeOption][data-test-id="M"]').click() //Specific T-shirt, size M
        // cy.get('[data-test=addProductToCartButton]').click()
        // cy.get('[data-test=gotoCheckoutButton]').click()
        // cy.get('[data-test=continueAsGuestButton]').click()
        // cy.get('[data-test=sku]').contains(55101176) //T-shirt's SKU
    })
})