it('Searches for "Laravel" and verifies the search results', () => {
  cy.visit('https://dev.to/')
  cy.get('#search-input').type('Laravel{enter}')
  cy.wait(2000)
  cy.url().should('include', '/search?utf8=✓&q=laravel')
  cy.contains('Search results for Laravel').should('be.visible')
})
