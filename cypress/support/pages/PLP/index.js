/// <reference types="Cypress" />

const elPlpPage = require('./elements').ELEMENTS

class PLPPage {
  visitPLP(linkPLP, siteTitle) {
    cy.visit(linkPLP)
    //cy.title().should('contain', siteTitle)
  }

  clickBtnOrderBy() {
    cy.wait(2500)
    cy.get(elPlpPage.btnselectOrderBy).click({ force: true })
  }

  clickBtnFilterMobile() {
    cy.wait(2500)
    cy.get(elPlpPage.btnFilterMobile).click({ force: true })
  }

  clickBtnFilterSubCategoryMobile() {
    cy.wait(2500)
    cy.log(elPlpPage.btnFilterSubCategoryMobile())
    cy.xpath(elPlpPage.btnFilterSubCategoryMobile())
      .should('exist')
      .click({ force: true })
  }

  clickBtnApplyMobile() {
    cy.wait(2500)
    cy.get(elPlpPage.btnApplyMobile).click({ force: true })
  }

  selectOrderBy(optionOrderBy) {
    cy.wait(2500)
    cy.xpath(elPlpPage.btnSelectOptionOrderBy(optionOrderBy))
      .should('exist')
      .click({ force: true })
  }

  selectFilterBy(optionFilterBy) {
    cy.wait(2500)
    cy.xpath(elPlpPage.checkFilterOrderBy(optionFilterBy))
      .should('exist')
      .click({ force: true })
  }

  validateProductCard() {
    cy.wait(2500)
    cy.get(elPlpPage.productCard).first().should('exist').should('be.visible')
  }

  validatePageOrdenation(orderBy) {
    cy.wait(2500)
    switch (orderBy) {
      case 'Ventas':
        cy.url().should('include', 'OrderByTopSaleDESC')
        break

      case 'Más reciente':
        cy.url().should('include', 'OrderByReleaseDate')
        break

      case 'Descuento':
        cy.url().should('include', 'OrderByBestDiscountDESC')
        break

      case 'Precios más alto':
        cy.url().should('include', 'OrderByPriceDESC')
        break

      case 'Precios más bajo':
        cy.url().should('include', 'OrderByPriceASC')
        break

      case 'Nombre, creciente':
        cy.url().should('include', 'OrderByNameASC')
        break

      case 'Nombre, decreciente':
        cy.url().should('include', 'OrderByNameDESC')
        break
    }
  }

  validateCheckBoxFiltersCheckedURL(optionFilterBy) {
    cy.wait(2500)
    cy.url().should('include', optionFilterBy)
  }

  validateCheckBoxFiltersChecked(optionFilterBy) {
    cy.wait(2500)
    cy.xpath(elPlpPage.checkFilterOrderBy(optionFilterBy)).should('be.checked')
  }

  addFisrtProductInWishlist() {
    cy.wait(10000)
    cy.get(elPlpPage.addProduct1InWishlist).click() 
    cy.wait(5000)
  }
  addSecondProductInWishlist() {
    cy.get(elPlpPage.addProduct2InWishlist).click()
    cy.wait(6000)
  }

  openWishlist() {
    cy.get(elPlpPage.openWishlistPlp).click()
    //cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand').contains('Legging Feminina Skin Adapt').should('be.visible')
    cy.get(elPlpPage.productsWishlist).contains('camiseta ampla neo john feminina 03 02 2553').should('be.visible')
    //cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-product-summary-2-x-nameContainer > .vtex-product-summary-2-x-productNameContainer > .vtex-product-summary-2-x-productBrand').contains('Legging Feminina Bolsos').should('be.visible')
    cy.get(elPlpPage.productsWishlist).contains('blusa justa frans off john john feminina off white 11 22 0304').should('be.visible')
  }

  validateButtonMostrarMais() {
    //cy.get(elPlpPage.btnShowMore).click()
    cy.get(elPlpPage.btnShowMore).scrollIntoView()
  }

  showMoreProducts() {
    cy.wait(5000)
    cy.get(elPlpPage.moreProductsCount).contains('32').should('be.visible')
  }

  showMoreProductsMobile() {
    cy.wait(5000)
    cy.get(elPlpPage.moreProductsCountMobile).contains('32').should('be.visible') 
  }

  validateButtonMostrarMaisMobile() {
    cy.get(elPlpPage.btnShowMoreMobile).click()
  }
}
export default new PLPPage()
