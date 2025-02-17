Feature: Verify Beneficiaries Functionality

  Background:Verify login successfully with valid creadentials
    Given I login with username "valid" and password "valid"
    Then  I should view dashboard


  Scenario: Verify left pannel modules are display
    Then Verify following modules are display and clickable:
      | Dashboard           |
      | Transfer            |
      | Beneficiaries       |
      | Transaction History |
      | Maker Request       |
      | Sokin Pay           |
      | Direct Debit        |
      | Partner Portal      |

@skip
  Scenario: Verify left pannel modules are clickable
    Then Verify following modules are clickable:
      | Dashboard           |
      | Transfer            |
      | Beneficiaries       |
      | Transaction History |
      | Maker Request       |
      | Sokin Pay           |
      | Direct Debit        |
      | Partner Portal      |

  @skip
  Scenario: Verify UI Elements of Beneficiearies Page
    When I click on "Beneficiaries" module
    Then I should view following elements of beneficiaries page:
      | Beneficiary Name     |
      | Country              |
      | Account Number       |
      | Beneficiary ID       |
            #| Currency            |
      | Account Type         |
      | Add Beneficiary      |
      | External Beneficiary |

  @skip
  Scenario: Verify Different Add Beneficiearies Options
    When I click on "Beneficiaries" module
    And I click on the "Add Beneficiary" button
    Then I should view following add beneficiaries options:
      | Sokin Beneficiary    |
      | External Beneficiary |


    @skip
  Scenario: Verify UI Elements fo Add Beneficiearies Page
    When I click on "Beneficiaries" module
    When I click on Add Beneficiary button
    When I click on Sokin Beneficiary
    Then I should view following elements fo add beneficiaries:
      | Beneficiary Corporate ID |
      | Currency                 |

# Scenario: Verify Successfully Create Benefiecieari

  # on standered level of scenario written
#  @skip
#  Scenario: Verify Successful Creation of External Beneficiaries
#    Given I am on the "Beneficiaries" module
#    When I click on the "Add Beneficiary" button
#    And I select "External Beneficiaries" from the options
#    And I enter the following details for the external beneficiary:
#      | Field            | Value                   |
#      | Bank Country     | Austria                 |
#      | Currency         | Australian Dollar (AUD) |
#      | Beneficiary Name | Automation Test         |
#      | Account Name     | Test                    |
#      | Account Number   |                         |
#      | BIC (SWIFT)      |                         |
#    And I click on the "Save" button
#    Then I should see a success message "External Beneficiaries Added Successfully"

