/// <reference types="Cypress" />

const elHomepage = require('./elements').ELEMENTS

class HomePage {
  accessHomepage(siteTitle) {
    cy.visit('/')
    cy.title().should('contain', siteTitle)
  }

  viewPortPDPIphoneXR() {
    cy.viewport('iphone-xr')
    cy.wait(1000)
  }

  viewPortPDPSamsungS10() {
    cy.viewport('samsung-s10')
    cy.wait(1000)
  }

  urlHomeIphoneXR(siteTitle) {
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.title().should('contain', siteTitle)
  }

  hoverAboutElectrolux() {
    cy.wait(2500)
    cy.xpath(elHomepage.menuAboutElectrolux())
      .should('exist')
      .trigger('mouseover', { force: true })
  }

  clickAboutElectrolux() {
    cy.xpath(elHomepage.menuAboutElectroluxMobile()).should('exist').click()
  }

  clickAtendimentoElectrolux() {
    cy.xpath(elHomepage.menuAtendimentoElectroluxMobile())
      .should('exist')
      .click()
  }

  validateAboutMenuLinks(itemMenuAbout, linkPage) {
    cy.xpath(elHomepage.itemMenuAboutElectrolux(itemMenuAbout)).then((el) => {
      expect(el).have.attr('href').contain(linkPage)
    })
  }

  hoverCentralDeAtencionElectrolux() {
    cy.wait(2500)
    cy.xpath(elHomepage.menuCentralDeAtencionElectrolux())
      .should('exist')
      .trigger('mouseover', { force: true })
  }

  validateAtendimentoMenuLinks(itemMenuCentralAtencion, linkPage) {
    cy.xpath(
      elHomepage.itemMenuCentralAtencionElectrolux(itemMenuCentralAtencion)
    ).then((el) => {
      expect(el).have.attr('href').contain(linkPage)
    })
  }

  validateFooterLinks(itemFooterText, itemFooterLink) {
    cy.xpath(elHomepage.itemFooter(itemFooterText)).then((el) => {
      expect(el).have.attr('href').contain(itemFooterLink)
    })
  }

  clickMenuCategoriesElectrolux() {
    cy.wait(2000)
    cy.get(elHomepage.menuCategoriesMobile)
      .should('exist')
      .click({ force: true })
      
    cy.get(elHomepage.menumobilenivel)
      .should('exist')
      .click({ force: true })      
      
  }

  hoverMenuCategoriesElectrolux() {
    cy.wait(2000)
    cy.get(elHomepage.menuCategories)
      .should('exist')
      .trigger('mouseover', { force: true })
  }

  /* validateLinksOnMenuCategories(itemCategoryText, itemCategoryLink) {
    cy.xpath(
      elHomepage.itemCategoryMenu(itemCategoryText, itemCategoryLink)
    ).should('be.visible') */

    validateLinksOnMenuCategoriesMobile() {
      cy.get(elHomepage.itemCategoryMenuMobile()).click({ force: true }).should('have.text','Masculino')
      cy.get(elHomepage.itemCategoryMenuDepto()).click({ force: true }).should('have.text','Fitness-')
  }
  validateLinksOnMenuCategories() {
    cy.get(elHomepage.itemCategoryMenu()).click({ force: true }).should('have.text','Camisetas')
    //cy.get(elHomepage.itemCategoryMenuDepto()).click({ force: true }).should('have.text','Roupas-')

  }


