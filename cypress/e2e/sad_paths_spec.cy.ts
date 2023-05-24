describe('sad path tests', () => {
  beforeEach(() => {
    cy.interceptAll();
    cy.visit('http://localhost:3000');
  });

  it('should show an error if the user navigates to their dashboard with a bad request and allow them to return Home', () => {
    cy.intercept404Dashboard_1();

    cy.get('button').first().click();

    cy.get('h3').contains('Error: 404: Not Found')
      .get('h4').contains('Here\'s a handy button to return Home!')
      .get('button').contains('Home').click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('.user').should('have.length', 2);
  });

  it('should show an error if the user selects a past feedback with a bad request and allow them to return Home', () => {
    cy.intercept404PastFeedback_1_1();

    cy.get('button').first().click();

    cy.get('.challenge-card').click();

    cy.get('h3').contains('Error: 404: Not Found')
      .get('h4').contains('Here\'s a handy button to return Home!')
      .get('button').contains('Home').click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('.user').should('have.length', 2);
  });
});