/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    interceptUsers(): Chainable<Subject>;
    interceptDashboard_1(): Chainable<Subject>;
    interceptDashboard_55(): Chainable<Subject>;
    interceptPastFeedback_1_1(): Chainable<Subject>;
    interceptPastFeedback_55_3(): Chainable<Subject>;
    interceptPrompt_1(): Chainable<Subject>;
    interceptPrompt_55(): Chainable<Subject>;
    interceptPostSubmission_1(): Chainable<Subject>;
    interceptPostSubmission_55(): Chainable<Subject>;
    interceptSubmissionFeedback_1(): Chainable<Subject>;
    interceptSubmissionFeedback_55(): Chainable<Subject>;
    interceptAll(): Chainable<Subject>;
    intercept404Users(): Chainable<Subject>;
    intercept404Dashboard_1(): Chainable<Subject>;
    intercept404PastFeedback_1_1(): Chainable<Subject>;
    intercept404Prompt_1(): Chainable<Subject>;
    intercept400PostSubmission_1(): Chainable<Subject>;
    intercept500SubmissionFeedback_2(): Chainable<Subject>;
  }
}

Cypress.Commands.add('interceptUsers', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users', {
    statusCode: 200,
    fixture: 'mock_users',
  })
  .as('getUsers');
});

Cypress.Commands.add('interceptDashboard_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1', {
    statusCode: 200,
    fixture: 'mock_dashboard_1',
  })
  .as('getDashboard_1');
});

Cypress.Commands.add('interceptDashboard_55', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/55', {
    statusCode: 200,
    fixture: 'mock_dashboard_55',
  })
  .as('getDashboard_55');
});

Cypress.Commands.add('interceptPastFeedback_1_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/1', {
    statusCode: 200,
    fixture: 'mock_past_feedback_1_1',
  })
  .as('getPastFeedback_1_1');
});

Cypress.Commands.add('interceptPastFeedback_55_3', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/55/challenges/3', {
    statusCode: 200,
    fixture: 'mock_past_feedback_55_3',
  })
  .as('getPastFeedback_55_3');
});

Cypress.Commands.add('interceptPrompt_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/new', {
    statusCode: 200,
    fixture: 'mock_prompt_1',
  })
  .as('getPrompt_1');
});

Cypress.Commands.add('interceptPrompt_55', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/55/challenges/new', {
    statusCode: 200,
    fixture: 'mock_prompt_55',
  })
  .as('getPrompt_55');
});

Cypress.Commands.add('interceptPostSubmission_1', () => {
  cy.intercept('POST', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges', {
    statusCode: 201,
    headers: {
      'content-type': 'application/json',
    },
    body: {
      data: {
        id: '2',
        type: 'challenge'
      }
    }
  })
  .as('postSubmission_1');
});

Cypress.Commands.add('interceptPostSubmission_55', () => {
  cy.intercept('POST', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/55/challenges', {
    statusCode: 201,
    headers: {
      'content-type': 'application/json',
    },
    body: {
      data: {
        id: '7',
        type: 'challenge'
      }
    }
  })
  .as('postSubmission_55');
});

Cypress.Commands.add('interceptSubmissionFeedback_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/2', {
    statusCode: 200,
    fixture: 'mock_submission_feedback_1',
  })
  .as('getSubmissionFeedback_1');
});

Cypress.Commands.add('interceptSubmissionFeedback_55', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/55/challenges/7', {
    statusCode: 200,
    fixture: 'mock_submission_feedback_55',
  })
  .as('getSubmissionFeedback_55');
});

Cypress.Commands.add('interceptAll', () => {
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

Cypress.Commands.add('intercept404Users', () => {
  cy.intercept('https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users', {
    status: 404,
  })
  .as('get404Users');
});

Cypress.Commands.add('intercept404Dashboard_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1', {
    statusCode: 404,
  })
  .as('get404Dashboard_1');
});

Cypress.Commands.add('intercept404PastFeedback_1_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/1', {
    statusCode: 404,
  })
  .as('get404PastFeedback_1_1');
});

Cypress.Commands.add('intercept404Prompt_1', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/new', {
    statusCode: 404,
  })
  .as('get404Prompt_1');
});

Cypress.Commands.add('intercept400PostSubmission_1', () => {
  cy.intercept('POST', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges', {
    statusCode: 400,
    headers: {
      'content-type': 'application/json',
    },
    body: {
      errors: [
        {
          status: "400",
          title: "Invalid Request",
          detail: "Couldn't find Challenge with id=1"
        }
      ]
    }
  })
  .as('post400Submission_1');
});

Cypress.Commands.add('intercept500SubmissionFeedback_2', () => {
  cy.intercept('GET', 'https://ec2-44-229-36-196.us-west-2.compute.amazonaws.com/api/v1/users/1/challenges/2', {
    statusCode: 500,
  })
  .as('get500SubmissionFeedback_1');
});