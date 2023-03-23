export const ELEMENTS = {
  btnselectOrderBy:
    'span.vtex-search-result-3-x-filterPopupTitle',
  productCard:
    '.vtex-product-summary-2-x-imageNormal',
  btnFilterMobile:
    '.vtex-search-result-3-x-filterPopupArrowIcon--filter-mobile',
  btnApplyMobile:
    `.vtex-search-result-3-x-filterApplyButtonWrapper > .vtex-button > .vtex-button__label`,
  btnShowMore:
    '.vtex-search-result-3-x-buttonShowMore > .vtex-button',
  moreProductsCount:
    '.vtex-search-result-3-x-showingProductsCount',
  btnShowMoreMobile:
    '.vtex-search-result-3-x-buttonShowMore > .vtex-button',
  moreProductsCountMobile:
    '.vtex-search-result-3-x-showingProductsCount',
  addProduct1InWishlist:
    '[href="/calca--legging-feminina-skin-adapt-mescla-cinza/p"] .vtex-flex-layout-0-x-flexCol .vtex-wish-list-1-x-wishlistIconContainer .vtex-wish-list-1-x-wishlistIcon',
  addProduct2InWishlist:
    '[href="/calca-legging-feminina-bolsos-preta/p"] .vtex-flex-layout-0-x-flexCol .vtex-wish-list-1-x-wishlistIconContainer .vtex-wish-list-1-x-wishlistIcon',
  openWishlistPlp:
    '.vtex-flex-layout-0-x-flexCol > :nth-child(2) > .vtex-store-link-0-x-link > .vtex-store-link-0-x-childrenContainer > .v-mid',
  productsWishlist:
    '.vtex-product-summary-2-x-productNameContainer .vtex-product-summary-2-x-productBrand',
  btnSelectOptionOrderBy: (optionOrderBy) => `//button[text()='${optionOrderBy}']`,
  checkFilterOrderBy: (optionFilterBy) => `//input[@value='${optionFilterBy}']`,
  btnFilterSubCategoryMobile: () => `//span[text()='Color']`,
}
