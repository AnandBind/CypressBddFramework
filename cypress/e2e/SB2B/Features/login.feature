Feature: Check Login funcitonality


  Scenario: Verify login successfully with valid creadentials
    Given I login with username "valid" and password "valid"
    Then  I should view dashboard

 
  Scenario: Verify unable to login with valid email and password
    Given I login with valid username "valid" and invalid password "Invalid"
    Then  I should view error message "Invalid username and password."

   
  Scenario: Verify unable to login with invalid email and valid password
    Given I login with invalid username "valid" and valid password "valid"
    Then  I should view error message "Username or password is incorrect."


  Scenario: Verify unable login with white space user & password
    Given I login with username blanck "white space" and password blanck "white space"
    Then  I should view error message "User ID is required" and "Password is required"