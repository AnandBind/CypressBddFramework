// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types ="cypress" />
///<reference types="cypress-xpath" />

import { DataTable } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./pageobjects/loginPageobjects";
Cypress.Commands.add("login", (username, password) => {
  const ln = new loginPage();
  ln.enterUserName(username);
  ln.enterPassword(password);
  ln.clickOnlogbutton();
  //cy.wait(8000)
});

Cypress.Commands.add("verifyFollowingElementsVisible", (dataTable) => {
  const modules = dataTable.raw().flat();
  modules.forEach((module) => {
    cy.contains(module).should("be.visible");
  });
});

// Verify Dialog message
Cypress.Commands.add("verifyDialogMessage", (expectedMessage) => {
  // cy.xpath("//div[@role='dialog']/div[2]").should('be.visible')
  // .and('contain.text',expectedMessage);
});
