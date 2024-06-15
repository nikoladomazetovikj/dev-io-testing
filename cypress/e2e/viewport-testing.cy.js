it('Checks the page resolution on a desktop device', () => {
  cy.viewport(1280, 720)
  cy.visit('https://dev.to/')
  cy.contains('Relevant').should('be.visible')
  cy.contains('Latest').should('be.visible')
  cy.contains('Top').should('be.visible')
})

it('Checks the page resolution on a tablet device', () => {
  cy.viewport(768, 1024)
  cy.visit('https://dev.to/')
  cy.contains('Relevant').should('be.visible')
  cy.contains('Latest').should('be.visible')
  cy.contains('Top').should('be.visible')
})


it('Checks the page resolution on a mobile device', () => {
  cy.viewport(375, 667)
  cy.visit('https://dev.to/')
  cy.contains('Relevant').should('be.visible')
  cy.contains('Latest').should('be.visible')
  cy.contains('Top').should('be.visible')
})

