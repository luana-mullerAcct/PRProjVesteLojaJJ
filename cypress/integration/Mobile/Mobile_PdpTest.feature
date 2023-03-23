@PdpTest @Mobile @RegressionTest
Feature: Product Detail Page tests TF - Mobile
	As a customer, I want to test the product detail page functionalities on TF - Mobile

	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 Calculate invalid shipping in the product page
		Given At SamsungS10
		And I'm on the product detail page
		When The page is full loaded in mobile
		And I see the promocional modal
		And On the product page calculate invalid shipping
		Then The shipping table should not be displayed


	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 validate price block
		Given At SamsungS10
		And I'm on the product detail page
		When The page is full loaded in mobile
		And I see the promocional modal
		Then The product value is visible in mobile


	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 validate product image
		Given At SamsungS10
		And I'm on the product detail page
		When The page is full loaded in mobile
		And I see the promocional modal
		Then The product image should be displayed

	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 Calculate valid shipping in the product page
		Given At SamsungS10
		And I'm on the product detail page
		When The page is full loaded in mobile
		And I see the promocional modal
		And On the product page calculate valid shipping
		Then The shipping table should be displayed

	#NOVAS INCLUSÕES
	
	@Pdp @Mobile @IPhoneXR
	Scenario: At IPhoneXR Share Product
		Given At IPhoneXR
		And On the product page share product
		Then The modal share should be displayed

	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 validate button wishlist
		Given At SamsungS10
		Then The button wishlist should be displayed

	@Pdp @Mobile @SamsungS10
	Scenario: At SamsungS10 validate size selector
		Given At SamsungS10
		Then two size must be selected