import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {login} from '../../../PageObjects/StudyBrowserObjects';
let loginPage = new login();

before(function(){
//Class initilize

})

after(function(){
//Class cleanup
})

beforeEach(function(){

//Test initialize
})

afterEach(function(){
//Test cleanup
})


Given('I launch the study browser web page', function(){
    Cypress.Cookies.debug(true)
    Cypress.Cookies.defaults({
        whitelist: 'sessions'
      })
      cy.setCookie('i18next','en-US')
      Cypress.Cookies.preserveOnce('i18next')
      cy.setCookie('amlbcookie','03')
      Cypress.Cookies.preserveOnce('amlbcookie')
      cy.setCookie('AWSELB','ABC927D91A91570E27CE7EBD307E13879E014A9B1A528AA4C84ECC14522159B1BF2759A0E10BDC6E5737B60621B52B427DE943096CE3495436CFEBE1D8F54984601501902E1888BD6F9A3718787502E8B099159C2E')
      Cypress.Cookies.preserveOnce('AWSELB')
      
    // preserving a cookie will not clear it when
    // the next test starts
    cy.setCookie('lastCookie', '789XYZ')
    Cypress.Cookies.preserveOnce('lastCookie')
    Cypress.Cookies.preserveOnce('i18next')
    Cypress.Cookies.preserveOnce('amlbcookie')
    Cypress.Cookies.preserveOnce('AWSELB')
  
    cy.visit('http://localhost:4200/', {failOnStatusCode: false})
    //cy.setCookie('lastCookie', '789XYZ')
    //Cypress.Cookies.preserveOnce('lastCookie')
    Cypress.Cookies.debug(true);
    Cypress.Cookies.preserveOnce()
   
    cy.wait(300000);
    cy.url().should('include', 'localhost:4200', {setTimeout : 10000})
})
Then('I type user name', ()=> {
    cy.wait(30000);
    loginPage.username().type('abhilash.kotabagi@philips.com');
})
Then('I type password', ()=> {
    loginPage.password().type('Casio@123');
})
Then('I click on login button', ()=> {
    loginPage.signButton().contains('Login').should('be.visible').click();
})
Then('Click on Logout', ()=>{
    loginPage.logoutButton().contains('Logout').should('be.visible').click();
})