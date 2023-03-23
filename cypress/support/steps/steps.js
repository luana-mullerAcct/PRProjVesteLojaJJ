import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import MyAccount from '../pages/MyAccount'
import PdpPage from '../pages/Pdp'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import LoginPage from '../pages/Login'
import PLPPage from '../pages/PLP'

/*----------------------------------------------------------------------------------*/
/*FAKER */
var faker = require('faker')
/*Personal Data*/
const firstNameFaker = faker.name.firstName()
const lastNameFaker = faker.name.lastName()
const fullNameFaker = firstNameFaker + ' ' + lastNameFaker
const correctEmailFaker = faker.internet.email(firstNameFaker, lastNameFaker)
const invalidEmailFaker = faker.internet.email(
  firstNameFaker,
  lastNameFaker,
  '@invalidprovider'
)
const passwordFaker = faker.internet.password(16)
//const documentFaker = faker.helpers.replaceSymbolWithNumber('#########K')
const phoneFaker = faker.helpers.replaceSymbolWithNumber('11########')
/*Address Data*/
const customStreetFaker = faker.helpers.replaceSymbolWithNumber('###-### #####')
//const customStreetNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
const customNumberFaker = faker.helpers.replaceSymbolWithNumber('##')
//const customStreetComplementFaker = faker.helpers.replaceSymbolWithNumber('##')
const complementFaker = faker.address.direction()
///const neighborhookFaker = faker.lorem.word(12)
/*Cartões*/
const visaRandom = faker.helpers.replaceSymbolWithNumber('4000############')
const americanExpressRandom = faker.helpers.replaceSymbolWithNumber('37#############')
const dinersRandom = faker.helpers.replaceSymbolWithNumber('38############')
const cabalRandom = faker.helpers.replaceSymbolWithNumber('6042############')
const mastercardRandom = faker.helpers.replaceSymbolWithNumber('55##############')
//const cvvCardRandom = faker.helpers.replaceSymbolWithNumber('###')
/*Coupon*/
const invalidCoupon = faker.helpers.replaceSymbolWithNumber('TEST###')
/*FAKER */
/*----------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------*/
/*FIXTURES*/
import PLP from '../../fixtures/plp.json'
import itemsMenuAtendimento from '../../fixtures/itemsMenuAtendimento.json'
import itemsMenuAbout from '../../fixtures/itemsMenuAbout.json'
import itemsCategories from '../../fixtures/itemsCategories.json'
import itemsCategoriesMobile from '../../fixtures/itemsCategoriesMobile.json'
import itemsFooter from '../../fixtures/itemsFooter.json'
import linkLogoHeader from '../../fixtures/linkLogoHome.json'
import addressData from '../../fixtures/addressData.json'
import accessData from '../../fixtures/accessData.json'
import product from '../../fixtures/product.json'
import personalData from '../../fixtures/personalData.json'
import siteTitle from '../../fixtures/siteTitle.json'
import { address } from 'faker'
import Pdp from '../pages/Pdp'
//import { when } from 'cypress/types/jquery'


/*const itemsMenuAtendimento = require('../../fixtures/itemsMenuAtendimento.json')
const itemsMenuAbout = require('../../fixtures/itemsMenuAbout.json')
const itemsCategories = require('../../fixtures/itemsCategories.json')
const itemsCategoriesMobile = require('../../fixtures/itemsCategoriesMobile.json')
const itemsFooter = require('../../fixtures/itemsFooter.json')
const linkLogoHeader = require('../../fixtures/linkLogoHome.json')
const addressData = require('../../fixtures/addressData.json')
const accessData = require('../../fixtures/accessData.json')
const product = require('../../fixtures/product.json')*/
//const PLP = require('../../fixtures/plp.json')
/*FIXTURES*/
/*----------------------------------------------------------------------------------*/

Given("I'm on the home page", () => {
  HomePage.accessHomepage(siteTitle.title)
})

Given("I'm on the login page", () => {
  HomePage.accessHomepage(siteTitle.title)
  cy.wait(2500)
  LoginPage.acessLoginPage()
})