  validateLinksOnHeaderMenuCategories(itemCategoryText, itemCategoryLink) {
    cy.log(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
    cy.xpath(elHomepage.itemHeaderMenu(itemCategoryText, itemCategoryLink))
      .first()
      .should('be.visible')
  }

  validateLinkHeaderToHome(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogo).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  validateLinkHeaderToHomeMobile(linkHeaderToHome) {
    cy.get(elHomepage.HEADER.headerEluxCOLogoMobile).then((el) => {
      expect(el).have.attr('href').eq(linkHeaderToHome)
    })
  }

  clickBtnLogin() {
    cy.wait(2500)
    cy.get(elHomepage.HEADER.btnLogin)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnLoginMobile() {
    this.closePromoModal()
    cy.wait(2500)
    cy.get(elHomepage.HEADER.btnLoginMobile).should('exist')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')
    cy.get(elHomepage.HEADER.btnLoginMobile)
      .should('be.visible')
      .click({ multiple: true }, { force: true })
  }

  clickBtnLoginWithEmailPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.btnLoginWithEmailPassword)
      .should('exist')
      .click()
  }

  clickBtnLoginWithEmailPasswordmobile() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.btnLoginWithEmailPasswordmobile)
      .should('exist')
      .click()
  }
  typeEmail(validEmail) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.inputEmail)
      .should('exist')
      .type(validEmail)
  }

  typePassword(validPassword) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.inputPassword)
      .should('exist')
      .type(validPassword)
  }

  clickBtnEnter() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.btnEnter)
      .should('be.visible')
      .click({ force: true })
    cy.wait(5000)
  }

  validateMsgLogin(msg) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.msgInvalidLogin)
      .should('be.visible')
      .and('have.text', msg)  }

    

  validateUserLogged(status, cookieAuth) {
    switch (status) {
      case 'logged':
        cy.get('.vtex-login-2-x-profileIcon').click()
        cy.get(elHomepage.HEADER.btnLoggedUser).should('be.visible')
        cy.getCookie(cookieAuth).should('exist')
        break
      case 'not logged':
        cy.get(elHomepage.HEADER.btnLoggedUser).should('not.exist')
        cy.getCookie(cookieAuth).should('not.exist')
    }
  }

  clickBtnLoggedUser() {
    cy.wait(2500)
    cy.get(elHomepage.HEADER.btnLoggedUser)
      .should('be.visible')
      .click({ force: true })
  }

  clickBtnLogoff() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.LOGGED_USER.btnLogoff)
      .should('be.visible')
      .click({ force: true })
  }

  clickRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.EMAIL_PASSWORD.recoveryPassword)
      .should('be.visible')
      .click({ force: true })
  }

  typeEmailRecoveryPassword(email) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputEmail)
      .should('be.visible')
      .type(email)
  }

  clickBtnSendRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.btnSend)
      .should('be.visible')
      .click({ force: true })
  }

  typeNewPasswordRecoveryPassword(newPassword) {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputNewPassword)
      .should('be.visible')
      .type(newPassword)
  }

  typeConfirmNewPasswordRecoveryPassword(newPassword) {
    cy.get(
      elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.inputConfirmNewPassword
    )
      .should('be.visible')
      .type(newPassword)
  }

  clickBtnSendRecoveryPassword() {
    cy.get(elHomepage.HEADER.MODAL_LOGIN.RECOVERY_PASSWORD.btnSend)
      .should('be.visible')
      .click({ force: true })
  }

  typeSearchBar(product1) {
    cy.wait(2500)
    cy.get(elHomepage.HEADER.SEARCH.inputSearchBar)
      .should('be.enabled')
      .type(product1 + '{enter}', { force: true })
  }

  typeSearchBarMobile(product1) {
    cy.wait(2500)
    cy.get(elHomepage.HEADER.SEARCH.openinputSearchBarMobile)
    .should('be.enabled')
    .click({ force: true })
    cy.get(elHomepage.HEADER.SEARCH.inputSearchBarMobile)
      .should('be.enabled')
      .type(product1 + '{enter}', { force: true })
  }

  closePromoModal(){
    cy.wait(6000)
    cy.get('body').then((body) => {
      if(body.find(elHomepage.PROMO_MODAL.btnCloseModal).length > 0){
        cy.get(elHomepage.PROMO_MODAL.btnCloseModal).should('be.visible').click()
      }
    })
  }

}
export default new HomePage()
