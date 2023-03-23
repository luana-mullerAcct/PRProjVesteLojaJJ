@NavigationTest @Desktop @RegressionTest
Feature: Navigation tests TF - Desktop
	As a customer, I want to test the navigation functionalities on TF - Desktop

    Background:
        Given At Desktop

	@Navigation @Desktop
	Scenario: Validate footer TF links
	    When I'm on the home page
		And I see the promocional modal
		Then I validate the footer TF links

	@Navigation @Desktop
	Scenario: Test the redirection of the TF logo from Home to Home
		And I'm on the home page
		And I see the promocional modal
		Then the store logo has a link to homepage

	@Navigation @Desktop
	Scenario: Test the redirection of the TF logo from PLP to Home
		And I'm on the product list page
		And I see the promocional modal
		Then the store logo has a link to homepage

	@Navigation @Desktop
	Scenario: Test the redirection of the TF logo from PDP to Home
		And I'm on the product detail page
		And I see the promocional modal
		Then the store logo has a link to homepage

	@Navigation @Desktop
	Scenario: Test the search bar with non inexistent product
		And I'm on the home page
		And I see the promocional modal
		When I search for a non-existent product
		Then No results should be displayed

	@Navigation @Desktop
	Scenario: Browse for categories
		And I'm on the home page
		And I see the promocional modal
		Then I verify the categories available on menu

