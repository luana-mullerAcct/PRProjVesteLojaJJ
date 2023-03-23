@CartTest @Mobile @RegressionTest
Feature: Cart tests TF - Mobile
    As a customer, I want to test the cart functionalities on TF - Mobile


   @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Add item to cart
        Given At SamsungS10
        And I'm on the product detail page
        When I add the product to the cart at mobile
        Then I validate if the product is in the cart
    
    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Add two items to cart
        Given At SamsungS10
        And I'm on the product detail page
        When I add two items in the cart mobile
        Then I validate if the two items are in cart

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Remove item from the cart
        Given At SamsungS10
        And I have one item in the cart with 1 units
        When I remove the item from cart
        Then I validate if the product is not in the cart

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Clear all cart
        Given At SamsungS10
        And I have two items in the cart with 1 units each one
        When I remove all items from cart
        Then I validate if is clean cart

       
    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Add item with two quantity
        Given At SamsungS10
        And I have one item in the cart with 1 units
        When I add the quantity for 4 units
        Then I validate if the quantity has been changed to 4

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Reduce item quantity in the cart
        Given At SamsungS10
        And I have one item in the cart with 5 units
        When I reduce the quantity for 2 units
        Then I validate if the quantity has been changed to 2

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 Calculate valid shipping at Cart
        Given At SamsungS10
        And I have one item in the cart with 1 units
        When I calculate valid shipping
        Then The shipping table should be displayed at Cart

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 invalid shipping at Cart
        Given At SamsungS10
        And I have one item in the cart with 1 units
        When I calculate invalid shipping
        Then The shipping table should not be displayed at Cart  

    
    #NOVAS INCLUSÕES

    @Cart @Mobile @SamsungS10
    Scenario: At SamsungS10 calculate alphanumeric shipping at Cart
        Given At SamsungS10
        And I see the promocional modal
        And I have one item in the cart with 1 units
        When I calculate alphanumeric shipping
        Then The shipping should be invalid    

   
   
   #  @Cart @Mobile @SamsungS10
   # Scenario: At SamsungS10 Add invalid discount coupon
    #    Given At SamsungS10
     #   And I have one item in the cart with 1 units
      #  When I type a invalid discount coupon
       # Then The discount coupon should be invalid
