@MyAccountTest @Mobile @RegressionTest
Feature: My Account tests TF - Mobile
	As a customer, I want to test the My Account functionalities on TF - Mobile


	@MyAccount @Mobile @SamsungS10
	Scenario: At SamsungS10 edit personal data - Gender F
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password mobile
		And I Access the profile page
		When I edit my personal data - Gender F
		Then I check if the personal data was edited correctly - Gender F

	@MyAccount @Mobile @SamsungS10
	Scenario: At SamsungS10 edit personal data - Gender M
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password mobile
		And I Access the profile page
		When I edit my personal data - Gender M
		Then I check if the personal data was edited correctly - Gender M


	@MyAccount @Mobile @SamsungS10
	Scenario: At SamsungS10 add a new address
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password mobile
		And I Access the address page
		And I access the new address page
		When I add a new address
		Then I check if the address was added correctly

	@MyAccount @Mobile @SamsungS10
	Scenario: At SamsungS10 edit an address
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password mobile
		And I Access the address page
		And I edit an address
		Then I check if the address was edited correctly


	@MyAccount @Mobile @SamsungS10
	Scenario: At SamsungS10 check my orders
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password mobile
		And I Access my orders page
		Then I check that I am in the correct page mobile