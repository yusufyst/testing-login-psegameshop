
Feature: Login on web PSEgamingshop

    As a User
    I want to Login

@success
    Scenario: Log in on Arkademy Website
        Given user browse login page
        And user fill email field
        And user fill password field
        When user click login button
        Then user can see dashboard page


