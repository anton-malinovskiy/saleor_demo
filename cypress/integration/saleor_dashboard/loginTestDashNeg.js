
context('As an admin user I would d like to log in to my dashboard account', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
    })

    it('should not login to Saleor Dashboard with clear inputs SAL-DASH01002', () => {

        cy.get('[data-test="email"]').clear();
        cy.get('[data-test="password"]').clear();
        cy.get('[data-test=submit]')
            .click()
        cy.get('[data-test=loginErrorMessage]').should('be.visible')
    })

    it('should not login to Saleor Dashboard with wrong e-mail SAL-DASH01002', () => {

        cy.get('[data-test=email]').clear().type('testowy@test.test')
        cy.get('[data-test=submit]')
            .click()
        cy.get('[data-test=loginErrorMessage]').should('be.visible')
    })

    it('should not login to Saleor Dashboard with wrong e-mail type string SAL-DASH01002', () => {

        cy.get('[data-test=email]').clear().type('asdasdasd')
        cy.get('[data-test=submit]')
            .click()
        cy.get('[data-test=loginErrorMessage]').should('be.visible')
    })

    it('should not login to Saleor Dashboard with proper e-mail and no password SAL-DASH01002', () => {

        cy.get('[data-test=email]')
        cy.get('[data-test="password"]').clear();
        cy.get('[data-test=submit]')
            .click()
        cy.get('[data-test=loginErrorMessage]').should('be.visible')
    })

    it('should login to Saleor Dashboard with proper e-mail and proper password password SAL-DASH01002', () => {

        cy.get('[data-test=email]')
        cy.get('[data-test="password"]')
        cy.get('[data-test=submit]')
            .click()
    })

})