Given("I'm on the product list page", () => {
  PLPPage.visitPLP(PLP.url)
  cy.wait(2000)
})

Given('I have one item in the cart with {} units', (quantity) => {
  CartPage.accessCartPageWithProduct1(product[0].salesChannel, product[0].SKU, quantity)
})

Given('I have two items in the cart with {} units each one', (quantity) => {
  CartPage.accessCartPageWithProducts1and2(
    product[0].salesChannel,
    product[0].SKU,
    product[1].SKU,
    quantity
  )
})

Given('I add two items in the cart', () => {
  PdpPage.chooseSize2()
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  PdpPage.urlPDP(product[1].url)
  PdpPage.chooseSize3()
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
})

Given('I add two items in the cart mobile', () => {
  PdpPage.chooseSize2()
  PdpPage.clickBtnAddToCartMobile()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  PdpPage.urlPDP(product[1].url)
  PdpPage.chooseSize3()
  PdpPage.clickBtnAddToCartMobile()
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
})

Given("At IPhone XR I'm on the home page", () => {
  HomePage.urlHomeIphoneXR(siteTitle.title)
})

Given('At {}', (device) => {
  switch (device) {
    case 'Desktop':
      break
    case 'IPhoneXR':
      HomePage.viewPortPDPIphoneXR()
      break
    case 'SamsungS10':
      HomePage.viewPortPDPSamsungS10()
      break
  }
})

Given("I'm on the product detail page", () => {
  PdpPage.urlPDP(product[0].url)
})

Given("I'm on the cart with one product and {} units", (quantity) => {
  CartPage.accessCartPageWithProduct1(product[0].salesChannel, product[0].SKU, quantity)
})

When('I do login using correct email and password', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login using invalid format email', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(invalidEmailFaker)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login using invalid format email mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(invalidEmailFaker)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login using correct email and password mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect email and password', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(correctEmailFaker)
  HomePage.typePassword(accessData.incorrectPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect email and password mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(correctEmailFaker)
  HomePage.typePassword(accessData.incorrectPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect password', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.incorrectPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect password mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.incorrectPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect email', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(correctEmailFaker)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login using incorrect email mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPasswordmobile()
  HomePage.typeEmail(correctEmailFaker)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do Loggout from the site', () => {
  HomePage.clickBtnLoggedUser()
  HomePage.clickBtnLogoff()
})

When('I do Loggout from the site mobile', () => {
  MyAccount.accessMyAccountPage()
  MyAccount.selectLogout()
  MyAccount.logoutConfirmationMobile()
})

When('I request a password recover', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.clickRecoveryPassword()
  HomePage.typeEmailRecoveryPassword(correctEmailFaker)
  HomePage.clickBtnSendRecoveryPassword()
})

When('I search for the product on the search bar', () => {
  HomePage.typeSearchBar(product[0].Product)
})

When('I search for the product on the search bar mobile', () => {
  HomePage.typeSearchBarMobile(product[0].Product)
})

When('I search for a non-existent product mobile', () => {
  HomePage.typeSearchBarMobile(product[2].SKU)
})

When('I search for a non-existent product', () => {
  HomePage.typeSearchBar(product[2].Product)
})

When('Access the PDP', () => {
  SearchPage.clickFnSrcResult(product[0].SKU)
})

When('Add product to cart', () => {
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
})

When('I calculate shipping and proceed to checkout', () => {
  CartPage.clickBtnCalculateShipping()
  CartPage.selectCmbState(addressData[0].state)
  CartPage.selectCmbCity(addressData[0].city)
  CartPage.validateLblShippingCost('calculated')
  CartPage.clickBtnCartToOrderForm()
})

When('I proceed to checkout', () => {
  CartPage.clickBtnCartToOrderForm()
})

