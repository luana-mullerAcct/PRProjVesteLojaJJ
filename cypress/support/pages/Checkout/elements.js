export const ELEMENTS = {
  CLIENT_PROFILE_DATA: {
    inputClientPreEmail: 'input#client-pre-email',
    btnClientPreEmail: '#btn-client-pre-email',
    inputClientEmail: 'input#client-email',
    inputFirstName: 'input#client-first-name',
    inputLastName: 'input#client-last-name',
    inputDocument: 'input#client-document',
    inputAreaCodePhone: '[data-bind="visible: !hasDifferentPhone()"] > .input > #client-phone1',
    inputPhone: '#client-phone',
    chkTermsAndConditions: '#acepto-terminos-y-condiciones',
    btnGoToShipping: 'button#go-to-shipping',
  },

  SHIPPING_DATA: {
    cbmState: 'select#ship-state',
    cbmCity: 'select#ship-city',
    cmbAddressType: 'select#streetTypeSelector',
    zipCode: 'input#ship-postalCode',
    inputCustomStreet: 'input#ship-street',
    inputCustomNumber: 'input#ship-number',
    inputCustomStreetNumber: 'input#customStreetNumber',
    inputCustomStreetComplement: 'input#customStreetComplement',
    inputComplement: 'input#ship-complement',
    inputNeighborhood: 'input#ship-neighborhood',
    inputFullName: 'input#ship-receiverName',
    btnGoToPayment: 'button#btn-go-to-payment',
  },

  PAYMENT: {
    selectCreditCard: 
    'a#payment-group-creditCardPaymentGroup',
    selectMercadoPago: 'a#payment-group-MercadoPagoPaymentGroup',
    BANK: {
      bankInvoiceEfecty: 'label.bank-invoice-item-efecty',
    },
    btnBuyNow: `button#payment-data-submit span[data-i18n='paymentData.confirm']`,
    iframeCreditCard: '#iframe-placeholder-creditCardPaymentGroup > iframe',
    fieldCardNumber:
      '.iframe-credit-card-payment-group div .CardForm div.PaymentCardNumber #creditCardpayment-card-0Number',
  },
  ALERT: {
    firstNameAlert: '.client-first-name > .help',
    lastNameAlert: '.client-last-name > .help',
    phoneAlert: '[data-bind="visible: !hasDifferentPhone()"] > .help',
    documentAlert: '#client-profile-data > div > div.accordion-body.collapse.in > div > div > form > div > div > fieldset.box-client-info-pf > p:nth-child(5) > span',
    changeShippingData: '.unavailable-actions > [autofocus=""]',
  },
}

