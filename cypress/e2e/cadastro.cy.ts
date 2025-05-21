/// <reference types="cypress" />

describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })

  it('Cadastro com sucesso', () => {
    cy.nome("Eurico").should('have.value', 'Eurico')
    cy.sobrenome("Moreira").should('have.value', 'Moreira')
    cy.sexo().should('be.checked')
    cy.comida('Pizza').should('be.checked')
    cy.escolaridade().should('have.value', 'superior')
    cy.esporte().should('deep.equal', ['futebol'])
    cy.sugestoes()
    cy.cadastrar('Cadastrado!').should('contain.text', "Cadastrado!")
  })

  it('Cadastro com carne e vegetariano', () => {
    cy.nome("Eurico").should('have.value', 'Eurico')
    cy.sobrenome("Moreira").should('have.value', 'Moreira')
    cy.sexo().should('be.checked')
    cy.comida(['Carne', 'Vegetariana']).should('be.checked')
    cy.escolaridade().should('have.value', 'superior')
    cy.esporte().should('deep.equal', ['futebol'])
    cy.sugestoes()
    cy.cadastrar()
    cy.on('window:alert', (msg) => {
      expect(msg).to.eq('Tem certeza que voce eh vegetariano?')
    })

  })

  it('Cadastrar e depois clicar na funcionalidade voltar ', () => {
    cy.nome("Eurico").should('have.value', 'Eurico')
    cy.sobrenome("Moreira").should('have.value', 'Moreira')
    cy.sexo().should('be.checked')
    cy.comida(['Carne', 'Vegetariana']).should('be.checked')
    cy.escolaridade().should('have.value', 'superior')
    cy.esporte().should('deep.equal', ['futebol'])
    cy.voltar().should('contain.text', 'Voltou!')
  })

  it('Preenchendo todo formulario', () => {
    cy.nome("Eurico").should('have.value', 'Eurico')
    cy.sobrenome("Moreira").should('have.value', 'Moreira')
    cy.sexo().should('be.checked')
    cy.comida('Pizza').should('be.checked')
    cy.escolaridade().should('have.value', 'superior')
    cy.esporte().should('deep.equal', ['futebol'])
    cy.sugestoes()
    cy.tabela().should('have.value', "Teste")
    cy.cadastrar('Cadastrado').should('contain.text', "Cadastrado!")
  })

  it('Não seleciona sexo e exibe mensagem de obrigatoriedade', () => {
    cy.nome("Eurico").should('have.value', 'Eurico')
    cy.sobrenome("Moreira").should('have.value', 'Moreira')
    cy.comida('Pizza').should('be.checked')
    cy.escolaridade().should('have.value', 'superior')
    cy.esporte().should('deep.equal', ['futebol'])
    cy.sugestoes()
    cy.tabela().should('have.value', "Teste")
    cy.cadastrar('Status: Nao cadastrado')
    cy.on('window:alert', (msg) => {
      expect(msg).to.eq('Sexo eh obrigatorio')
    })
  })
})