// Verify result card game 
import { CardGame } from "../pages/CardGame";
const errorGameNotFound = {"errorCode":"GAME_NOT_FOUND","message":"Games not found"};
const urlAPI = Cypress.env("ENDPOINTAPI");
let cardGame = new CardGame();
export function verifyResultGreenLight() {
  cy.intercept("POST", urlAPI + "/v2/public/game-events/greenlight/games"+"?pageSize=18").as(
    "res"
  );
  cy.wait("@res");
  cy.get("@res").then((datagame) => {
    let status = datagame.response.statusCode;
    let nameGame = "";
    if (status === 200) {
      nameGame = datagame.response.body.data;
      nameGame = nameGame.map((item) => {
        return {
          itemName: item.game.name.replace("\n", ""),
        };
      });
      cy.log(JSON.stringify(nameGame));
      cardGame.getAllCardGame().then((cardData) => {
        cy.wrap("").then(() => {
          expect(cardData).to.be.deep.eq(nameGame);
        });
      });
    } else {
      nameGame = datagame.response.body;
      cy.log(JSON.stringify(nameGame));
      expect(nameGame).to.be.deep.equal(errorGameNotFound);
    }
  });
}


const Btn_Community = "//button[normalize-space()='Community']"
const Btn_Greenlight = "//button[normalize-space()='Greenlight']"
const Btn_Event = "//button[normalize-space()='Event']"
const Btn_Back_To_Mavis_Hub = "//span[normalize-space()='Back to Mavis Hub']"

export class MavisHubCommunityPage{
    get btnCommunity(){
        return cy.xpath(Btn_Community)
    }

    get btnGreenlight(){
        return cy.xpath(Btn_Greenlight)
    }

    get btnEvent(){
        return cy.xpath(Btn_Event)
    }

    get btnBackToMavisHub(){
        return cy.xpath(Btn_Back_To_Mavis_Hub)
    }
}