@Checkout @Desktop @RegressionTest
Feature: Checkout tests TF - Desktop
	As a customer, I want to test the checkout functionalities on TF - Desktop

    Background:
        Given At Desktop 
        And I have one item in the cart with 1 units
        And I proceed to checkout

# VALIDAÇÃO DE DADOS PESSOAIS
    @Checkout @Desktop
	Scenario: Validade mandatory document alert is displayed
        And I fill in the checkout data without document
		Then mandatory document alert is displayed

    @Checkout @Desktop
	Scenario: Validade mandatory firstname alert is displayed
       And I fill in the checkout data without firstname
       Then mandatory firstname alert is displayed

    @Checkout @Desktop
	Scenario: Validade mandatory lastname alert is displayed
        And I fill in the checkout data without lastname
		Then mandatory lastname alert is displayed

    @Checkout @Desktop
	Scenario: Validade mandatory phone alert is displayed
        And I fill in the checkout data without phone number
		Then mandatory phone number alert is displayed

#VALIDAÇÃO BANDEIRA DE CARTÃO

    @Checkout @Desktop
    Scenario: Validade mastercard
        And I fill in the checkout data
        And I fill the address data
		When I fill mastercard card number
		Then checkbox MASTERCARD must be selected

    @Checkout @Desktop
	Scenario: Validade visa
        And I fill in the checkout data
        And I fill the address data
		When I fill visa card number
		Then checkbox VISA must be selected

    @Checkout @Desktop
	Scenario: Validade american express
        And I fill in the checkout data
        And I fill the address data
		When I fill american express card number
		Then checkbox AMERICANEXPRESS must be selected



    


# As bandeiras DINNERS, CABAL NÃO ESTÃO OPERACIONAIS NO PROJETO TF
#    @Checkout @Desktop
# 	Scenario: Validade dinners
#        And I fill in the checkout data
#        And I fill the address data
# 		When I fill dinners card number
# 		Then checkbox DINNERS must be selected

#    @Checkout @Desktop
#     Scenario: Validade cabal
#        And I fill in the checkout data
#        And I fill the address data
# 		When I fill cabal card number
# 		Then checkbox CABAL must be selected