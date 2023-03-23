/// <reference types="Cypress" />

const elCheckoutPage = require('./elements').ELEMENTS

class CheckoutPage {
  
  visitProfile() {
    cy.visit('/checkout/#/profile')
  }

  typeClientPreEmailProfile(clientPreEmail) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
      .should('be.visible')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientPreEmail)
      .should('be.visible')
      .focus()
      .type(clientPreEmail, { force: true })
  }

  typeClientEmailProfile(clientEmail) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail)
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputClientEmail)
      .should('be.enabled')
      .focus()
      .type(clientEmail, { force: true })
  }

  typeFirstNameProfile(firstName) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputFirstName)
      .should('be.enabled')
      .focus()
      .type(firstName, { force: true })
  }

  typeLastNameProfile(lastName) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputLastName)
      .should('be.enabled')
      .focus()
      .type(lastName, { force: true })
  }

  typeDocumentProfile(document) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputDocument)
      .should('be.enabled')
      .focus()
      .type(document, { force: true })
  }


  typePhoneProfile(phone) {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.inputPhone)
      .should('be.enabled')
      .focus()
      .type(phone, { force: true })
  }

  chkTermsAndConditions(action) {
    switch (action) {
      case 'check':
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
          .should('be.enabled')
          .check()
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
          'be.checked'
        )
        break
      case 'uncheck':
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions)
          .should('be.enabled')
          .uncheck()
        cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.chkTermsAndConditions).should(
          'not.be.checked'
        )
        break
    }
  }

  clickBtnPreEmail() {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnClientPreEmail)
      .should('be.enabled')
      .click({ force: true })
  }

  clickBtnGoToShipping() {
    cy.get(elCheckoutPage.CLIENT_PROFILE_DATA.btnGoToShipping)
      .should('be.enabled')
      .click({ force: true })
  }

  selectAddressTypeShipping(addressType) {
    cy.wait(2500)
    cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  typeZipCode(zipCode) {
    cy.get(elCheckoutPage.SHIPPING_DATA.zipCode)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.zipCode)
      .should('be.enabled')
      .focus()
      .type(zipCode, {force:true})
  }

  typeCustomStreetShipping(customStreet) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreet)
      .should('be.enabled')
      .focus()
      .type(customStreet, { force: true })
  }

  typeCustomNumberShipping(typeCustomNumberShipping) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomNumber)
      .should('be.enabled')
      .focus()
      .type(typeCustomNumberShipping, { force: true })
  }


  typeCustomStreetNumberShipping(customStreetNumber) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetNumber)
      .should('be.enabled')
      .focus()
      .type(customStreetNumber, { force: true })
  }

  typeCustomStreetComplementShipping(customStreetComplement) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputCustomStreetComplement)
      .should('be.enabled')
      .focus()
      .type(customStreetComplement, { force: true })
  }

  typeComplementShipping(complement) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputComplement)
      .should('be.enabled')
      .focus()
      .type(complement, { force: true })
  }

  typeNeighborhoodShipping(neighborhood) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputNeighborhood)
      .should('be.enabled')
      .focus()
      .type(neighborhood, { force: true })
  }

  typeFullNameShipping(fullName) {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .clear({ force: true })
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .focus()
      .type(fullName + '{enter}', { force: true })
  }

  clearFullNameShipping() {
    cy.get(elCheckoutPage.SHIPPING_DATA.inputFullName)
      .should('be.enabled')
      .clear({ force: true })
  }

  clickBtnGoToPayment() {
    cy.get(elCheckoutPage.SHIPPING_DATA.btnGoToPayment)
      .should('be.enabled')
      .click({ force: true })
  }

  selectMercadoPago() {
    cy.get(elCheckoutPage.PAYMENT.selectMercadoPago)
      .should('be.visible')
      .click({ force: true })
  }

  selectBankInvoiceEfecty() {
    cy.get(elCheckoutPage.PAYMENT.BANK.bankInvoiceEfecty)
      .should('be.visible')
      .click({ force: true })
  }

  selectCreditCardPayment() {
    cy.wait(2000)
    cy.get(elCheckoutPage.PAYMENT.selectCreditCard).should('be.visible').click()
  }

  typeCardNumberVisa(CardNumberVisa) {
    cy.wait(2000)
    cy.get(/* '#iframe-placeholder-creditCardPaymentGroup > iframe' */ '#iframe-placeholder-creditCardPaymentGroup > .span12')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberVisa, { force: true })
  }

  typeCardNumberAmericanExpress(CardNumberAmericanExpress) {
    cy.wait(2000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberAmericanExpress, { force: true })
  }

  typeCardNumberElo(CardNumberElo) {
    cy.wait(2000)
    
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberElo, { force: true })
  } 

  typeCardNumberMasterCard(CardNumberMasterCard) {
    cy.wait(2000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe').type(CardNumberMasterCard)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberMasterCard, { force: true })
  }

  typeCardNumberDinners(CardNumberDinners) {
    cy.wait(2000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberDinners, { force: true })
  }

  typeCardNumberCabal(CardNumberCabal) {
    cy.wait(2000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardpayment-card-0Number')
      .should('exist')
      .type(CardNumberCabal, { force: true })
  }

  validateCardNumberVisa() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard0cc-0')
      .should('be.checked')
  }

  validateCardNumberAmericanExpress() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard1cc-0')
      .should('be.checked')
  }

  validateCardNumberElo() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('creditCardselectedCard3cc-0')
      .should('be.checked')
  }

  validateCardNumberCabal() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard6cc-0')
      .should('be.checked')
  }

  validateCardNumberMastercard() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard2cc-0')
      .should('be.checked')
  }

  validateCardNumberDinners() {
    cy.wait(1000)
    cy.get('#iframe-placeholder-creditCardPaymentGroup > iframe')
      .iframe('#creditCardselectedCard5cc-0')
      .should('be.checked')
  }

  validateFirstNameAlert() {
    cy.wait(1000)
    cy.get(elCheckoutPage.ALERT.firstNameAlert).should('be.visible')
  }

  validateLastNameAlert() {
    cy.wait(1000)
    cy.get(elCheckoutPage.ALERT.lastNameAlert).should('be.visible')
  }

  validateDocumentAlert() {
    cy.wait(1000)
    cy.get(elCheckoutPage.ALERT.documentAlert).should('be.visible')
  }

  validatePhoneAlert() {
    cy.wait(1000)
    cy.get(elCheckoutPage.ALERT.phoneAlert).should('be.visible')
  }

  clickBtnBuyNow() {
    cy.get(elCheckoutPage.PAYMENT.btnBuyNow)
      .should('be.visible')
      .click({ force: true })
  }

  selectCmbState(state) {
    cy.get(elCheckoutPage.SHIPPING_DATA.cbmState)
      .should('be.enabled')
      .select(state, { force: true })
  }

  selectCmbCity(city) {
    cy.wait(1000)
    cy.get(elCheckoutPage.SHIPPING_DATA.cbmCity)
      .should('be.enabled')
      .select(city, { force: true })
  }

  selectCmbDirection(addressType) {
    cy.get(elCheckoutPage.SHIPPING_DATA.cmbAddressType)
      .should('be.enabled')
      .select(addressType, { force: true })
  }

  clickChangeShippingDataModal() {
    cy.get(elCheckoutPage.ALERT.changeShippingData)
      .should('be.visible')
      .click({ force: true })
  }
}
export default new CheckoutPage()
