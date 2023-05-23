// https://docs.cypress.io/api/introduction/api.html

describe('path test', () => {
  it('visits fight via generate  fight-button', () => {
    cy.visit('/')
    
    cy.get('.menu > div:nth-child(2) > a > button').click()
    cy.location('pathname').should('eq', '/fight')
    
    })

    it('Checks if player is saved and that the saved character has picture url:s', () => {
      
       
      cy.visit('/gear')

      cy.get('#gear[src^="http"]').should('have.length', 6)

      cy.get('#name').type('Jocke')
      
      cy.get('#save > button').click()
      
      cy.get('.menu> div:nth-child(2) > a > button').click()
      
      cy.get('button').contains('Fighter 1').click()

      cy.get('li').contains('Jocke').click()

      cy.get('.smallPictures').each((item) => {
        
        cy.wrap(item).should('have.attr', 'src').should('not.eq', '').and('includes','http')

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