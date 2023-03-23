/// <reference types="cypress" />

const elLogin = require('./elements').ELEMENTS

class LoginPage {
  acessLoginPage() {
    cy.visit('/login?returnUrl=%2F%3Fworkspace%3Dwsio')
    cy.wait(1000)
  }
}
export default new LoginPage()
