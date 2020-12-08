describe('Cypress testing example', () => {
    // This is the most basic automation test that you can do in Cypress
    before(() => {
      cy.visit('http://www.google.com')
    });
    
    it('verifies that Google is in the url', () => {
      cy.url()
        .should('include', 'google')
    });
    
    it('Finds the search input', () => {
      cy.get('[aria-label="Search"]')
        .should('have.attr', 'type', 'text')
    });
});