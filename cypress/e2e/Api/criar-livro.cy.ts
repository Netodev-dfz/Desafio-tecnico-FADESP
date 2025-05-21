describe("API POST", () => {
    it("Criar livro com sucesso", () => {
        cy.api({
            method: "POST",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
            body: {
                "id": 201,
                "title": "As aventuras de PI",
                "description": "Ele aventura",
                "pageCount": 25000,
                "excerpt": "Texto",
                "publishDate": "2025-05-20T22:31:18.069Z",
            }
        }).then((r) => {
            expect(r.body.id).to.eq(201)
            expect(r.body.description).to.eq("Ele aventura")
            expect(r.body.pageCount).to.eq(25000)
            expect(r.body.excerpt).to.eq("Texto")
            expect(r.body.publishDate).to.eq("2025-05-20T22:31:18.069Z")
            expect(r.body.title).to.eq("As aventuras de PI")
            expect(r.status).to.eq(200);
        });
    });

    it("Não deve criar livro com data de publicação vazia", () => {
        cy.api({
            method: "POST",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books',
            failOnStatusCode: false,
            body: {
                "id": 202,
                "title": "As aventuras de PI",
                "description": "Ele aventura",
                "pageCount": 30000,
                "excerpt": "Texto",
                "publishDate": ""
            }
        }).then((r) => {
            expect(r.status).to.eq(400);
        });
    });
});
