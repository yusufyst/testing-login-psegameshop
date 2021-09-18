
Feature: Login di web PSEgamingshop

    As a User
    I want to Login

@success
    Scenario: Validasi fitur Login
    Given user masuk ke halaman login
    And user fill email field1
    And user fill password field1
    When user click login button1
    Then user see login page and login failed notification

