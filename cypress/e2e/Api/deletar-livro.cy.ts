describe("API DELETE", () => {
    it("Deletar livro com sucesso", () => {
        cy.api({
            method: "DELETE",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/201',
        }).then((r) => {
            expect(r.status).to.eq(200);
        });
    });

    it("Não deve deletar livro com id vazio na URL", () => {
        cy.api({
            method: "DELETE",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/',
            failOnStatusCode: false
        }).then((r) => {
            expect(r.status).to.eq(405);
        });
    });

});
