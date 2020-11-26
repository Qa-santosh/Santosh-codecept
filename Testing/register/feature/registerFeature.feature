Feature: User want to register on marketcube
I want to register into marketcube

Scenario: User is trying to register
    Given User goes to marketcube login page
    When User clicks on register here
    When User enters email
    When User enters password
    When User reEnter password
    When User clicks on I agree checkbox 
    When User clicks on register button
    Then User will be on login page
