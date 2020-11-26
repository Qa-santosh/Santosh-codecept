Feature: User want to reset password

    I want to Reset password on marketcube.

Scenario: User is trying to reset Password
    Given User goes to marketcube login page
    When User clicks on forgotten password
    When User enters email
    When User clicks on Reset Password
    Then User should be on the marketcube LoginPage

Scenario: User is trying to reset Password without Email
    Given User goes to marketcube login page
    When User clicks on forgotten password
    When User clicks on Reset Password
    Then User should see Reset password page

Scenario: User is trying to reset Password with Wrong email 
    Given User goes to marketcube login page
    When User clicks on forgotten password
    When User enters Wrong email
    When User clicks on Reset Password
    Then User should see Invalid email provided

Scenario: User is trying to reset Password with spaces between the valid email
    Given User goes to marketcube login page
    When User clicks on forgotten password
    When User enters valid email with spaces inbetween the email
    When User clicks on Reset Password
    Then User should see please enter a valid email