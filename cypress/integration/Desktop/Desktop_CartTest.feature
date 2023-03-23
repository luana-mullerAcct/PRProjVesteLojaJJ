@CartTest @Desktop @RegressionTest
Feature: Cart tests TF - Desktop
    As a customer, I want to test the cart functionalities on TF - Desktop

    Background:
        Given At Desktop

    @Cart @Desktop
    Scenario: Add item to cart
        And I'm on the product detail page
        And I see the promocional modal
        When I add the product to the cart
        Then I validate if the product is in the cart

    @Cart @Desktop
    Scenario: Add two items to cart
        And I see the promocional modal
        And I'm on the product detail page
        When I add two items in the cart
        Then I validate if the two items are in cart

        @Cart @Desktop
    Scenario: Add item with two units
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I add the quantity for 4 units
        Then I validate if the quantity has been changed to 4
    
    @Cart @Desktop
    Scenario: Calculate invalid shipping at Cart
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I calculate invalid shipping
        Then The shipping table should not be displayed at Cart

    @Cart @Desktop 
    Scenario: Add invalid discount coupon
       And I see the promocional modal
       And I have one item in the cart with 1 units
       When I type a invalid discount coupon
        Then The discount coupon should be invalid

    @Cart @Desktop
    Scenario: Remove item from the cart
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I remove the item from cart
        Then I validate if the product is not in the cart

    @Cart @Desktop
    Scenario: Clear all cart
        And I see the promocional modal
        And I have two items in the cart with 1 units each one
        When I remove all items from cart
        Then I validate if is clean cart

    @Cart @Desktop
    Scenario: Reduce item units in the cart
        And I see the promocional modal
        And I have one item in the cart with 5 units
        When I reduce the quantity for 2 units
        Then I validate if the quantity has been changed to 2

    @Cart @Desktop
    Scenario: Calculate valid shipping at Cart
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I calculate valid shipping
        Then The shipping table should be displayed at Cart

    # #NOVAS INCLUSÕES

    @Cart @Desktop
    Scenario: Calculate alphanumeric shipping at Cart
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I calculate alphanumeric shipping
        Then The shipping should be invalid