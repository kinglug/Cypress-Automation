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

/**
 * @memberof cy
 * @method login
 * */
import sha256 from "sha256";
Cypress.Commands.add('login',()=>{
    const urlAPI = Cypress.env('ENDPOINTAPI');
    const username = Cypress.env('USERNAMELOGIN');
    const password = Cypress.env('PASSWORD');
    const sha256Hash = sha256(password).toString();
    cy.request({
        url: urlAPI + "/v2/auth/login",
        method: 'POST',
        headers:{
            contentType: "application/json"
        },
        body:{
            email: username, password: sha256Hash
        }
    }).then(res =>{
        const accessToken = res.body.accessToken;
        const refreshToken = res.body.refreshToken;
        cy.log(accessToken);
        cy.log(refreshToken);
        cy.setCookie('refreshToken', refreshToken);
        cy.setCookie('accessToken', accessToken);
    })
})