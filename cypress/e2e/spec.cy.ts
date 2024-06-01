describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5000/')

    cy.get('h1').should('contain', 'Discover Your Next Adventure')

    cy.get('a').should('contain', 'Explore Popular Treks')
  })
})
