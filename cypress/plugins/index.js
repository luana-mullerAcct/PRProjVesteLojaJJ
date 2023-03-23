/// <reference types="cypress" />
/* /// <reference types="@shelex/cypress-allure-plugin" />
const AllureWriter = require('@shelex/cypress-allure-plugin/writer'); */
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */

 /* module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());
  AllureWriter(on, config);
  return config; 
  }; */

//cucumber-preprocessor
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  allureWriter(on, config);
  return config;
};