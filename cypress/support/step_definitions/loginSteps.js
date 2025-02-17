import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageobjects/loginPageobjects";
import { config } from "../../property/config";


const ln = new loginPage();

Given("I login with username {string} and password {string}",(user, password) => {
    cy.login(config.username, config.password);
  }
);

Then("I should view dashboard", () => {
  ln.isSokinLogDispaly();
});

Then("I should view error message {string}",(message)=>{
  ln.verifyInvalidLoginMessage(message);
})

Given("I login with valid username {string} and invalid password {string}",(user,password)=>{
  cy.login(config.username,"Tes@123")
})

Given("I login with invalid username {string} and valid password {string}",(user,password)=>{
  cy.login("anand363@gmail.com",config.password)
})

Given("I login with username blanck {string} and password blanck {string}",(space1,space2)=>{
  cy.login(" "," ");
  cy.wait(5000)
  
})

Then("I should view error message {string} and {string}",(errormessage1,errormessage2)=>{
  cy.contains(errormessage1).should("be.visible").and("contain.text",errormessage1);
  cy.contains(errormessage2).should("be.visible").and("contain.text",errormessage2)
})