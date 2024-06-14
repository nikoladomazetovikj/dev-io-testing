it('Navigates to the Relevant tab and verifies its content', () => {
  cy.visit('https://dev.to/')
  cy.contains('Relevant').click()
  cy.url().should('include', '/')

})

it('Navigates to the Latest tab and verifies its content', () => {
  cy.visit('https://dev.to/latest')
  cy.contains('Latest').click()
  cy.url().should('include', 'latest')

})

it('Navigates to the Top tab and verifies its content', () => {
  cy.visit('https://dev.to/latest')
  cy.contains('Top').click()
  cy.url().should('include', 'top')

})


