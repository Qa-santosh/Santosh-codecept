Feature: User want to login
     
     I want to login into marketcube

   Scenario: User is trying to login
       Given User goes to marketcube login page
       When User enters valid email
       When User enters valid password
       When User clicks on login button
       Then User should be on the marketcube dashboard
 
    Scenario: User is trying to login without password
       Given User goes to marketcube login page
       When user enters valid email
    #   When User clicks on login button
       Then user should be on marketcube login page
   
    Scenario: User is trying to login without email
        Given User goes to marketcube login page
        When User enters valid password
    #    When User clicks on login button
        Then User should get email field required message

    Scenario: User is trying to login with invalid email and invalid password
         Given User goes to marketcube login page
         When User enters invalid email
         When User enters invalid password
         When User clicks on login button
         Then User should get Invalid credentials provided message

 
 
 