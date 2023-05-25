/// <reference types="Cypress" />

describe('sad path flows', () => {
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

  it('should show an error when the user clicks "New Challenge" with a bad network request and allow them to return Home', () => {
    cy.intercept404Prompt_1();

    cy.get('button').first().click();

    cy.get('button').contains('New Challenge').click();

    cy.get('h3').contains('Error: 404: Not Found')
      .get('h4').contains('Here\'s a handy button to return Home!')
      .get('button').contains('Home').click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('.user').should('have.length', 2);
  });

  it('should show an error when the user clicks "Submit" with a bad network request and allow them to return Home', () => {
    cy.intercept400PostSubmission_1();

    cy.get('button').first().click();

    cy.get('button').contains('New Challenge').click();

    cy.get('textarea').first().type('Example sentence 1');
    
    cy.get('textarea').last().type('Example sentence 2');

    cy.get('button').contains('Submit').click();

    cy.get('h3').contains('Error: 400: Bad Request')
      .get('h4').contains('Here\'s a handy button to return Home!')
      .get('button').contains('Home').click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('.user').should('have.length', 2);
  });

  it('should show an error with a successful submission but a poor feedback request and allow them to return Home', () => {
    cy.intercept500SubmissionFeedback_2();

    cy.get('button').first().click();

    cy.get('button').contains('New Challenge').click();

    cy.get('textarea').first().type('Example sentence 1');
    
    cy.get('textarea').last().type('Example sentence 2');

    cy.get('button').contains('Submit').click();

    cy.get('h3').contains('Error: 500: Internal Server Error')
      .get('h4').contains('Here\'s a handy button to return Home!')
      .get('button').contains('Home').click()

    cy.url().should('eq', 'http://localhost:3000/')
      .get('.user').should('have.length', 2);
  });
});