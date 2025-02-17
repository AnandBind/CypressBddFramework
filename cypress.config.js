const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:10000,
    setupNodeEvents: async (on, config) => {
      // Add Cucumber Preprocessor Plugin
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor",createBundler({plugins: [createEsbuildPlugin(config)]})
      );
      // Return the updated config
      return config;
    },
    specPattern: "cypress/e2e/SokinB2B/Features/Beneficiaries.feature",
    supportFile: "cypress/support/e2e.js",
  },
  "cypress-cucumber-preprocessor": {
    stepDefinitions: "cypress/support/step_definitions/", // define the pat of steps definition to map with feature file.
  },
});

