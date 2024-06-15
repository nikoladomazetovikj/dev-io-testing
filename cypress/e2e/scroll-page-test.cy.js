it('Scrolls through the main page ', () => {
  cy.visit('https://dev.to/')
  cy.scrollTo('bottom')
  cy.get('.single-article').last().should('be.visible')
  cy.scrollTo('top')
  cy.get('.sidebar-container').should('be.visible')
})
