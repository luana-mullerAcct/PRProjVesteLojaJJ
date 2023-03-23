@LoginTest @Mobile @RegressionTest
Feature: Login tests TF - Mobile
    As a customer, I want to test the login functionalities on TF - Mobile


    @Login @Mobile @SamsungS10
    Scenario: At SamsungS10 Login with valid e-mail and password
        Given At SamsungS10 
        And I'm on the home page
        And I see the promocional modal
        When I do login using correct email and password mobile
        Then I must be logged on the site mobile

    @Login @Mobile @SamsungS10
    Scenario: At SamsungS10 Login with incorrect password
        Given At SamsungS10 
        And I'm on the home page
        And I see the promocional modal
        When I do login using incorrect password mobile
        Then Must be informed that the data access are wrong mobile

    @Login @Mobile @SamsungS10
    Scenario: At SamsungS10 Login with incorrect email
        Given At SamsungS10 
        And I'm on the home page
        And I see the promocional modal
        When I do login using incorrect email mobile
        Then Must be informed that the data access are wrong mobile


    @Login @Mobile @SamsungS10
    Scenario: At SamsungS10 Login with incorrect email and password
        Given At SamsungS10 
        And I'm on the home page
        And I see the promocional modal
        When I do login using incorrect email and password mobile
        Then Must be informed that the data access are wrong mobile

    @Login @Mobile @SamsungS10
    Scenario: Login with invalid email format - SamsungS10
        Given At SamsungS10
        And I'm on the home page
        And I see the promocional modal
        When I do login using invalid format email mobile
        Then Must be informed that the email is in a invalid format

    @Login @Mobile @SamsungS10
    Scenario: At SamsungS10 Loggout
        Given At SamsungS10 
        And I'm on the home page
        And I see the promocional modal
        And I do login using correct email and password mobile
        And I must be logged on the site mobile
        When I do Loggout from the site mobile
        Then I must not be logged into the site mobile