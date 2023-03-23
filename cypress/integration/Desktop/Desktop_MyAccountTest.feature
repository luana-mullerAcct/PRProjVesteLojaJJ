@MyAccountTest @Desktop @RegressionTest
Feature: My Account tests TF - Desktop
	As a customer, I want to test the My Account functionalities on TF - Desktop



	@MyAccount @Desktop
	Scenario: At Desktop edit an address
		Given At Desktop
        And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password
        And I Access the address page
		And I edit an address
		Then I check if the address was edited correctly

	@MyAccount @Desktop
	Scenario: At Desktop edit personal data - Gender F
		Given At Desktop
        And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password
        And I Access the profile page
		When I edit my personal data - Gender F
		Then I check if the personal data was edited correctly - Gender F

	@MyAccount @Desktop
	Scenario: At Desktop edit personal data - Gender M
		Given At Desktop
        And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password
        And I Access the profile page
		When I edit my personal data - Gender M
		Then I check if the personal data was edited correctly - Gender M

	@MyAccount @Desktop
	Scenario: At Desktop check my orders
		Given At Desktop
        And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password
        And I Access my orders page
		Then I check that I am in the correct page


		@MyAccount @Desktop
	Scenario: At Desktop add a new address
		Given At Desktop
        And I'm on the home page
		And I see the promocional modal
		And I do login using correct email and password
        And I Access the address page
		And I access the new address page
		When I add a new address
		Then I check if the address was added correctly