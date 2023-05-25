/// <reference types='Cypress' />
describe('successful submission user flow', () => {
  beforeEach('intercept all endpoints', () => {
    cy.interceptAll();
    cy.visit('http://localhost:3000')
    .wait('@getUsers');
    cy.get(':nth-child(1) > a > button').click()
    cy.get('button').click()
    cy.get('#sent1').type('El gato escuchó un ruido y saltó dentro de la bañera.')
    cy.get('#sent2').type('El gato escuchará el agua correr en la bañera.')
  });

  it('Should display the form page when a user clicks new challenge', () => {
    cy.get('form').should('be.visible')
    cy.get('.challenge-container').should('be.visible')
    cy.get('.challenge-header').should('be.visible').contains('Challenge')
    cy.get('.verb-container').should('be.visible')

    cy.get('.prompt-verb').should('be.visible').contains('escuchar')
    cy.get('.prompt-eng-verb').should('be.visible').contains('to listen')

    cy.get(':nth-child(2) > label').should('be.visible').contains('pretérito | preterite tense')
    cy.get('#sent1').should('be.visible')
    cy.get(':nth-child(2) > .chars-remaining').should('be.visible')

    cy.get(':nth-child(3) > label').should('be.visible').contains('imperfecto | imperfect tense')
    cy.get('#sent2').should('be.visible')
    cy.get(':nth-child(3) > .chars-remaining').should('be.visible')

    cy.get('.submit-button').should('be.visible')
  })

  it('Should allow the user to type a sentence into the text boxes and see the amount of characters they have remaining', () => {
    cy.get('#sent1').should('have.value', 'El gato escuchó un ruido y saltó dentro de la bañera.')
    cy.get(':nth-child(2) > .chars-remaining').contains(347)

    cy.get('#sent2').should('have.value', 'El gato escuchará el agua correr en la bañera.')
    cy.get(':nth-child(3) > .chars-remaining').contains(354)
  })

  it('Should show feedback for the user\'s work when they click submit', () => {
    cy.get('.submit-button').click()
    cy.url().should('eq', 'http://localhost:3000/1/feedback/2')

    cy.get('.feedback-header').should('be.visible')
    cy.get('.feedback-header').should('be.visible').contains('Your challenge from 05/20/2023')

    cy.get('.prompt-img').should('be.visible').should('have.attr', 'src', 'https://plus.unsplash.com/premium_photo-1661888521670-7dc228bcd78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
    cy.get('.verb-assigned').should('be.visible').contains('escuchar')
    
    cy.get('.sentences-container > :nth-child(2)').should('be.visible').contains('Sentence #1')
    cy.get('.sentences-container > :nth-child(3)').should('be.visible').contains('pretérito ✴ preterite tense')

    cy.get(':nth-child(4) > :nth-child(1)').should('be.visible').contains('Your response')
    cy.get(':nth-child(4) > :nth-child(2)').should('be.visible').contains('El gato escuchó un ruido y saltó dentro de la bañera.')
    
    cy.get(':nth-child(4) > :nth-child(3)').should('be.visible').contains('Corrected Sentence')
    cy.get(':nth-child(4) > :nth-child(4)').scrollIntoView()
    cy.get(':nth-child(4) > :nth-child(4)').should('be.visible').contains('El gato escuchó un ruido y saltó dentro de la bañera.')
    
    cy.get(':nth-child(4) > :nth-child(5)').scrollIntoView()
    cy.get(':nth-child(4) > :nth-child(5)').should('be.visible').contains('Feedback')
    cy.get(':nth-child(4) > :nth-child(6)').should('be.visible').contains('Your sentence is correct! Great job!')
    
    
    cy.get('.sentences-container > :nth-child(5)').should('be.visible').contains('Sentence #2')
    cy.get(':nth-child(4) > :nth-child(6)').scrollIntoView()
    cy.get('.sentences-container > :nth-child(6)').should('be.visible').contains('imperfecto ✴ imperfect tense')

    cy.get(':nth-child(7) > :nth-child(1)').should('be.visible').contains('Your response')
    cy.get(':nth-child(7) > :nth-child(2)').should('be.visible').contains('El gato escuchará el agua correr en la bañera.')

    cy.get(':nth-child(7) > :nth-child(3)').should('be.visible').contains('Corrected Sentence')
    cy.get(':nth-child(7) > :nth-child(4)').should('be.visible').contains('El gato escuchaba el agua correr en la bañera.')

    cy.get(':nth-child(7) > :nth-child(5)').should('be.visible').contains('Feedback')
    cy.get(':nth-child(7) > :nth-child(6)').should('be.visible').contains('Your sentence incorrectly uses the future tense (escuchará), indicating a future action.')
  })

  it('Should prvoide a button that the user can click to return to their dashboard', () => {
    cy.get('.submit-button').click()
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/1/dashboard')
  })

  it('Should show the newly completed challenge in the users dashboard', () => {
    cy.intercept('GET', 'https://calm-thicket-75558.herokuapp.com/api/v1/users/1', {
      statusCode: 200,
      fixture: 'posted_mock_dashboard_1.json'
    })
    
    cy.get('.submit-button').click()
    cy.get('button').click()
    cy.get('[href="/1/feedback/7"] > .challenge-card').should('be.visible')
  })
})

// describe('submission error user flow', () => {
//   beforeEach('intercept all endpoints', () => {
//     cy.interceptAll();
//     cy.visit('http://localhost:3000')
//     .wait('@getUsers');
//     cy.get(':nth-child(1) > a > button').click()
//     cy.get('button').click()
//     })

//     it('Should display an error message if the user tries to submit a challenge without filling out both input fields', () => {
//       cy.get('.submit-button').click()
//       cy.get('.submit-button-container > p').should('be.visible').contains('Please complete both sentences to receive feedback for your work!')
//     })
//   })