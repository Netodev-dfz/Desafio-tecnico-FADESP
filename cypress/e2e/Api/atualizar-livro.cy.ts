describe("API PUT", () => {
    it("Atualizar livro com sucesso", () => {
        cy.api({
            method: "PUT",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/201',
            body: {
                id: 201,
                title: "Os viajantes",
                description: "Eles viajam",
                pageCount: 25000,
                excerpt: "Textinho",
                publishDate: "2025-05-20T22:35:05.709Z"
            }
        }).then((r) => {
            expect(r.body.id).to.eq(201);
            expect(r.body.title).to.eq("Os viajantes");
            expect(r.body.description).to.eq("Eles viajam");
            expect(r.body.pageCount).to.eq(25000);
            expect(r.body.excerpt).to.eq("Textinho");
            expect(r.body.publishDate).to.eq("2025-05-20T22:35:05.709Z");
            expect(r.status).to.eq(200);
        });
    });

    it("Não deve atualizar livro com pageCount vazio", () => {
        cy.api({
            method: "PUT",
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/201',
            headers: { 'Content-Type': 'application/json' },
            failOnStatusCode: false,
            body: {
                id: 201,
                title: "Os viajantes",
                description: "Eles viajam",
                pageCount: "",
                excerpt: "Textinho",
                publishDate: "2025-05-20T22:35:05.709Z"
            }
        }).then((r) => {
            expect(r.status).to.eq(400);


        });
    });

})
