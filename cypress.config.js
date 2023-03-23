const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  video: true,
  videoCompression: false,
  videoUploadOnPasses: true,
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 180000,
  requestTimeout: 15000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/*.{feature,features}',
    baseUrl: 'https://www.tf.com.br/',
  },
})

//'cypress/e2e/**/*.{feature,features}',