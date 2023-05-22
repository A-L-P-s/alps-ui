/// <reference types="Cypress" />

describe('template spec', () => {
  beforeEach('visit and intercept home', () => {
    cy.interceptUsers();
    cy.interceptDashboard_1();
    cy.interceptDashboard_55();
    cy.interceptPastFeedback_1_1();
    cy.interceptPastFeedback_55_3();
    cy.interceptPrompt_1();
    cy.interceptPrompt_55();
    cy.interceptPostSubmission_1();
    cy.interceptPostSubmission_55();
    cy.interceptSubmissionFeedback_1();
    cy.interceptSubmissionFeedback_55();
  });

  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.get('button').eq(0).click();

    cy.get('[href="/55/feedback/3"]').click();

    cy.get('button').click();

    cy.get('button').click();

    cy.get('h1').click();

    cy.get('button').eq(1).click();

    cy.get('[href="/1/feedback/1"]').click();

    cy.get('button').click();

    cy.get('button').click();

    cy.get('#sent1').type('El gato escuchaba el agua correr en la bañera.')

    cy.get('#sent2').type('El gato escuchará el agua correr en la bañera.')

    cy.get('button').click();
  });
});