Feature: Login

  Scenario: Invalid login
    Given I am in login page
    When I enter wrong login information
    Then I should get an error message

  Scenario: Valid Login
    Given I am in login page
    When I enter valid login info
    Then I should be directed to homepage

#  Scenario: Auto login
#    Given I log in to threepm
#    Then I should be directed to homepage

  Scenario: User should be able to create a 3p
    Given I am in login page
    When I enter valid login info
    And I click on "Create Third-Party"
    And I should be in create third party page
    And I choose first option from the list of client
    And I choose "Company Third-Party" option
    And I fill out the company third party form

  Scenario: Find a thirdparty by relationship status
    Given I am in login page
    When I enter valid login info
    And I click on "Third-Parties"
    And I search a thirdparty by relationship "Accepted"


