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

})