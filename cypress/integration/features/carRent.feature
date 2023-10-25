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
  Given I can see the car rent search results
  Then I can see the #: "1", Company: "Russell Inc", Model: "Ursus C360", License plate: "KUL 102" and Price per day: "26$" on the list
