Feature: Saucedemo Website

  Scenario: User sees error message when login without username
    Given User is located on the main page of saucedemo website
    When User clicks "Login" button
    Then User should see "Epic sadface: Username is required" error message
