describe("API GET", () => {
  it("Pegar livro com sucesso", () => {
    cy.api({
      method: "GET",
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
    }).then((r) => {
      expect(r.status).to.eq(200);
    });
  });

  it("Pegar livro com id inexistente", () => {
    cy.api({
      method: "GET",
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/201',
      failOnStatusCode: false
    }).then((r) => {
      expect(r.status).to.eq(404);
    });
  });
});