When('I fill in the checkout data', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2500)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without firstname', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2000)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  //CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without lastname', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2000)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  //CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without document', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2000)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  //CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without area code phone number', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2000)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I fill in the checkout data without phone number', () => {
  CheckoutPage.visitProfile()
  CheckoutPage.typeClientPreEmailProfile(correctEmailFaker)
  CheckoutPage.clickBtnPreEmail()
  cy.wait(2000)
  CheckoutPage.typeClientEmailProfile(correctEmailFaker)
  CheckoutPage.typeFirstNameProfile(firstNameFaker)
  CheckoutPage.typeLastNameProfile(lastNameFaker)
  CheckoutPage.typeDocumentProfile(personalData[0].documentID)
  //CheckoutPage.typePhoneProfile(phoneFaker)
  CheckoutPage.clickBtnGoToShipping()
})

When('I select the payment option Mercado Pago', () => {
  CheckoutPage.selectMercadoPago()
})

When('I add the product to the cart', () => {
 // Inclusão do Choose size
  PdpPage.chooseSize2()
  PdpPage.clickBtnAddToCart()
  CartPage.accessCartPage()
})

When('I add the product to the cart at mobile', () => {
  PdpPage.chooseSize2()
  PdpPage.clickBtnAddToCartMobile()
  cy.wait(2000)
})

When('I remove the item from cart', () => {
  CartPage.clickFnItemRemove(product[0].SKU)
})

When('I remove all items from cart', () => {
  CartPage.clickClearCart(product[0].SKU, product[1].SKU)
})

When('I add the quantity for {} units', (quantity) => {
  CartPage.clickXpFnIncrementQuantity(product[0].SKU, quantity)
})

When('I reduce the quantity for {} units', (quantity) => {
  CartPage.clickXpFnDecrementQuantity(product[0].SKU, quantity)
})

When('I access the product page {}', (product) => {
  HomePage.typeSearchBar(product)
  SearchPage.clickFnSrcResult(product)
})

When('The page is full loaded', () => {
  PdpPage.validateBtnAddToCart()
})

When('The page is full loaded in mobile', () => {
  PdpPage.validateBtnAddToCartMobile()
})

When('I type a invalid discount coupon', () => {
  CartPage.typeInputCartCoupon(invalidCoupon)
  CartPage.clickBtnCartCoupon()
})

When('I select the ordination by {}', (optionOrderBy) => {
  PLPPage.selectOrderBy(optionOrderBy)
})

When('I select the filter {}', (optionFilterBy) => {
  PLPPage.selectFilterBy(optionFilterBy)
})

When('I select the mobile filter {}', (optionFilterBy) => {
  PLPPage.clickBtnFilterMobile()
  PLPPage.clickBtnFilterSubCategoryMobile()
  PLPPage.selectFilterBy(optionFilterBy)
  PLPPage.clickBtnApplyMobile()
})

When('I access the about Electrolux menu', () => {
  HomePage.clickMenuCategoriesElectrolux()
  HomePage.clickAboutElectrolux()
})

When('I access the atendimento Electrolux menu', () => {
  HomePage.clickMenuCategoriesElectrolux()
  HomePage.clickAtendimentoElectrolux()
})

When('I access the category page {}', (categoryNew) => {
  category = categoryNew
  HomePage.validateCategoryLink(category)
})

When('I fill visa card number', () => {
  CheckoutPage.selectCreditCardPayment()
  CheckoutPage.typeCardNumberVisa(visaRandom)
})

When('I fill cabal card number', () => {
  CheckoutPage.selectCreditCardPayment()
  CheckoutPage.typeCardNumberCabal(cabalRandom)
})

When('I fill american express card number', () => {
  CheckoutPage.selectCreditCardPayment()
  CheckoutPage.typeCardNumberAmericanExpress(americanExpressRandom)
})

When('I fill mastercard card number', () => {
  CheckoutPage.selectCreditCardPayment()
  CheckoutPage.typeCardNumberMasterCard(mastercardRandom)
})

When('I fill dinners card number', () => {
  CheckoutPage.selectCreditCardPayment()
  CheckoutPage.typeCardNumberDinners(dinersRandom)
})

