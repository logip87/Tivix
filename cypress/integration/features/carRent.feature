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
    Then I can see the #: "1", Company: "Russell Inc", Model: "Ursus C360", License plate: "KUL 102", Price: "26$" and Price per day: "26$" on the list

  Scenario: Check car rent summary
    Given I can see the car rent search results
    When I click on rent button
    Then I should see car rent summary page
    Then I should see summary header "Ursus C360"
    Then I should see summary title "Company: Russell Inc"
    Then I should see summary text "Price per day: 26$"
    Then I should see summary text "Location: France, Paris"
    Then I should see summary text "License plate: KUL 102"
    Then I should see text "Pickup date: currentDate"
    Then I should see text "Dropoff date: tomorrowsDate"

  Scenario: Fill personal data form and complete rental process
    Given I can see the car rent search results
    Given I click on rent button
    Given I click on rent button on summary page
    Given I can see car rent personal data form
    Then I should see summary title "Company: Russell Inc"
    Then I should see summary text "Price per day: 26$"
    Then I should see summary text "Location: France, Paris"
    Then I should see summary text "License plate: KUL 102"
    Then I should see text "Pickup date: currentDate"
    Then I should see text "Dropoff date: tomorrowsDate"
    When I enter name "John"
    And I enter last name "Doe"
    And I enter card number "1111222233334444"
    And I enter email "john.doe@test.com"
    When I click on rent button on personal data form page
