describe('Testes de Alertas, Confirms e Prompts', () => {
  beforeEach(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  })

  it('Valida alert simples', () => {
    cy.get('#alert').click()
    cy.on('window:alert', (msg) => {
      expect(msg).to.eq('Alert Simples')
    })
  })

  it('Valida confirm OK', () => {
    cy.on('window:confirm', (msg) => {
      expect(msg).to.eq('Confirm Simples')
      return true
    })
    cy.get('#confirm').click()

  })

  it('Valida confirm Cancelar', () => {
    cy.on('window:confirm', (msg) => {
      expect(msg).to.eq('Confirm Simples')
      return false
    })
    cy.get('#confirm').click()

  })

  it('Valida prompt com valor digitado', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(10)
    })
    cy.get('#prompt').click()
  })
})