When('I edit my personal data - Gender M', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[0].documentID)
  MyAccount.typeHomePhone(personalData[0].phone)
  MyAccount.selectGender(personalData[0].gender)
  MyAccount.typeBirthDate(personalData[0].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I edit my personal data - Gender F', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[1].documentID)
  MyAccount.typeHomePhone(personalData[1].phone)
  MyAccount.selectGender(personalData[1].gender)
  MyAccount.typeBirthDate(personalData[1].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I edit my personal data - Without Gender', () => {
  MyAccount.clickEditPersonalData()
  MyAccount.typeName(firstNameFaker)
  MyAccount.typeLastName(lastNameFaker)
  MyAccount.typeDocument(personalData[0].documentID)
  MyAccount.typeHomePhone(personalData[0].phone)
  MyAccount.typeBirthDate(personalData[0].birthDate)
  MyAccount.clickSavePersonalData()
})

When('I calculate valid shipping', () => {
  CartPage.typeZipCode(addressData[0].zipCode)
})

When('I calculate invalid shipping', () => {
  CartPage.typeZipCode(addressData[2].zipCode)
  CartPage.clickBtnbtnCalculateShipping()
})

When('I calculate alphanumeric shipping', () => {
  CartPage.typeZipCode(addressData[3].zipCode)
  CartPage.clickBtnbtnCalculateShipping()
})

And('I fill the address data', () => {
  CheckoutPage.typeZipCode(addressData[0].zipCode)
  //CheckoutPage.typeCustomStreetShipping(customStreetFaker)
  CheckoutPage.typeCustomNumberShipping(customNumberFaker)
  CheckoutPage.typeComplementShipping(complementFaker)
  //CheckoutPage.selectCmbCity(addressData[0].city)
  CheckoutPage.typeFullNameShipping(fullNameFaker)
  CheckoutPage.clickBtnGoToPayment()
})


Then('I must be logged on the site', () => {
  HomePage.validateUserLogged('logged', accessData.cookieAuth)
})

Then('I must be logged on the site mobile', () => {
  HomePage.accessHomepage(siteTitle.title)
  HomePage.clickBtnLoginMobile()
  MyAccount.selectProfile()
  MyAccount.validateUserLoggedMobile(accessData.correctEmail, 'logged', accessData.cookieAuth)
})

Then('Must be informed that the data access are wrong', () => {
  HomePage.validateUserLogged('not logged', accessData.cookieAuth)
  HomePage.validateMsgLogin('Usuário e/ou senha incorretos')
})

Then('Must be informed that the data access are wrong mobile', () => {
  MyAccount.validateUserLoggedMobile(accessData.incorrectPassword, 'not logged', accessData.cookieAuth)
  HomePage.validateMsgLogin('Usuário e/ou senha incorretos')
})

Then('Must be informed that the email is in a invalid format', () => {
  HomePage.validateUserLogged('not logged', accessData.cookieAuth)
  HomePage.validateMsgLogin('Entre com um email válido')
})

Then('Must be informed that the email is in a invalid format mobile', () => {
  HomePage.validateUserLogged('not logged', accessData.cookieAuth)
  HomePage.validateMsgLogin('Entre com um email válido')
})

Then('I must not be logged into the site', () => {
  HomePage.validateUserLogged('not logged', accessData.cookieAuth)
})

Then('I must not be logged into the site mobile', () => {
  cy.wait(5000)
  HomePage.accessHomepage(siteTitle.title)
  MyAccount.validateUserLoggedMobile('not logged', accessData.cookieAuth)
})

Then('I input and confirm a new password', () => {
  HomePage.typeNewPasswordRecoveryPassword(passwordFaker)
  HomePage.typeConfirmNewPasswordRecoveryPassword(passwordFaker)
})

Then('The order must be successfully', () => {
  CheckoutPage.clickBtnBuyNow()
})

Then('I validate if the product is in the cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
})

Then('I validate if the product is not in the cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'not visible')
})

Then('I validate if is clean cart', () => {
  CartPage.validateCartEmpty()
})

