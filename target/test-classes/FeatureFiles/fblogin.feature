@login
Feature: To validate facebook Functionality

  Background: 
    Given check fb function through chrome Browser

  @smoke
  Scenario: To validate login username and  password
   
    When To Validate invalid username and valid password
      | email | arun@kumar |
      | user  | arun       |
      | pass  |   12345678 |
    Then To click login button


  @sanity
  Scenario: To validate login with  username and  password
    When To Validate valid username and valid password
      | user   | pass              | email    |
      |  12234 | java@java         | java     |
      |   5678 | sql@sql           | sql      |
      | 901234 | selenium@selenium | selenium |
    Then To click login button
