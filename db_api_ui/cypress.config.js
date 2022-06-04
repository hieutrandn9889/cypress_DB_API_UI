const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2pw1r7",
  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "test-report",
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    DB: {
      user: "myuser",
      host: "127.0.0.1",
      database: "pokemon",
      password: "pass",
      port: 32763,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*.*",
    excludeSpecPattern: ["**/stepDefinitions/*", "*.js", "*.md"],
    baseUrl: "https://www.google.co.in",
  },
});
