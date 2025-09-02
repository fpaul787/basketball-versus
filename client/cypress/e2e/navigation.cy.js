

describe('Home Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('/');
    cy.contains('Welcome to the Basketball Versus App');
  });
});