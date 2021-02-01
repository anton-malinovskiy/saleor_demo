context('As an admin user I would like to see various information of products in one table', () => {
    before(() => {
        cy.window().then((win) => {win.sessionStorage.clear()}) //https://github.com/cypress-io/cypress/issues/413
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://demo.saleor.io/dashboard/')
        cy.get('[data-test=submit]').click()
        cy.get('[data-testid=catalogue]').click()
        cy.get('[href="/dashboard/products?"]').click()
    })

    beforeEach(() => {
        cy.get('.MuiButton-label > .MuiSvgIcon-root').click()
    })

    it('The ABV column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjIx"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('ABV').should('be.visible')
    })

    it('The bottle size column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjE1"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Bottle Size').should('be.visible')
    })

    it('The bucket size column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjE4"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Bucket Size').should('be.visible')
    })

    it('The color column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjE0"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Color').should('be.visible')
    })

    it('The cushion size column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjIy"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Cushion Size').should('be.visible')
    })

    it('The format column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjI1"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Format').should('be.visible')
    })

    it('The volume column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjIw"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Volume').should('be.visible')
    })

    it('The flavor column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjE2"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Flavor').should('be.visible')
    })

    it('The material column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjIz"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Material').should('be.visible')
    })

    it('The medium column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjE5"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Medium').should('be.visible')
    })

    it('The publisher column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjI2"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Publisher').should('be.visible')
    })

    it('The shoe size column should display. SAL-DASH01007', () => {
        cy.get('input[name="attribute:QXR0cmlidXRlOjI0"]').click()
        cy.get('main>div>div div div div .MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary').click()
        cy.get('table[class*="MuiTable-root"]').parent().scrollTo('bottomRight')
        cy.get('.MuiTableRow-root.MuiTableRow-head').contains('Shoe size').should('be.visible')
    })

})