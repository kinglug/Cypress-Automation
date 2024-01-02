import { MavisHubHomePage } from "../models/pages/MavisHubHomePage";
let mhHomePage = new MavisHubHomePage();
const urlMH = Cypress.env("ENDPOINTMH");
export function verifyHomePage() {
  cy.title().should("eq", "Browse Game - Mavis Hub");
  mhHomePage.btnBackToHome
    .should("be.visible")
    .click({ force: true, waitForAnimations: true });
  cy.url().should("eq", urlMH);
  cy.title().should("eq", "Mavis Hub");
}
