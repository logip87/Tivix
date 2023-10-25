Feature: Car rent

  Background: 
    Given I visit car rent page
    Given I can see the car rent form
    When I select country "France"
    And I select city "Paris"
    And I enter model "Ursus C360"
    And I enter pick-up date
    And I enter drop-off date
    And I click on search button
    Then I should not see alert "Please fill pickup and drop off dates"

  Scenario: Search for example car model
