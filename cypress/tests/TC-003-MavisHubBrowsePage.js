import { MavisHubBrowsePage, verifyResult } from "../models/pages/MavisHubBrowsePage";
import { MavisHubHomePage } from "../models/pages/MavisHubHomePage";
import { CardGame } from "../models/pages/CardGame";
import cardGameJS from "../jsonfile/cardgame.json";

let mhHomePage = new MavisHubHomePage();
let cardGame = new CardGame();
let mhBrowsePage = new MavisHubBrowsePage();
const urlMH = Cypress.env("ENDPOINTMH");

describe("Mavis Hub Browse Page", () => {
  beforeEach(() => {
    cy.visit("/games");
  });

  it("Verify All Game Card In Browse", () => {
    cy.title().should("eq", "Browse Game - Mavis Hub");
    mhHomePage.dotBlue.should("be.visible");
    cy.wait(5000);
    cardGame.getAllCardGame().then((cardData) => {
      cy.wrap("").then(() => {
        cy.log(JSON.stringify(cardData));
        expect(cardData).to.be.deep.equal(cardGameJS);
      });
    });
  });

  it("Filter Game With Partnership: Sky Mavis Games", () => {
    mhBrowsePage.checkBoxSkyMavisGames
      .click({ force: true, waitForAnimations: true, wait: 5000 })
      .should("be.checked");
    cy.url().should("include", "/games?partnershipType=sky-mavis");
    cy.visit(urlMH + "games?partnershipType=sky-mavis");
    verifyResult();
  });

  it("Filter Game With Partnership: Axie Builder Program", () => {
    mhBrowsePage.checkBoxAxieBuilderProgram
      .click({ force: true, waitForAnimations: true, wait: 5000 })
      .should("be.checked");
    cy.url().should(
      "include",
      "/games?partnershipType=axie-builder-program"
    );
    cy.visit(urlMH + "games?partnershipType=axie-builder-program");
    verifyResult();
  });

  it("Filter Game With Partnership: Studio Partnership", () => {
    mhBrowsePage.checkBoxStudioPartnership
      .click({ force: true, waitForAnimations: true, wait: 5000 })
      .should("be.checked");
    cy.url().should(
      "include",
      "/games?partnershipType=partner-studio"
    );
    cy.visit(urlMH + "games?partnershipType=partner-studio");
    verifyResult();
  });

  it("Filter Game With Partnership: Community Developer", () => {
    mhBrowsePage.checkBoxCommunityDeveloper
      .click({ force: true, waitForAnimations: true, wait: 5000 })
      .should("be.checked");
    cy.url().should(
      "include",
      "/games?partnershipType=community-developer"
    );
    cy.visit(urlMH + "games?partnershipType=community-developer");
    verifyResult();
  });

  it('Filter Game With Game Genre: Ealy Access', () => {
    mhHomePage.checkBoxEarlyAccess.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=early-access"
    );
    cy.visit(urlMH + "games?genre=early-access");
    verifyResult();
  });

  it('Filter Game With Game Genre: Turn Based', () => {
    mhHomePage.checkBoxTurnBased.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=turn-based"
    );
    cy.visit(urlMH + "games?genre=turn-based");
    verifyResult();
  });

  it('Filter Game With Game Genre: Strategy', () => {
    mhHomePage.checkBoxStrategy.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=strategy"
    );
    cy.visit(urlMH + "games?genre=strategy");
    verifyResult();
  });

  it('Filter Game With Game Genre: Adventure', () => {
    mhHomePage.checkBoxAdventure.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=adventure"
    );
    cy.visit(urlMH + "games?genre=adventure");
    verifyResult();
  });

  it('Filter Game With Game Genre: RPG', () => {
    mhHomePage.checkBoxRPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=rpg"
    );
    cy.visit(urlMH + "games?genre=rpg");
    verifyResult();
  });

  it('Filter Game With Game Genre: Action RPG', () => {
    mhHomePage.checkBoxActionRPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=action-rpg"
    );
    cy.visit(urlMH + "games?genre=action-rpg");
    verifyResult();
  });

  it('Filter Game With Game Genre: 4x', () => {
    mhHomePage.checkBox4x.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=4x"
    );
    cy.visit(urlMH + "games?genre=4x");
    verifyResult();
  });

  it('Filter Game With Game Genre: MMORPG', () => {
    mhHomePage.checkBoxMMORPG.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=mmorpg"
    );
    cy.visit(urlMH + "games?genre=mmorpg");
    verifyResult();
  });

  it('Filter Game With Game Genre: Auto Battler', () => {
    mhHomePage.checkBoxAutoBattler.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=auto-battler"
    );
    cy.visit(urlMH + "games?genre=auto-battler");
    verifyResult();
  });

  it('Filter Game With Game Genre: Battle Royale', () => {
    mhHomePage.checkBoxBattleRoyale.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=battle-royale"
    );
    cy.visit(urlMH + "games?genre=battle-royale");
    verifyResult();
  });

  it('Filter Game With Game Genre: Puzzle', () => {
    mhHomePage.checkBoxPuzzle.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=puzzle"
    );
    cy.visit(urlMH + "games?genre=puzzle");
    verifyResult();
  });

  it('Filter Game With Game Genre: Match-3', () => {
    mhHomePage.checkBoxMatch3.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=match-3"
    );
    cy.visit(urlMH + "games?genre=match-3");
    verifyResult();
  });

  it('Filter Game With Game Genre: Merge', () => {
    mhHomePage.checkBoxMerge.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=merge"
    );
    cy.visit(urlMH + "games?genre=merge");
    verifyResult();
  });

  it('Filter Game With Game Genre: Hypercasual', () => {
    mhHomePage.checkBoxHypercasual.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=hypercasual"
    );
    cy.visit(urlMH + "games?genre=hypercasual");
    verifyResult();
  });

  it('Filter Game With Game Genre: Sports', () => {
    mhHomePage.checkBoxSports.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=sports"
    );
    cy.visit(urlMH + "games?genre=sports");
    verifyResult();
  });

  it('Filter Game With Game Genre: Racing', () => {
    mhHomePage.checkBoxRacing.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=racing"
    );
    cy.visit(urlMH + "games?genre=racing");
    verifyResult();
  });

  it('Filter Game With Game Genre: Fighting', () => {
    mhHomePage.checkBoxFighting.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=fighting"
    );
    cy.visit(urlMH + "games?genre=fighting");
    verifyResult();
  });

  it('Filter Game With Game Genre: Simulation', () => {
    mhHomePage.checkBoxSimulation.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=simulation"
    );
    cy.visit(urlMH + "games?genre=simulation");
    verifyResult();
  });

  it('Filter Game With Game Genre: Survival', () => {
    mhHomePage.checkBoxSurvival.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=survival"
    );
    cy.visit(urlMH + "games?genre=survival");
    verifyResult();
  });

  it('Filter Game With Game Genre: Build and Battle', () => {
    mhHomePage.checkBoxBuildBattle.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?genre=build-and-battle"
    );
    cy.visit(urlMH + "games?genre=build-and-battle");
    verifyResult();
  });

  it('Filter Game With Platform: Windows', () => {
    mhBrowsePage.checkBoxPlatformWindows.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?platform=windows"
    );
    cy.visit(urlMH + "games?platform=windows");
    verifyResult();
  });

  it('Filter Game With Platform: MacOS', () => {
    mhBrowsePage.checkBoxPlatformMacOS.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?platform=macos"
    );
    cy.visit(urlMH + "games?platform=macos");
    verifyResult();
  });

  it('Filter Game With Platform: Android', () => {
    mhBrowsePage.checkBoxPlatformAndroid.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?platform=android"
    );
    cy.visit(urlMH + "games?platform=android");
    verifyResult();
  });

  it('Filter Game With Platform: IOS', () => {
    mhBrowsePage.checkBoxPlatformIOS.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?platform=ios"
    );
    cy.visit(urlMH + "games?platform=ios");
    verifyResult();
  });

  it('Filter Game With Platform: WEB', () => {
    mhBrowsePage.checkBoxPlatformWeb.click({ force: true, waitForAnimations: true, wait: 5000 }).should("be.checked");
    cy.url().should(
      "include",
      "/games?platform=web"
    );
    cy.visit(urlMH + "games?platform=web");
    verifyResult();
  });
});
