/// <reference types="Cypress" />

const elCartPage = require('./elements').ELEMENTS

class CartPage {
  accessCartPage() {
    cy.visit('/checkout/#/cart')
    cy.wait(2500)
  }

  accessCartPageWithProduct1(salesChannel, SKUIDProduct1, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct1 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  accessCartPageWithProduct2(salesChannel, SKUIDProduct2, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct2 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  accessCartPageWithProducts1and2(salesChannel, SKUIDProduct1, SKUIDProduct2, quantity) {
    cy.visit(
      '/checkout/cart/add?sc='+
        salesChannel+
        '&sku=' +
        SKUIDProduct1 +
        '&qty=' +
        quantity +
        '&seller=1&sku=' +
        SKUIDProduct2 +
        '&qty=' +
        quantity +
        '&seller=1'
    )
  }

  clickBtnCalculateShipping() {
    cy.wait(5000)
    cy.get(elCartPage.btnCalculateShipping)
      //.should('be.enabled')
      .click({ force: true })
  }

  selectCmbState(state) {
    cy.wait(2500)
    cy.get(elCartPage.cmbShipState).should('be.enabled').select(state)
  }

  selectCmbCity(city) {
    cy.wait(2500)
    cy.get(elCartPage.cmbShipCity).should('be.enabled').select(city)
  }

  validateLblShippingCost(status) {
    switch (status) {
      case 'calculated':
        cy.get(elCartPage.lblShippingCost).should('be.visible')
        break
      case 'not calculated':
        cy.get(elCartPage.lblShippingCost).should('not.be.visible')
        break
    }
  }

  clickBtnCartToOrderForm() {
    cy.get(elCartPage.btnCartToOrderForm).should('exist').click({ force: true })
    cy.wait(2000)
  }

  validateFnImgProduct1(product1, status) {
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    switch (status) {
      case 'visible':
        cy.get(elCartPage.elCartFull).should('be.visible')
        cy.get(elCartPage.fnImgProduct(product1)).should('be.visible')
        break
      case 'not visible':
        cy.get(elCartPage.elCartFull).should('not.be.visible')
        cy.get(elCartPage.fnImgProduct(product1)).should('not.exist')
        break
    }
  }
  
  validateFnImgProduct2(product2, status) {
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    switch (status) {
      case 'visible':
        cy.get(elCartPage.elCartFull).should('be.visible')
        cy.get(elCartPage.fnImgProduct(product2)).should('be.visible')
        break
      case 'not visible':
        cy.get(elCartPage.elCartFull).should('not.be.visible')
        cy.get(elCartPage.fnImgProduct(product2)).should('not.exist')
        break
    }
  }

  validateCartEmpty() {
    cy.get(elCartPage.elCartEmpty).should('be.visible')
  }

  clickFnItemRemove(skuid1) {
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1)).should('exist')
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1))
      .should('be.visible')
      .click()
    cy.wait(2500)
  }

  clickClearCart(skuid1, skuid2) {
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1)).should('exist')
    cy.get(elCartPage.xpFnItemRemoveProduct1(skuid1))
      .should('be.visible')
      .click({force : true})
    cy.wait(2500)
    cy.get(elCartPage.loading).should('not.be.visible')
    cy.get(elCartPage.xpFnItemRemoveProduct2(skuid2)).should('exist')
    cy.get(elCartPage.xpFnItemRemoveProduct2(skuid2))
      .should('be.visible')
      .click({force : true})
    cy.get(elCartPage.loading).should('not.be.visible')
  }

  clickXpFnIncrementQuantity(product1, quantity) {
    cy.wait(2500)
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .then(($value) => {
        let index = quantity - $value
        for (let n = 0; n < index; n++) {
          cy.wait(5000)
          cy.get(elCartPage.xpFnIncrementQuantity(product1))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  clickXpFnDecrementQuantity(product1, quantity) {
    cy.wait(2500)
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .then(($value) => {
        let index = quantity - $value
        for (let n = 0; n > index; n--) {
          cy.wait(5000)
          cy.get(elCartPage.xpFnDecrementQuantity(product1))
            .should('exist')
            .click({ force: true })
        }
      })
  }

  validateXpFnItemQuantity(product1, quantity) {
    cy.wait(5000)
    cy.get(elCartPage.xpFnItemQuantity(product1))
      .invoke('val')
      .should('eq', quantity)
  }

  typeInputCartCoupon(invalidCoupon) {
    cy.wait(2500)
    cy.get(elCartPage.inputCoupon, { timeout: 50 * 1000 })
      .should('be.visible')
      .type(invalidCoupon, {force : true})
    cy.wait(1000)
  }

  typeZipCode(zipCode) {
    cy.wait(2500)
    cy.get(elCartPage.btnCalculateShipping).should('be.visible').click()
    cy.get(elCartPage.inputZipCode).should('be.visible').type(zipCode, {force : true})
    //cy.get(elCartPage.inputZipCode).tab()

    cy.wait(1000)
  }

  clickBtnCartCoupon() {
    cy.get(elCartPage.btnCoupon).should('be.visible').click({ force: true })
  }

  clickBtnbtnCalculateShipping() {
    cy.get(elCartPage.btnOKCalculateShipping).should('be.visible').click({ force: true })
  }


  validateMsgCartInvalidDiscountCoupon(coupon) {
    cy.wait(8000)
    cy.get(elCartPage.msgInvalidDiscountCoupon, {
      timeout: 10 * 1000,
    }).should('have.text', `Cupom ${coupon} inválido`)
  }

  validateEmpytInputCartCoupon() {
    cy.get(elCartPage.inputCoupon).should('be.empty')
  }

  validateShippingAvailable() {
    cy.get(elCartPage.lblShippingAvailable).should('be.visible')
  }

  validateShippingAlph(){
    cy.get(elCartPage.lblShippingAlph).should('be.visible')
  }
  validateShippingUnavailable() {
    cy.get(elCartPage.lblShippingUnavailable).should('be.visible')
  }
}
export default new CartPage()
