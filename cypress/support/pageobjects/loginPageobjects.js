import { config } from "../../property/config";
class loginPage {
  elements = {
    username: "#mat-input-0",
    password: "#mat-input-1",
    loginbutton: "button[type='submit']",
    sokinlogo: "#sokinLogoID",
    leftPannelModules: "span[class='menu-title']",
    addBeneficiary: "button[aria-haspopup='menu']"
    
  };
  enterUserName(email) {
    cy.get(this.elements.username,{timeout:config.timeout}).type(email);
  }

  enterPassword(pass) {
    cy.get(this.elements.password,{timeout:config.timeout}).type(pass);
  }

  clickOnlogbutton() {
    //cy.contains('Login').click();
    cy.get(this.elements.loginbutton, { timeout: config.timeout }).click();
  }
  isSokinLogDispaly() {
    cy.get(this.elements.sokinlogo, { timeout: config.timeout }).should(
      "be.visible"
    );
  }

  verifyInvalidLoginMessage(message) {
    cy.verifyDialogMessage(message);
  }
}
export default loginPage;
