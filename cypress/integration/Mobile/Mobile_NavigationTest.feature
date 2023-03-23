@NavigationTest @Mobile @RegressionTest
Feature: Navigation tests TF - Mobile
	As a customer, I want to test the navigation functionalities on TF - Mobile

	@Navigation @Mobile @SamsungS10
	Scenario: Test the redirection of the TF logo from PLP to Home - SamsungS10
		Given At SamsungS10 
		And I'm on the product list page
		And I see the promocional modal
		Then the store logo has a link to homepage mobile

	@Navigation @Mobile @SamsungS10
	Scenario: Test the redirection of the TF logo from Home to Home - SamsungS10
		Given At SamsungS10 
		And I'm on the home page
		And I see the promocional modal
		Then the store logo has a link to homepage mobile
	
	@Navigation @Mobile @SamsungS10
	Scenario: Test the redirection of the TF logo from PDP to Home - SamsungS10
		Given At SamsungS10 
		And I'm on the product detail page
		And I see the promocional modal
		Then the store logo has a link to homepage mobile
	
	@Navigation @Mobile @SamsungS10
	Scenario: Validate footer TF links - SamsungS10
		Given At SamsungS10 
	    When I'm on the home page
		And I see the promocional modal
		Then I validate the footer TF links

	@Navigation @Mobile @SamsungS10
	Scenario: Test the search bar with non inexistent product - SamsungS10
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		When I search for a non-existent product mobile
		Then No results should be displayed

	@Navigation @Mobile @SamsungS10
	Scenario: Browse for categories - SamsungS10
		Given At SamsungS10
		And I'm on the home page
		And I see the promocional modal
		Then I verify the categories available on menu mobile

	# NÃO EXECUTAR:
	
	# @Navigation @Mobile @SamsungS10
	# Scenario: Validate about TF links - SamsungS10
	# 	Given At SamsungS10
	#     And I'm on the home page
	# 	And I see the promocional modal
	# 	When I access the about TF menu
	# 	Then I validate the about TF links


	# @Navigation @Mobile @SamsungS10
	# Scenario: Validate Atendimento TF links - SamsungS10
	# 	Given At SamsungS10 
	#     And I'm on the home page
	# 	And I see the promocional modal
	# 	When I access the atendimento TF menu
	# 	Then I validate the Atendimento TF links


  





