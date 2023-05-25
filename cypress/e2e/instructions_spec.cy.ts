/// <reference types="Cypress" />

describe('instructions flow', () => {
  beforeEach('intercept all endpoints', () => {
    cy.interceptAll();
    cy.visit('http://localhost:3000');
  });

  it('should have instructions on the challenge page', () => {
    cy.get('button').first().click();

    cy.get('button').contains('New Challenge').click();

    cy.get('.info-icon').click();

    cy.get('.instructions').contains('h2', 'Let\'s Summit this Challenge!')
      .get('.instructions').contains('p', 'The best way to retain a language is to practice your words, and a picture is worth a thousand! We\'re giving you a picture, a verb, and some grammar points to get you started.')
      .get('.instructions').contains('p', 'Challenge your knowledge and flex those creative muscles by writing sentences using the provided verb in a way that conforms to the rules of the grammar point. The image is there to help you break through any writer\'s block you may have. Feel free to write about it, or ignore it completely! The choice is yours.')
      .get('.instructions').contains('p', 'Once you\'re done, click "Submit" and brace yourself for immediate feedback!')
  });

  it('should let you close the instructions modal by clicking the X', () => {
    cy.get('button').first().click();

    cy.get('button').contains('New Challenge').click();

    cy.get('.info-icon').click();

    cy.get('.close-modal-button').click();

    cy.get('.instructions').should('not.exist');
  });
});