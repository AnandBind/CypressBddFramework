import { config } from "../property/config.js";

    before('log-befor test',()=>{
      //cy.loginSokin(config.username,config.password)
    })

    beforeEach('after each steps in test',()=>{
      cy.visit(config.url)
      cy.viewport(1920, 1080); // Maximize window before each test
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
          const timestamp = new Date().toISOString().replace(/[-:.]/g, '_');  // Format the timestamp
          cy.screenshot(`failure_screenshot_${timestamp}`);
        }
      });
    
    after('after test complete',()=>{
        cy.log('this runs once after all test')
        cy.clearCookies();
        cy.clearLocalStorage();
    })
   