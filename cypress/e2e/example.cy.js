// https://docs.cypress.io/api/introduction/api.html

describe('Easy test', () => {
  it('visits the root url and /gear then goes back', () => {
    cy.visit('/')
    cy.get('.menu> div:nth-child(2) > a > button').click()
    cy.location('pathname').should('eq', '/gear')
    // cy.get('.menu> div:nth-child(1) > a > button').click()
    cy.get('input').type('Jocke')
    
    cy.get('.mb-3 >  button').click()

    cy.get('.menu> div:nth-child(3) > a > button').click()
    cy.get('.p1 > button').click()
    cy.get('li').contains('Jocke')

  })
})
