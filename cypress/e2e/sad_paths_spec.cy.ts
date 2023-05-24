describe('sad path tests', () => {
  beforeEach(() => {
    cy.interceptAll();
  });

  it('passes', () => {
    cy.visit('http://localhost:3000');
  });
});