Feature: Passing with TypeScript
    @Login
    Scenario: Login to studybrowser
    Given I launch the study browser web page
    Then I type user name
    And I type password
     |  username  | password  |
        |  qamilestone.academy@gmail.com | admin123  |
    Then I click on login button
    Then Click on Logout