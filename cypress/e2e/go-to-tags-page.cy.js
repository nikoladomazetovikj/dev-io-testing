it('Goes to the Tags page', () => {
  cy.visit('https://dev.to/tags')
  cy.url().should('include', '/tags')
  cy.contains('Tags').should('be.visible')
})

it('Follows a tag and checks for the login modal', () => {
  cy.visit('https://dev.to/tags')
  cy.get('button').contains('Follow').first().click()
  cy.contains('Log in to continue').should('be.visible')
  cy.get('.crayons-btn').contains('Log in')
  cy.get('.crayons-btn').contains('Create account')
})


it('Searches for a specific tag and verifies the results', () => {
  cy.visit('https://dev.to/tags')
  cy.get('#nav-search').type('php{enter}')
  cy.url().should('include', '/tags')
  cy.contains('Search results for php').should('be.visible')
  cy.contains('#php').should('be.visible')
  cy.get('.crayons-card').should('have.length.greaterThan', 0)
})


it('Clicks the Log in link and navigates to the login page', () => {
  cy.visit('https://dev.to/tags')
  cy.get('button').contains('Follow').first().click()
  cy.get('.crayons-modal__box').should('not.have.class', 'hidden')
  cy.get('.crayons-modal__box').find('a.crayons-btn[href="/enter"]').click()
  cy.url().should('include', '/enter')
  cy.contains('Join the DEV Community').should('be.visible')
  cy.get('input[name="user[email]"]').should('be.visible')
  cy.get('input[name="user[password]"]').should('be.visible')
})

it('Clicks the Create account in link and navigates to the register page', () => {
  cy.visit('https://dev.to/tags')
  cy.get('button').contains('Follow').first().click()
  cy.get('.crayons-modal__box').should('not.have.class', 'hidden')
  cy.get('.crayons-modal__box').find('a.crayons-btn[href="/enter"]').click()
  cy.url().should('include', '/enter?state=new-user')
  cy.contains('Join the DEV Community').should('be.visible')
  cy.get('input[name="user[email]"]').should('be.visible')
  cy.get('input[name="user[password]"]').should('be.visible')
})
