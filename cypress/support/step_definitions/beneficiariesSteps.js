import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { config } from "../../property/config";
import beneficiaryPageObject from "../pageobjects/beneficiarypageobjects.js";
import "../commands"
const bn = new beneficiaryPageObject();

Then("Verify following modules are display and clickable:", (dataTable) => {
 
 });

Then("Verify following modules are clickable:", (dataTable) => {
  const modules = dataTable.raw().flat();
  modules.forEach((module) => {
    cy.contains(module).should("not.be.disabled");
  });
});

When("I click on {string} module", (moduleName) => {
  cy.contains(moduleName).should("be.visible").click();
});

Then("I should view following elements of beneficiaries page:", (dataTable) => {
  cy.wait(5000);
  const modules = dataTable.raw().flat();
  modules.forEach((module) => {
    cy.contains(module).should("be.visible");
  });
});

When("I click on Add Beneficiary button", () => {
  bn.clickOnAddBeneficiaryButton();
});

Then("I should view following add beneficiaries options:",(dataTable)=>{
  const optionsOfBeneficiriay=dataTable.raw().flat();
  optionsOfBeneficiriay.forEach(ele=>{
    cy.contains(ele).should("be.visible");
  })
});

When("I click on Sokin Beneficiary",()=>{
    bn.clickOnSokinBeneficiary();
})

Then("I should view following elements fo add beneficiaries:",(dataTable)=>{
    cy.verifyFollowingElementsVisible(dataTable);
})

Given("I am on the {string} module",(moduleName)=>{
  cy.contains(moduleName).should("be.visible").click();
})
