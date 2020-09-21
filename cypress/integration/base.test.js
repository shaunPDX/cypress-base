describe('A basic Cypress test', () => {
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

describe('API Testing Example', () => {
    it('Should return the correct response status and body', () => {
      cy.request(
        'GET',
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      ).then(($res) => {
        const firstUser = $res.body[0];
        expect($res.status).to.eq(200)
        expect($res.body).to.have.length(5)
        expect(firstUser.body).to.contain('laudantium enim quasi est quidem magnam voluptate ipsam eos')
        expect(firstUser.email).to.eq('Eliseo@gardner.biz')
        expect(firstUser.id).to.eq(1)
      });
    });
  });