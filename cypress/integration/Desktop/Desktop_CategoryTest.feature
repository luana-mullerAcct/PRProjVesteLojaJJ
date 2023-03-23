@CategoryTest @Desktop @RegressionTest
Feature: Category tests TF - Desktop
	As a customer, I want to test the category functionalities on TF - Desktop

	Background:
        Given At Desktop
		When I'm on the product list page
		And I see the promocional modal

	@Category @Desktop
	Scenario: Validate product card
		Then The product card should be visible

	@Category @Desktop
	Scenario: Validate ordenation by Mais Vendidos
		When I select the ordination by Mais Vendidos
		Then I validate the page ordenation by Mais Vendidos
	
	@Category @Desktop
	Scenario: Validate ordenation by Mais recentes
		When I select the ordination by Mais recentes
		Then I validate the page ordenation by Mais recentes
	
	@Category @Desktop
	Scenario: Validate ordenation by Descontos
		When I select the ordination by Descontos
		Then I validate the page ordenation by Descontos
	
	@Category @Desktop
	Scenario: Validate ordenation by Maior preço
		When I select the ordination by Maior preço
		Then I validate the page ordenation by Maior preço
	
	@Category @Desktop
	Scenario: Validate ordenation by Menor preço
		When I select the ordination by Menor preço
		Then I validate the page ordenation by Menor preço
	
	@Category @Desktop
	Scenario: Validate ordenation by De A a Z
		When I select the ordination by De A a Z
		Then I validate the page ordenation by De A a Z
	
	@Category @Desktop
	Scenario: Validate ordenation by De Z a A
		When I select the ordination by De Z a A
		Then I validate the page ordenation by De Z a A

	#NOVAS INCLUSÕES

	@Category @Desktop
	Scenario: Validate Button Mostrar Mais
		And the button mostrar mais is visible
		Then show more products

	# @Category @Desktop
	# Scenario: Add 2 products at the Wishlist
	# 	When I do login
	# 	And the first product is add in the Wishlist
	# 	And the second product is add in the Wishlist
	# 	Then the two products are in the Wishlist
