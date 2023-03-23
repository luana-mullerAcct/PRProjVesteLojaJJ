/// <reference types="Cypress" />

const elPdpPage = require('./elements').ELEMENTS

class PdpPage {
  urlPDP(productLink) {
    cy.wait(2500)
    cy.visit(productLink)
    //cy.title().should('contain', siteTitle)
  }

  chooseSize(){
    cy.wait(4000)
    cy.get(elPdpPage.buttonChooseSizeP).click({ force: true })
    cy.get('.vtex-store-components-3-x-skuSelectorSelectorImageValue').should('contain', 'P' )   
  }

  chooseSize2(){
    cy.wait(4000)
    cy.get(elPdpPage.buttonChooseSizeM).click({ force: true })
    cy.get('.vtex-store-components-3-x-skuSelectorSelectorImageValue').should('contain', 'M' )
  }
  chooseSize3(){
    cy.wait(5000)
    cy.get(elPdpPage.buttonChooseSize1).first().click({ force: true })  
  }
  clickBtnAddToCart() {
    cy.wait(5000)
    cy.get(elPdpPage.btnAddToCart).click({ force: true })//should('exist').click({ force: true })
    cy.wait(5000)
  }

  clickBtnAddToCartMobile() {
    cy.wait(10000)
    cy.get(elPdpPage.btnAddToCartMobile).click({ force: true })
    cy.wait(5000)
  }

  typeZipCode(zipCode) {
    cy.wait(5000)
    cy.get(elPdpPage.zipCodeField).type(zipCode)
  }

  selectState(state) {
    cy.get(elPdpPage.cbState).select(state, { force: true })
  }

  selectCity(city) {
    cy.get(elPdpPage.cbneighborhood).select(city, { force: true })
  }

  clickBtnCalcShipping() {
    cy.get(elPdpPage.btnCalcShipping).should('exist').click({ force: true })
  }

  validatePrice() {
    cy.wait(5000)
    cy.get(elPdpPage.productPrice).should('be.visible')
  }

  validatePriceMobile() {
    cy.get(elPdpPage.productPriceMobile).should('be.visible')
  }

  validateImgPdpMainProductImage() {
    cy.get(elPdpPage.productImage).should('be.visible')
  }
  
  validateShippingDataTable() {
    cy.get(elPdpPage.tableShippingData).should('be.visible')
  }

  validateShippingDataTableNotAvailable() {
    cy.wait(5000)
    cy.get(elPdpPage.tableShippingDataUnavailable).should('be.visible')
    cy.get(elPdpPage.tableShippingData).should('not.exist')
  }

  validateBtnAddToCart() {
    cy.get(elPdpPage.btnAddToCart).should('exist')
  }

  validateBtnAddToCartMobile() {
    cy.get(elPdpPage.btnAddToCartMobile).should('exist')
  }

  validateImgPdpShareProduct() {
    cy.get(elPdpPage.productShare).should('be.visible').click()
  }

  validateModalShareProduct(){
    cy.get(elPdpPage.modalShareProduct).should('be.visible')
    //cy.get('.trackfield-store-components-0-x-tooltip > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(1) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy').contains('Compartilhe nas redes')
    cy.wait(2000)
    cy.get(elPdpPage.SOCIALBUTTON.Facebook).should('be.visible')
    cy.wait(2000)
    cy.get(elPdpPage.SOCIALBUTTON.Twitter).should('be.visible')
    cy.wait(2000)
    cy.get(elPdpPage.SOCIALBUTTON.Pinterest).should('be.visible')
    cy.wait(2000)
    cy.get(elPdpPage.SOCIALBUTTON.Whatsapp).should('be.visible')
    cy.wait(2000)
    cy.get(elPdpPage.SOCIALBUTTON.Email).should('be.visible')
    cy.wait(2000)
    cy.get('.trackfield-store-components-0-x-share-link__text').contains('Copiar Link:')
    cy.wait(2000)
    cy.get('[data-testid="input"]').should('have.value', 'https://www.tf.com.br/shorts-f-inspiracao-preto/p')
    cy.get('.trackfield-store-components-0-x-share-link__button > .pa0 > svg').click()
    cy.get(elPdpPage.closeModalShareProduct).click()
  }

  validateBtnWishlist() {
    cy.get(elPdpPage.buttonWishlist).should('be.visible')
  }
}
export default new PdpPage()
