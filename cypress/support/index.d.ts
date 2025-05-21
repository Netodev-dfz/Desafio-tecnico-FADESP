declare namespace Cypress {
  interface Chainable {
    nome(): Chainable<void>;
    sobrenome(): Chainable<void>;
    sexo(): Chainable<void>
    comida(): Chainable<void>
    esporte(): Chainable<void>
    escolaridade(): Chainable<void>
    sugestoes(): Chainable<void>
    cadastrar(): Chainable<void>
    validarAlerta(): Chainable<void>
    voltar(): Chainable<void>
    tabela(): Chainable<void>
  }
}

declare namespace Cypress {
  interface Chainable {
    nome(name: string): Chainable<void>;
    sobrenome(lastname: string): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable {
    comida(comidas: string | string[]): Chainable<void>
  }
}

declare namespace Cypress {
  interface Chainable {
    cadastrar(mensagemEsperada?: string): Chainable<void>
  }
}