Then('I validate if the two items are in cart', () => {
  CartPage.accessCartPage()
  CartPage.validateFnImgProduct1(product[0].SKU, 'visible')
  CartPage.validateFnImgProduct2(product[1].SKU, 'visible')
  
})

Then('I validate if the quantity has been changed to {}', (quantity) => {
  CartPage.validateXpFnItemQuantity(product[0].SKU, quantity)
})

Then('the product value is visible', () => {
  PdpPage.validatePrice()
})

Then('The product value is visible in mobile', () => {
  PdpPage.validatePriceMobile()
})

Then('The product image should be displayed', () => {
  PdpPage.validateImgPdpMainProductImage()
})

Then('The shipping table should be displayed', () => {
  PdpPage.validateShippingDataTable()
})

Then('The shipping table should not be displayed', () => {
  PdpPage.validateShippingDataTableNotAvailable()
})

Then('The discount coupon should be invalid', () => {
  CartPage.validateMsgCartInvalidDiscountCoupon(invalidCoupon)
  CartPage.validateEmpytInputCartCoupon()
})

Then('The product card should be visible', () => {
  PLPPage.validateProductCard()
})

Then('I validate the page ordenation by {}', (orderBy) => {
  PLPPage.validatePageOrdenation(orderBy)
})

Then('The filter parameter must be in the url {}', (optionFilterBy) => {
  PLPPage.validateCheckBoxFiltersCheckedURL(optionFilterBy)
})

Then('The filter parameter must be checked {}', (optionFilterBy) => {
  PLPPage.validateCheckBoxFiltersChecked(optionFilterBy)
})

Then('The mobile filter parameter must be checked {}', (optionFilterBy) => {
  PLPPage.clickBtnFilterMobile()
  PLPPage.clickBtnFilterSubCategoryMobile()
  PLPPage.validateCheckBoxFiltersChecked(optionFilterBy)
})

Then('I validate the about Electrolux links', () => {
  cy.wait(1000)
  itemsMenuAbout.forEach((itemsMenuAbout) => {
    HomePage.validateAboutMenuLinks(itemsMenuAbout.text, itemsMenuAbout.url)
  })
})

Then('I validate the Atendimento Electrolux links', () => {
  cy.wait(1000)
  itemsMenuAtendimento.forEach((itemsMenuAtendimento) => {
    HomePage.validateAtendimentoMenuLinks(
      itemsMenuAtendimento.text,
      itemsMenuAtendimento.url
    )
  })
})

Then('I validate the footer TF links', () => {
  cy.wait(2500)
  cy.scrollTo('bottom')
  itemsFooter.forEach((itemsFooter) => {
    HomePage.validateFooterLinks(itemsFooter.text, itemsFooter.url)
  })
})

Then('the store logo has a link to homepage', () => {
  HomePage.validateLinkHeaderToHome(linkLogoHeader.link)
})

Then('the store logo has a link to homepage mobile', () => {
  HomePage.validateLinkHeaderToHomeMobile(linkLogoHeader.link)
})

Then('No results should be displayed', () => {
  SearchPage.validateResultEmpty()
})

Then('I verify the categories available on menu', () => {
  HomePage.hoverMenuCategoriesElectrolux()
  cy.scrollTo('top')
  cy.wait(1000)
  itemsCategories.forEach((itemsCategories) => {
    HomePage.validateLinksOnMenuCategories(
      itemsCategories.text,
      itemsCategories.url
    )
  })
})

Then('I verify the categories available on menu mobile', () => {
  HomePage.clickMenuCategoriesElectrolux()
  itemsCategoriesMobile.forEach((itemsCategoriesMobile) => {
    HomePage.validateLinksOnMenuCategoriesMobile(
      itemsCategoriesMobile.text,
      itemsCategoriesMobile.url
    )
  })
})

Then('I verify the categories available on header menu', () => {
  itemsHeaderMenu.forEach((itemsHeaderMenu) => {
    HomePage.validateLinksOnHeaderMenuCategories(
      itemsHeaderMenu.text,
      itemsHeaderMenu.url
    )
  })
})

