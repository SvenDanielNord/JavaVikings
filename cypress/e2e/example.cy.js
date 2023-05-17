// https://docs.cypress.io/api/introduction/api.html

describe('path test', () => {
  it('visits gear via generate gear button', () => {
    cy.visit('/')
    
    cy.get('.menu > div:nth-child(3) > a > button').click()
    cy.location('pathname').should('eq', '/gear')
    
    })

    it('Checks if player is saved', () => {
      
       
      cy.visit('/gear')

      cy.get('#gear[src^="http"]').should('have.length', 6)

      cy.get('input').type('Jocke')
      
      cy.get('.mb-3 >  button').click()
      
      cy.get('.menu> div:nth-child(4) > a > button').click()
      
      cy.get('button').contains('Fighter 1').click()

      cy.get('li').contains('Jocke').click()

      cy.get('img').each((item, list) => {
        console.log(list)
        cy.wrap(item).should('have.attr', 'src').should('not.eq', '')

      })

    })
       
     
  })
  
  
  // cy.get('img').should('have.attr', 'src').should('not.eq', '')

  // cy.get('').each(($li) => cy.log($li.text()))

  // cy.get('[src = attr]').should('not.eq', '')

  // cy.get('img').should('have.attr', 'src').then(($src) =>{

  // expect($src.val()).not.to.eq('') 

    
  // })
  
  // cy.get('[src]').should('not.have.value', '')

  // cy.get('img').should('have.attr', 'src').and('not.eq', '')
  // cy.get('img').should('have.attr', 'src').and('be.empty')