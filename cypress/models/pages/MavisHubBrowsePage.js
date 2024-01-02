// Verify result card game 
import { CardGame } from "../pages/CardGame";
const errorGameNotFound = {
  errorCode: "GAME_NOT_FOUND",
  message: "Game not found",
};
const urlAPI = Cypress.env("ENDPOINTAPI");
let cardGame = new CardGame();
export function verifyResult() {
  cy.intercept("POST", urlAPI + "/v2/public/games"+"?page=1&pageSize=18").as(
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
          itemName: item.name.replace("\n", ""),
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
      expect(nameGame).to.be.deep.eq(errorGameNotFound);
    }
  });
}

// Partnership
const Check_Box_Sky_Mavis_Games = "//input[@value='sky-mavis']";
const Check_Box_Studio_Partnership = "//input[@value='partner-studio']";
const Check_Box_Axie_Builder_Program = "//input[@value='axie-builder-program']";
const Check_Box_Community_Developer = "//input[@value='community-developer']";

// Platform
const Check_Box_Platform_Windows = "//input[@value='windows']";
const Check_Box_Platform_MacOS = "//input[@value='macos']";
const Check_Box_Platform_Android = "//input[@value='android']";
const Check_Box_Platform_IOS = "//input[@value='ios']";
const Check_Box_Platform_Web = "//input[@value='web']";

export class MavisHubBrowsePage {
  get checkBoxSkyMavisGames() {
    return cy.xpath(Check_Box_Sky_Mavis_Games);
  }

  get checkBoxStudioPartnership() {
    return cy.xpath(Check_Box_Studio_Partnership);
  }

  get checkBoxAxieBuilderProgram() {
    return cy.xpath(Check_Box_Axie_Builder_Program);
  }

  get checkBoxCommunityDeveloper() {
    return cy.xpath(Check_Box_Community_Developer);
  }

  get checkBoxPlatformWindows() {
    return cy.xpath(Check_Box_Platform_Windows);
  }

  get checkBoxPlatformMacOS() {
    return cy.xpath(Check_Box_Platform_MacOS);
  }

  get checkBoxPlatformAndroid() {
    return cy.xpath(Check_Box_Platform_Android);
  }

  get checkBoxPlatformIOS() {
    return cy.xpath(Check_Box_Platform_IOS);
  }

  get checkBoxPlatformWeb() {
    return cy.xpath(Check_Box_Platform_Web);
  }
}
