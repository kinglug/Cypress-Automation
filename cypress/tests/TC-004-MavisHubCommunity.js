import { MavisHubCommunityPage, verifyResultGreenLight } from "../models/pages/MavisHubCommunityPags";
import { MavisHubHomePage } from "../models/pages/MavisHubHomePage";
import { CardGame } from "../models/pages/CardGame";
import { MavisHubBrowsePage } from "../models/pages/MavisHubBrowsePage";
let mhCommunity = new MavisHubCommunityPage();
let mhHomePage = new MavisHubHomePage();
let cardGame = new CardGame();
let mhBrowsePage = new MavisHubBrowsePage();
const urlMH = Cypress.env("ENDPOINTMH");
describe("Mavis Hub Community Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Switched To GreenLight Page", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    cy.title().should("eq", "Greenlight - Mavis Hub");
    cy.url().should("include","/greenlight");
    cy.wait(2000);
    cardGame.getAllCardGame().then((cardData) => {
      cy.wrap("").then(() => {
        cy.log(JSON.stringify(cardData));
        cy.writeFile("cypress/jsonfile/greenlight.json", cardData);
      });
    });
  });
  it("Switched To Event Page", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnEvent.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    cy.title().should("eq", "Mavis Hub - Axie Jam 2023!");
    mhCommunity.btnBackToMavisHub.click({
      force: true,
      waitForAnimations: true,
    });
    mhHomePage.dotBlue.should("be.visible");
    cy.title().should("eq", "Mavis Hub");
  });

  it("Filter Game With Game Genre In GreenLight: Ealy Access", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxEarlyAccess.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=early-access"
    );
    cy.visit(urlMH + "greenlight?genre=early-access");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Turn Based', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxTurnBased.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=turn-based"
    );
    cy.visit(urlMH + "greenlight?genre=turn-based");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Strategy', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxStrategy.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=strategy"
    );
    cy.visit(urlMH + "greenlight?genre=strategy");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Adventure', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxAdventure.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=adventure"
    );
    cy.visit(urlMH + "greenlight?genre=adventure");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: RPG', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxRPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=rpg"
    );
    cy.visit(urlMH + "greenlight?genre=rpg");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Action RPG', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxActionRPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=action-rpg"
    );
    cy.visit(urlMH + "greenlight?genre=action-rpg");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: MMORPG', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMMORPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=mmorpg"
    );
    cy.visit(urlMH + "greenlight?genre=mmorpg");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: 4x', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBox4x.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=4x"
    );
    cy.visit(urlMH + "greenlight?genre=4x");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Auto Battler', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxAutoBattler.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=auto-battler"
    );
    cy.visit(urlMH + "greenlight?genre=auto-battler");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Battle Royale', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxBattleRoyale.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=battle-royale"
    );
    cy.visit(urlMH + "greenlight?genre=battle-royale");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Puzzle', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxPuzzle.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=puzzle"
    );
    cy.visit(urlMH + "greenlight?genre=puzzle");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Match 3', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMatch3.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=match-3"
    );
    cy.visit(urlMH + "greenlight?genre=match-3");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Merge', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMerge.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=merge"
    );
    cy.visit(urlMH + "greenlight?genre=merge");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Hypercasual', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxHypercasual.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=hypercasual"
    );
    cy.visit(urlMH + "greenlight?genre=hypercasual");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Sports', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSports.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=sports"
    );
    cy.visit(urlMH + "greenlight?genre=sports");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Racing', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxRacing.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=racing"
    );
    cy.visit(urlMH + "greenlight?genre=racing");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Fighting', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxFighting.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=fighting"
    );
    cy.visit(urlMH + "greenlight?genre=fighting");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Simulation', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSimulation.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=simulation"
    );
    cy.visit(urlMH + "greenlight?genre=simulation");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Survival', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSurvival.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=survival"
    );
    cy.visit(urlMH + "greenlight?genre=survival");
    verifyResultGreenLight();
  });

  it('Filter Game With Game Genre In GreenLight: Build And Battle', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxBuildBattle.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?genre=build-and-battle"
    );
    cy.visit(urlMH + "greenlight?genre=build-and-battle");
    verifyResultGreenLight();
  });

  it('Filter Game With Platform: Windows', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhBrowsePage.checkBoxPlatformWindows.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?platform=windows"
    );
    cy.visit(urlMH + "greenlight?platform=windows");
    verifyResultGreenLight();
  });

  it('Filter Game With Platform: MacOS', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhBrowsePage.checkBoxPlatformMacOS.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?platform=macos"
    );
    cy.visit(urlMH + "greenlight?platform=macos");
    verifyResultGreenLight();
  });

  it('Filter Game With Platform: Android', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhBrowsePage.checkBoxPlatformAndroid.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?platform=android"
    );
    cy.visit(urlMH + "greenlight?platform=android");
    verifyResultGreenLight();
  });

  it('Filter Game With Platform: IOS', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhBrowsePage.checkBoxPlatformIOS.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?platform=ios"
    );
    cy.visit(urlMH + "greenlight?platform=ios");
    verifyResultGreenLight();
  });

  it('Filter Game With Platform: WEB', () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    mhBrowsePage.checkBoxPlatformWeb.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/greenlight?platform=web"
    );
    cy.visit(urlMH + "greenlight?platform=web");
    verifyResultGreenLight();
  });
});
