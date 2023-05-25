describe ('Feedback flow', () => {
  beforeEach('intercept all endpoints', () => {
    cy.visit('http://localhost:3000');
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
    cy.get('[href="/1/feedback/100"] > .challenge-card > .card-content')
      .first()
      .click();
 
    cy.get('.feedback-container') 
      .should('contain', 'Your challenge from 05/23/2023')
      .and('contain', 'Sentence #1')
      .and('contain', 'presente ✴ simple present tense')
      .and('contain', 'Your response')
      .and('contain', 'Él habla español y francés con fluidez.')
      .and('contain', 'Corrected Sentence')
      .and('contain', 'Él habla español y francés con fluidez.')
      .and('contain', 'Feedback')
      .and('contain', 'This sentence is correct. Nice work rockstar!');
    })

    it('should return to dashboard view when user clicks back button from feedback view', () => {
        cy.visit('http://localhost:3000/1/feedback/100');
     
        cy.get('button').click();
        cy.url().should('include', '/dashboard');
        cy.get('.challenge-card-container').should('be.visible');
      })
})