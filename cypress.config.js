const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s5tud5",
  defaultCommandTimeout: 3000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  scrollBehavior: "center",
  watchForFileChanges: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
    reportFilename: "index",
    reportPageTitle: "Cypress - Report",
    overwrite: true,
    html: false,
    json: true,
    cdn: true,
    video: false,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    standard_password: "",
    locked_password: "",
    problem_password: "",
    glitch_password: "",
  },
});