Then('I check if the address was added correctly', () => {
  MyAccount.validateAddressTable()
  //MyAccount.validateAddressSavedStreet(customStreetFaker)
  MyAccount.validateAddressSavedComplement(complementFaker)
  //MyAccount.validateAddressSavedCity(addressData[0].city)
  //The state is showed in upper case in front-end, but cypress is case sensitive
  //MyAccount.validateAddressSavedState(state)
  //MyAccount.validateAddressSavedCountry(addressData[0].country)
})

Then('I check if the personal data was edited correctly - Gender M', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[0].documentID)
  MyAccount.validateGenderSaved(personalData[0].gender2)
  MyAccount.validateBirthDate(personalData[0].birthDate)
  MyAccount.validateHomePhone(personalData[0].phone)
})

Then('I check if the personal data was edited correctly - Gender F', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[1].documentID)
  MyAccount.validateGenderSaved(personalData[1].gender2)
  MyAccount.validateBirthDate(personalData[1].birthDate)
  MyAccount.validateHomePhone(personalData[1].phone)
})

Then('I check if the personal data was edited correctly - Without Gender', () => {
  MyAccount.validateNameSaved(firstNameFaker)
  MyAccount.validateLastNameSaved(lastNameFaker)
  MyAccount.validateDocumentSaved(personalData[0].documentID)
  MyAccount.validateBirthDate(personalData[0].birthDate)
  MyAccount.validateHomePhone(personalData[0].phone)
})

Then('I check if the address was edited correctly', () => {
  MyAccount.validateAddressTable()
  //MyAccount.validateAddressSavedStreet(customStreetFaker)
  MyAccount.validateAddressSavedNumber(customNumberFaker)
  MyAccount.validateAddressSavedComplement(complementFaker)
  MyAccount.validateAddressSavedZipCode(addressData[1].zipCode)
  //MyAccount.validateAddressSavedCity(addressData[1].city)
  //The state is showed in upper case in front-end, but cypress is case sensitive
  //MyAccount.validateAddressSavedState(state)
  //MyAccount.validateAddressSavedCountry(addressData[1].country)
})

Then('I check that I am in the correct page', () => {
  MyAccount.validateMyOrdersPage()
})

Then('I check that I am in the correct page mobile', () => {
  MyAccount.validateMyOrdersPageMobile()
})

Then('I check if the address was deleted correctly', () => {
  MyAccount.validateAddressTable()
  MyAccount.validateDeletedAddressStreet(customStreetFaker)
  MyAccount.validateDeletedAddressComplement(complementFaker)
  MyAccount.validateDeletedAddressCity(addressData[1].city)
  //The state is showed in upper case in front-end, but cypress is case sensitive
  //MyAccount.validateAddressSavedState(state)
  //MyAccount.validateAddressSavedCountry(addressData[1].country)
})

Then('checkbox MASTERCARD must be selected', () => {
  CheckoutPage.validateCardNumberMastercard()
})

Then('checkbox VISA must be selected', () => {
  CheckoutPage.validateCardNumberVisa()
})

Then('checkbox DINNERS must be selected', () => {
  CheckoutPage.validateCardNumberDinners()
})

Then('checkbox AMERICANEXPRESS must be selected', () => {
  CheckoutPage.validateCardNumberAmericanExpress()
})

Then('checkbox CABAL must be selected', () => {
  CheckoutPage.validateCardNumberCabal()
})

Then('mandatory firstname alert is displayed', () => {
  CheckoutPage.validateFirstNameAlert()
})

Then('mandatory lastname alert is displayed', () => {
  CheckoutPage.validateLastNameAlert()
})

Then('mandatory document alert is displayed', () => {
  CheckoutPage.validateDocumentAlert()
})

Then('mandatory phone number alert is displayed', () => {
  CheckoutPage.validatePhoneAlert()
})

