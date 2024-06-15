it('Clicks a blog post link and opens the blog post page', () => {
  cy.visit('https://dev.to/')
  cy.get('.crayons-story__title a').first().click()
  cy.url().should('include', '/')
  cy.get('.crayons-article__header__meta').should('be.visible')
})

it('Clicks a blog post link and scrolls through the blog post page', () => {
  cy.visit('https://dev.to/')
  cy.get('.crayons-story__title a').first().click()
  cy.url().should('include', '/')
  cy.get('.crayons-article__header__meta').should('be.visible')
  cy.scrollTo('bottom')
  cy.wait(2000)
  cy.get('footer').should('be.visible')
})


it('Clicks a blog post link and ensures comments are included', () => {
  cy.visit('https://dev.to/')
  cy.get('.crayons-story__title a').first().click()
  cy.url().should('include', '/')
  cy.get('.crayons-article__header__meta').should('be.visible')
  cy.scrollTo('bottom')
  cy.wait(2000)
  cy.get('.comments').should('be.visible')
  cy.get('.comment').should('have.length.greaterThan', 0)
})
