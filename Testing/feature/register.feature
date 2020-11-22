Feature: User want to register on marketcube
I want to register into marketcube

Scenario: User is trying to register
    Given User goes to marketcube login page
    When User clicks on login button
    When User clicks on proceed as vendor
    When User enters valid email
    When User enters valid password
    When User enters confirm valid password
    When User clicks on I agree checkbox 
    When User clicks on register button
    Then User sucessfully register
