// 1 steps to configur project after installed ,cypress ,xpath,cucumber
// 2 config cypress.config.js (this is base configure to access file under e2e by defuld but bdd need to configure)
// 3 upadate package.json ,define the folder name which will accecss after open e2e
// 4 need to add property >> config.js and store url and password
// 5 hooks.js creates under support and cy.visit() ,call url under the visit
// create pagebject for login and for login add/create commands.js  

export const config={
    url:'https://portal.uat.transfer.com/',
    username:'anand@nuagebiz.tech',
    password:'Nuage@123',
    browser:'chrome',
    timeout:10000,
    pageloadtimeout:'60000',
    requestTimeout:'160000'
};