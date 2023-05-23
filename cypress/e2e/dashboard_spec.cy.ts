describe('template spec', () => {
  beforeEach('intercept all endpoints', () => {
    cy.interceptAll();
    cy.visit('http://localhost:3000');
  });

  it('should let you view Deniz\'s dashboard', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('button').eq(0).click();

    cy.url().should('eq', 'http://localhost:3000/55/dashboard')
    
    cy.get('h1').contains('ALPs')
      .get('.header').contains('.welcome-msg', 'Welcome, Deniz!')
      .get('.challenge-card')
      .should('have.length', 6)
      .get('button').contains('New Challenge')
      
    cy.get('.challenge-card').eq(0).find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'selective focus photography of orange and white cat on brown table')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80')
      .get('.challenge-card').eq(0).contains('h2', '04/20/2023')
      .get('.challenge-card').eq(0).contains('h3', 'gitmek')
      .get('.challenge-card').eq(0).contains('p', '(to go)')
      
    cy.get('.challenge-card').eq(5).scrollIntoView()

    cy.get('.challenge-card').eq(5).find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'red and blue fire digital wallpaper')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')
      .get('.challenge-card').eq(5).contains('h2', '05/19/2023')
      .get('.challenge-card').eq(5).contains('h3', 'görmek')
      .get('.challenge-card').eq(5).contains('p', '(to see)')
  });

  it('should let you view Alexis\'s dashboard', () => {
    cy.get('button').eq(1).click();

    cy.url().should('eq', 'http://localhost:3000/1/dashboard')

    cy.get('h1').contains('ALPs')
      .get('.header').contains('.welcome-msg', 'Welcome, Alexis!')
      .get('.challenge-card').should('have.length', 1)
      .get('button').contains('New Challenge')

    cy.get('.challenge-card').find('img')
      .should('be.visible')
      .should('have.attr', 'alt', 'closeup photography of a frog')
      .should('have.attr', 'src', 'https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1643&q=80')
      .get('.challenge-card').contains('h2', '05/18/2023')
      .get('.challenge-card').contains('h3', 'hablar')
      .get('.challenge-card').contains('p', '(to speak)')
  });
});