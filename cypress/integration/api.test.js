describe('API Testing Example', () => {
  it('Should return the correct response status and body', () => {
    cy.request(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    ).then(($res) => {
      // Here we are getting the first user and setting it as a variable called firstUser
      const firstUser = $res.body[0];
      // I'm doing various assertions here for different aspects of the data returned. You should not assert against specific text, I'm doing here just as an example
      expect($res.status).to.eq(200)
      expect($res.body).to.have.length(5)
      expect(firstUser.body).to.contain('laudantium enim quasi est quidem magnam voluptate ipsam eos')
      expect(firstUser.email).to.eq('Eliseo@gardner.biz')
      expect(firstUser.id).to.eq(1)
    });
  });
});