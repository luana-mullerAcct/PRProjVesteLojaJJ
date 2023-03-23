@CategoryTest @Mobile @RegressionTest
Feature: Category tests TF - Mobile
	As a customer, I want to test the category functionalities on TF - Mobile


	@Category @Mobile @SamsungS10
	Scenario: Validate product card SamsungS10
		Given At SamsungS10
	    When I'm on the product list page
		And I see the promocional modal
		Then The product card should be visible

	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by Mais Vendidos SamsungS10
		Given At SamsungS10
	    And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by Mais Vendidos
		Then I validate the page ordenation by Mais Vendidos

	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by Mais recentes SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by Mais recentes
		Then I validate the page ordenation by Mais recentes

	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by Descontos SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by Descontos
		Then I validate the page ordenation by Descontos


	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by Maior preço SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by Maior preço
		Then I validate the page ordenation by Maior preço

	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by Menor preço SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by Menor preço
		Then I validate the page ordenation by Menor preço

	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by De A a Z SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by De A a Z
		Then I validate the page ordenation by De A a Z


	@Category @Mobile @SamsungS10
	Scenario: Validate ordenation by De Z a A SamsungS10
		Given At SamsungS10
	  	And I'm on the product list page
		And I see the promocional modal
		When I select the ordination by De Z a A
		Then I validate the page ordenation by De Z a A

	#NOVAS INCLUSÕES

	@Category @Mobile @SamsungS10
	Scenario: Validate Button Mostrar Mais SamsungS10
		Given At SamsungS10
	  	When I'm on the product list page
		And I see the promocional modal
		And the button mostrar mais is visible Mobile
		Then show more products Mobile

	# @Category @Mobile @SamsungS10
	# Scenario: Add 2 products at the Wishlist SamsungS10
	# 	Given At SamsungS10
	# 	When I'm on the product list page
	#  	And I see the promocional modal
	# 	When I do login on Mobile
	# 	And the first product is add in the Wishlist
	# 	And the second product is add in the Wishlist
	# 	Then the two products are in the Wishlist