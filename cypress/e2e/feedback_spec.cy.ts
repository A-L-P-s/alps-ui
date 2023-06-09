/// <reference types="Cypress" />

describe ('Feedback flow', () => { 
  beforeEach('intercept all endpoints', () => {
    cy.interceptAll();
    cy.visit('http://localhost:3000')
    .wait('@getUsers');
  });

  it('should show the user dashboard once a user is selected', () => {
    cy.get(':nth-child(1) > a > button')
      .first()
      .click();
 
    cy.get('.challenge-card-container').should('be.visible');
  });

  it ('should render past feedback with all elements', () => {
    cy.get(':nth-child(1) > a > button')
      .first()
      .click();
 
    cy.get('.challenge-card-container').should('be.visible') ;
    cy.get('.challenge-card')
      .first()
      .click();
 
    cy.get('.feedback-container') 
      .should('contain', 'Your challenge from 05/18/2023')
      .and('contain', 'Sentence #1')
      .and('contain', 'condicional ✴ conditional tense')
      .and('contain', 'Your response')
      .and('contain', 'Si la rana pudiera hablar, contaría historias fascinantes.')
      .and('contain', 'Corrected Sentence')
      .and('contain', 'Si la rana pudiera hablar, contaría historias fascinantes.')
      .and('contain', 'Feedback')
      .and('contain', 'Si la rana pudiera hablar, contaría historias fascinantes.')

      .and('contain', 'Sentence #2')
      .and('contain', 'pretérito ✴ preterite tense')
      .and('contain', 'Your response')
      .and('contain', 'La rana habló con los otros animales en el estanque.')
      .and('contain', 'Corrected Sentence')
      .and('contain', 'La rana habló con los otros animales en el estanque.')
      .and('contain', 'Feedback')
      .and('contain', 'The sentence is correct! Nice work!');
    })

    it('should return to dashboard view when user clicks back button from feedback view', () => {
        cy.visit('http://localhost:3000/1/feedback/1');
     
        cy.get('button').click();
        cy.url().should('include', '/dashboard');
        cy.get('.challenge-card-container').should('be.visible');
      })
})