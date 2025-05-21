const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.wcaquino.me/cypress/componentes.html',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
