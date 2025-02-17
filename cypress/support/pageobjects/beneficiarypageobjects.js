import { config } from "../../property/config";
class beneficiaryPageObject {
  beneficiriyElement = {
    leftPannelModules: "ul li a span[class='menu-title']",
    addBeneficiaryButton: "button[aria-haspopup='menu']",
    sokinBeneficiary:"button[role='menuitem']:nth-child(1)",

  };

  isModulesVisiableAndClickable() {
    cy.get(leftPannelModules).should("be.visible");
  }

  clickOnAddBeneficiaryButton(){
    cy.get(this.beneficiriyElement.addBeneficiaryButton).click();
  }
  clickOnSokinBeneficiary(){
    cy.get(this.beneficiriyElement.sokinBeneficiary).click();
  }

  
  
}
export default beneficiaryPageObject;
