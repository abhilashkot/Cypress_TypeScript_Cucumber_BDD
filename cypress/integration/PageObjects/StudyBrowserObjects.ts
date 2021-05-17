export class login {

     userName = '#text-field-basic';
     passWord = '#text-field-password';
     signInButton = '#submitButton > .MuiButton-label';
     logOutButton = '.MuiToolbar-root > div:nth-last-child(1) > button > span'

    username(){
        return cy.get('#text-field-basic')
    }
    password(){
        return cy.get('#text-field-password')
    }
    signButton(){
        return cy.get('#submitButton > .MuiButton-label')
    }

    logoutButton(){
    return cy.get('.MuiToolbar-root > div:nth-last-child(1) > button > span')
    }
}
