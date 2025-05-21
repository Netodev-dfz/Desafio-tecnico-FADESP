import cypress = require("cypress")

Cypress.Commands.add('nome', (name) => {
    cy.get('#formNome').type(name)    
})

Cypress.Commands.add('sobrenome', (lastname) =>{
    cy.get('#formSobrenome').type(lastname)
})

Cypress.Commands.add('sexo', () =>{
 cy.get('[name=formSexo][value=M]').check()
    
})

Cypress.Commands.add('comida', (comidas: string | string[]) => {
  const itens = Array.isArray(comidas) ? comidas : [comidas];

  itens.forEach((item) => {
    cy.get(`#formComida${item}`).check();
  });
});

Cypress.Commands.add('esporte', () =>{
     cy.get('#formEsportes')
        .select('Futebol')
        .invoke('val')
        
})

Cypress.Commands.add('escolaridade', () =>{
    cy.get('#formEscolaridade').select('superior')
})

Cypress.Commands.add('sugestoes',()=>{
    cy.get('#elementosForm').type('Adicionar mais opções de esportes.')
})

Cypress.Commands.add('cadastrar', (mensagemEsperada?: string) => {
  cy.get('#formCadastrar').click()

  if (mensagemEsperada) {
    cy.contains('#resultado', mensagemEsperada)
  }
})


Cypress.Commands.add('voltar', ()=>{
    cy.get('a[onclick="javascript:voltou()"]').click();

    cy.get('#resultado')
})

Cypress.Commands.add('tabela', ()=>{
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').click()
    cy.get(':nth-child(1) > :nth-child(5) > table > tbody > tr > td > input').click()
    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Teste')
})