@CheckoutTest @Mobile @RegressionTest
Feature: Checkout tests TF - Mobile
	As a customer, I want to test the checkout functionalities on TF - Mobile


    @Checkout @Mobile @SamsungS10
    Scenario: Validade visa - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
		When I fill visa card number
		Then checkbox VISA must be selected
	

    @Checkout @Mobile @SamsungS10
	Scenario: Validade american express - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
		When I fill american express card number
		Then checkbox AMERICANEXPRESS must be selected


    @Checkout @Mobile @SamsungS10
    Scenario: Validade mastercard - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data
        And I fill the address data
		When I fill mastercard card number
		Then checkbox MASTERCARD must be selected


    @Checkout @Mobile @SamsungS10
	Scenario: Validade mandatory firstname alert is displayed - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data without firstname
        Then mandatory firstname alert is displayed

    @Checkout @Mobile @SamsungS10
	Scenario: Validade mandatory lastname alert is displayed - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data without lastname
	    Then mandatory lastname alert is displayed

    @Checkout @Mobile @SamsungS10
	Scenario: Validade mandatory document alert is displayed - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data without document
	    Then mandatory document alert is displayed

    @Checkout @Mobile @SamsungS10
	Scenario: Validade mandatory phone alert is displayed - SamsungS10
        Given At SamsungS10 
        And I have one item in the cart with 1 units
        And I proceed to checkout
        And I fill in the checkout data without phone number
	    Then mandatory phone number alert is displayed