Then('The shipping table should not be displayed at Cart', () => {
  CartPage.validateShippingUnavailable()
})

Then('The shipping table should be displayed at Cart', () => {
  CartPage.validateShippingAvailable()
})

Then('The shipping should be invalid', () => {
  CartPage.validateShippingAlph()
})

And('On the product page calculate valid shipping', () => {
  PdpPage.typeZipCode(addressData[0].zipCode)
  PdpPage.clickBtnCalcShipping()
  PdpPage.validateShippingDataTable()
})

And('On the product page calculate invalid shipping', () => {
  PdpPage.typeZipCode(addressData[2].zipCode)
  PdpPage.clickBtnCalcShipping()
})

And('I Access the address page', () => {
  MyAccount.visitAddress()
})

And('I access the new address page', () => {
  MyAccount.clickNewAddress()
})

And('I Access my orders page', () => {
  MyAccount.visitMyOrders()
})

And('I Access the profile page', () => {
  MyAccount.visitProfile()
})

And('I add a new address', () => {
  MyAccount.typeZipCode(addressData[0].zipCode)
  //MyAccount.typeStreet(customStreetFaker)
  cy.wait(2500)
  MyAccount.typeNumber(customNumberFaker)
  MyAccount.typeComplement(complementFaker)
  //MyAccount.selectCity(addressData[0].city)
  MyAccount.typeReceiverName(fullNameFaker) 
  MyAccount.clickSaveNewAddress()
})

And('I edit an address', () => {
  MyAccount.clickEditAddress()
  MyAccount.typeZipCode(addressData[1].zipCode)
  //MyAccount.typeStreet(customStreetFaker)
  cy.wait(2500)
  MyAccount.typeNumber(customNumberFaker)
  MyAccount.typeComplement(complementFaker)
  //MyAccount.selectCity(addressData[1].city)
  MyAccount.typeReceiverName(fullNameFaker) 
  MyAccount.clickSaveEditedAddress()
})

And('I fill the address data', () => {
  CheckoutPage.typeCustomStreetShipping(customStreetFaker)
  CheckoutPage.typeCustomNumberShipping(customNumberFaker)
  CheckoutPage.typeComplementShipping(complementFaker)
  CheckoutPage.selectCmbState(addressData[0].state)
  CheckoutPage.selectCmbCity(addressData[0].city)
  CheckoutPage.typeFullNameShipping(fullNameFaker)
})

And('I access the edition address page', () => {
  MyAccount.clickEditAddress()
})

And('I see the promocional modal', () => {
  HomePage.closePromoModal()

And('On the product page share product', () =>{
  PdpPage.validateImgPdpShareProduct()
})

And('the button mostrar mais is visible', () => {
  PLPPage.validateButtonMostrarMais()
})
Then('The modal share should be displayed', () =>{
  PdpPage.validateModalShareProduct()
})

Then('The button wishlist should be displayed', () => {
  PdpPage.validateBtnWishlist()
})

Then('show more products', () =>{
  PLPPage.showMoreProducts()
})

And('the button mostrar mais is visible Mobile', () => {
  PLPPage.validateButtonMostrarMaisMobile()

})

Then('show more products Mobile', () =>{
  PLPPage.showMoreProductsMobile()
})

Then('two size must be selected', () =>{
  PdpPage.chooseSize()
  PdpPage.chooseSize2()
})

And('the first product is add in the Wishlist', () =>{
  PLPPage.addFisrtProductInWishlist()
})
And('the second product is add in the Wishlist', () =>{
  PLPPage.addSecondProductInWishlist()  
})
Then('the two products are in the Wishlist' , () =>{
  PLPPage.openWishlist()
})

When('I do login', () => {
  HomePage.clickBtnLogin()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

When('I do login on Mobile', () => {
  HomePage.clickBtnLoginMobile()
  HomePage.clickBtnLoginWithEmailPassword()
  HomePage.typeEmail(accessData.correctEmail)
  HomePage.typePassword(accessData.correctPassword)
  HomePage.clickBtnEnter()
})

})