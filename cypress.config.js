const { defineConfig } = require("cypress");
require("dotenv").config();
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Mavis Hub",
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    autoOpen: true,
    overwrite: true,
    html: true,
    json: true,
  },
  video: false,
  screenshotsFolder: "cypress/images",
  env: {
    ...process.env,
  },
  e2e: {
    viewportWidth: 1536,
    viewportHeight: 960,
    specPattern: "./cypress/tests/**.{js,jsx,ts,tsx}",
    projectId: "Mavis Hub",
    baseUrl: "https://hub.skymavis.com",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on,config);
      on('task', {
        'defaults:db': () => {
          return db.seed('defaults')
        },
      })
    },
  },
  env: {
    db: {
      host: "172.20.0.117",
      user: "sm_stag_mavis_hub_v2",
      password: "XFF29GdAk4qsB4ye3ZPi",
      database: "sm_stag_d_mavis_hub_v2",
    },
  },
});
