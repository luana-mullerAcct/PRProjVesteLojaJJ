@PdpTest @Desktop @RegressionTest
Feature: Product Detail Page tests TF - Desktop
	As a customer, I want to test the product detail page functionalities on TF - Desktop

    Background:
        Given At Desktop
		And I'm on the product detail page 
		When The page is full loaded
		And I see the promocional modal

	@Pdp @Desktop
	Scenario: At Desktop validate price block 
		Then the product value is visible

	@Pdp @Desktop
	Scenario: At Desktop validate product image
		Then The product image should be displayed

	@Pdp @Desktop
	Scenario: At Desktop Calculate valid shipping in the product page
		And On the product page calculate valid shipping
		Then The shipping table should be displayed

	@Pdp @Desktop
	Scenario: At Desktop Calculate invalid shipping in the product page
		And On the product page calculate invalid shipping
		Then The shipping table should not be displayed

	#NOVAS INCLUSÕES
	
	@Pdp @Desktop
	Scenario: At Desktop Share Product
		And On the product page share product
		Then The modal share should be displayed

	@Pdp @Desktop
	Scenario: At Desktop validate button wishlist
		Then The button wishlist should be displayed

	@Pdp @Desktop
	Scenario: At Desktop validate size selector
		Then two size must be selected