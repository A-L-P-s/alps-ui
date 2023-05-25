/// <reference types="Cypress" />

describe('Dashboard flow', () => {
  beforeEach('intercept all endpoints', () => {
    cy.interceptAll();
    cy.visit('http://localhost:3000')
    .wait('@getUsers');
  });

  it('should have a homepage with two users', () => {
    cy.url().should('eq', 'http://localhost:3000/')
      .get('.home-page').contains('h2', 'Select a user to continue')
      .get('.user').should('have.length', 2)
      .get('.user').eq(0).contains('p', 'Alexis')
      .get('.user').eq(0).contains('button', 'Practice Spanish!')
      .get('.user').eq(1).contains('p', 'Deniz')
      .get('.user').eq(1).contains('button', 'Practice Turkish!');
  });

  it('should let you view Alexis\'s dashboard', () => {
    cy.get('button').eq(0).click()
      .wait('@getDashboard_1')

    cy.url().should('include', '/1/dashboard')
      .get('.header').contains('.welcome-msg', 'Welcome, Alexis!')
      .get('.challenge-card').should('have.length', 1)
      .get('button').contains('New Challenge')

    cy.get('.challenge-card').find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'closeup photography of a frog')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1643&q=80')
      .get('.challenge-card').contains('p', '05/18/2023')
      .get('.challenge-card').contains('h3', 'hablar')
      .get('.challenge-card').contains('h4', '(to speak)')
  });

  it('should let you view Deniz\'s dashboard', () => {

    cy.get('button').eq(1).click()
      .wait('@getDashboard_55')

    cy.url().should('include', '/55/dashboard')
      .get('.header').contains('.welcome-msg', 'Welcome, Deniz!')
      .get('.challenge-card')
      .should('have.length', 6)
      .get('button').contains('New Challenge')
      
    cy.get('.challenge-card').eq(0).find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'selective focus photography of orange and white cat on brown table')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80')
      .get('.challenge-card').eq(0).contains('p', '04/20/2023')
      .get('.challenge-card').eq(0).contains('h3', 'gitmek')
      .get('.challenge-card').eq(0).contains('h4', '(to go)')
      
    cy.get('.challenge-card').eq(5).scrollIntoView()

    cy.get('.challenge-card').eq(5).find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'red and blue fire digital wallpaper')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')
      .get('.challenge-card').eq(5).contains('p', '05/19/2023')
      .get('.challenge-card').eq(5).contains('h3', 'görmek')
      .get('.challenge-card').eq(5).contains('h4', '(to see)')
  });

  it('should let you click the header title and return to the home page and select another user', () => {
    cy.get('.user').eq(1).find('button').click()
      .wait('@getDashboard_55')

    cy.url().should('include', '/55/dashboard');
    
    cy.contains('p', 'Welcome, Deniz!')
      .get('.header-logo').click()

    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.user').should('have.length', 2)
      .get('.user').eq(0).find('button').click()

    cy.url().should('include', '/1/dashboard');

    cy.contains('p', 'Welcome, Alexis!')
  });
});