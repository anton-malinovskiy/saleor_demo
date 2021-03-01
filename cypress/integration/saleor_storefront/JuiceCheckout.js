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
        cy.get(':nth-child(1) > :nth-child(1) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('Adam')
        cy.get(':nth-child(1) > :nth-child(2) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('Kowalski')
        cy.get(':nth-child(2) > :nth-child(2) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('755222111')
        cy.get(':nth-child(3) > .sc-lhVmIH > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('Jagodowa')
        cy.get(':nth-child(4) > .sc-lhVmIH > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('10/15')
        cy.get(':nth-child(5) > :nth-child(1) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('Wrocław')
        cy.get(':nth-child(5) > :nth-child(2) > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('53-103')
        cy.get(':nth-child(6) > .sc-lhVmIH > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('Dolnośląskie')
        cy.get(':nth-child(7) > .sc-lhVmIH > .sc-fAjcbJ > .sc-gisBJw > .sc-kjoXOD').type('akowal@wp.pl')

        cy.get(".select-country__input")
            .click({ multiple: true })
            .get(".css-1pcexqc-container")
            .first()
            .click()
            .type(`Poland{enter}`)

        cy.get("[data-test=checkoutPageNextStepButton]").click()
        cy.get("[data-test-id=\"U2hpcHBpbmdNZXRob2Q6MjM=\"] > .sc-jbKcbu > div").click()
        cy.get("[data-test=checkoutPageNextStepButton]").click()
        cy.get("[data-test=checkoutPaymentGatewayDummyName]").click()
        cy.get(".sc-iwsKbI").click()
        cy.get("[data-test=checkoutPageNextStepButton]")
            .wait(5000)
            .click()

        cy.get("[data-test=gotoOrderDetailsButton]").should("exist")



    })
})