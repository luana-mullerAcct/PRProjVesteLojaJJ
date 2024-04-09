/// <reference types="cypress" />

const elLogin = require('./elements').ELEMENTS

class LoginPage {
  acessLoginPage() {
    cy.visit('https://www.johnjohndenim.com.br/login')
    cy.wait(1000)
  }
}
export default new LoginPage()
