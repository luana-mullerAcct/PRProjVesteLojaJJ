export const ELEMENTS = {
  loading: '.loading > .loading-img > .icon-spinner',
  btnCalculateShipping: '.srp-data > #shipping-calculate-link',
  btnOKCalculateShipping: '#cart-shipping-calculate',
  cmbShipState: 'select#ship-state',
  cmbShipCity: 'select#ship-city',
  lblShippingCost: 'label.srp-shipping-current-single',
  btnCartToOrderForm: '#cart-to-orderform',
  fnImgProduct: (skuid1) => 
  `#product-image-${skuid1}`,
  elCartFull: 'div#cartLoadedDiv div.cart',
  elCartEmpty: 'div#cartLoadedDiv div.empty-cart-content',
  inputCoupon: '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon',
  inputZipCode: '#ship-postalCode',
  lblShippingUnavailable: '.help',
  lblShippingAvailable: '.srp-result',
  lblShippingAlph: '.help',
  btnCoupon: '.full-cart > .summary-template-holder > .row-fluid > .span5 > .coupon-column > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add',
  msgInvalidDiscountCoupon: '.vtex-front-messages-detail',
  xpFnItemRemoveProduct1: (skuid1) =>
    `#item-remove-${skuid1}`,
  xpFnItemRemoveProduct2: (skuid2) =>
    `#item-remove-${skuid2}`,
  xpFnIncrementQuantity: (skuid1) =>
  `#item-quantity-change-increment-${skuid1}> .icon`,
  xpFnDecrementQuantity: (skuid1) =>
    `#item-quantity-change-decrement-${skuid1}> .icon`,
  xpFnItemQuantity: (skuid1) =>
    `#item-quantity-${skuid1}`
}