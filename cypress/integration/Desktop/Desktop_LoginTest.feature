@LoginTest @Desktop @RegressionTest
Feature: Login tests TF - Desktop
    As a customer, I want to test the login functionalities on TF - Desktop

    Background:
        Given At Desktop 
        And I'm on the home page
        And I see the promocional modal

    @Login @Desktop
    Scenario: Login with valid e-mail and password
        When I do login using correct email and password
        Then I must be logged on the site

    @Login @Desktop
    Scenario: Login with incorrect password
        When I do login using incorrect password
        Then Must be informed that the data access are wrong

    @Login @Desktop
    Scenario: Login with incorrect email
        When I do login using incorrect email
        Then Must be informed that the data access are wrong

    @Login @Desktop
    Scenario: Login with incorrect email and password
        When I do login using incorrect email and password
        Then Must be informed that the data access are wrong

    @Login @Desktop
    Scenario: Login with invalid email format
        When I do login using invalid format email
        Then Must be informed that the email is in a invalid format

    @Login @Desktop
    Scenario: Loggout
        And I do login using correct email and password
        And I must be logged on the site
        When I do Loggout from the site
        Then I must not be logged into the site