import { verifyHomePage } from "../support/Expected.js";
import { CardGame } from "../models/pages/CardGame";
import { MavisHubHomePage } from "../models/pages/MavisHubHomePage";
let mhHomePage = new MavisHubHomePage();
let cardGame = new CardGame();

describe("Mavis Hub Home Page", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
    cy.wait(3000)
  });

  it("Login Page:", () => {
    cy.wait(5000);
    mhHomePage.checkAccountLoginSuccess.should("be.visible");
    cy.title().should("eq", "Mavis Hub");
  });

  it("Switched To Game Page", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    cy.title().should("eq", "Browse Game - Mavis Hub");
    cy.url().should("include", "/games");
    mhHomePage.dotBlue.should("be.visible");
    cy.wait(2000);
    cardGame.getAllCardGame().then((cardData) => {
      cy.wrap("").then(() => {
        cy.log(JSON.stringify(cardData));
        cy.writeFile("cypress/jsonfile/cardgame.json", cardData);
      });
    });
  });

  it("View All Game With Button Browse All Genres", () => {
    mhHomePage.searchBtnAllGenres.click({
      force: true,
      waitForAnimations: true,
    });
    cy.url().should("include", "/games");
    mhHomePage.dotBlue.should("be.visible");
    verifyHomePage();
  });

  it("Search Popular Genres With Early Access", () => {
    mhHomePage.searchBtnEarlyAccess
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxEarlyAccess.should("be.checked");
    cy.url().should("include", "/games?genre=early-access");
    verifyHomePage();
  });

  it("Search Popular Genres With Turn Based", () => {
    mhHomePage.searchBtnTurnBased
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxTurnBased.should("be.checked");
    cy.url().should("include", "/games?genre=turn-based");
    verifyHomePage();
  });

  it("Search Popular Genres With Strategy", () => {
    mhHomePage.searchBtnStrategy
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxStrategy.should("be.checked");
    cy.url().should("include", "/games?genre=strategy");
    verifyHomePage();
  });

  it("Search Popular Genres With Adventure", () => {
    mhHomePage.searchBtnAdvenrure
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxAdventure.should("be.checked");
    cy.url().should("include", "/games?genre=adventure");
    verifyHomePage();
  });

  it("Search Popular Genres With RPG", () => {
    mhHomePage.searchBtnRPG
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxRPG.should("be.checked");
    cy.url().should("include", "/games?genre=rpg");
    verifyHomePage();
  });

  it("Search Popular Genres With MMORPG", () => {
    mhHomePage.searchBtnMMORPG
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMMORPG.should("be.checked");
    cy.url().should("include", "/games?genre=mmorpg");
    verifyHomePage();
  });

  it("Search Popular Genres With Action-RPG", () => {
    mhHomePage.searchBtnActionRPG
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxActionRPG.should("be.checked");
    cy.url().should("include", "/games?genre=action-rpg");
    verifyHomePage();
  });

  it("Search Popular Genres With 4x", () => {
    mhHomePage.searchBtnXXXX.scrollIntoView().should("be.visible");
    mhHomePage.searchBtnXXXX.should("be.visible")
    .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBox4x.should("be.checked");
    cy.url().should("include", "/games?genre=4x");
    verifyHomePage();
  });

  it("Search Popular Genres With Auto Battler", () => {
    mhHomePage.searchBtnAutoBattler.scrollIntoView().should("be.visible");
    mhHomePage.searchBtnAutoBattler.should("be.visible")
    .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxAutoBattler.should("be.checked");
    cy.url().should("include", "/games?genre=auto-battler");
    verifyHomePage();
  });

  it("Search Popular Genres With Battle Royale", () => {
    mhHomePage.searchBtnBattleRoyale.scrollIntoView().should("be.visible");
    mhHomePage.searchBtnBattleRoyale.should("be.visible")
    .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxBattleRoyale.should("be.checked");
    cy.url().should("include", "/games?genre=battle-royale");
    verifyHomePage();
  });

  it("Search Popular Genres With Puzzle", () => {
    mhHomePage.searchBtnPuzzle.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnPuzzle
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxPuzzle.should("be.checked");
    cy.url().should("include", "/games?genre=puzzle");
    verifyHomePage();
  });

  it("Search Popular Genres With Match-3", () => {
    mhHomePage.searchBtnMatch3.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnMatch3
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMatch3.should("be.checked");
    cy.url().should("include", "/games?genre=match-3");
    verifyHomePage();
  });

  it("Search Popular Genres With Merge", () => {
    mhHomePage.searchBtnMerge.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnMerge
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxMerge.should("be.checked");
    cy.url().should("include", "/games?genre=merge");
    verifyHomePage();
  });

  it("Search Popular Genres With Hypercasual", () => {
    mhHomePage.searchBtnHypercasual.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnHypercasual
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxHypercasual.should("be.checked");
    cy.url().should("include", "/games?genre=hypercasual");
    verifyHomePage();
  });

  it("Search Popular Genres With Sports", () => {
    mhHomePage.searchBtnSports.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnSports
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSports.should("be.checked");
    cy.url().should("include", "/games?genre=sports");
    verifyHomePage();
  });

  it("Search Popular Genres With Racing", () => {
    mhHomePage.searchBtnRacing.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnRacing
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxRacing.should("be.checked");
    cy.url().should("include", "/games?genre=racing");
    verifyHomePage();
  });

  it("Search Popular Genres With Fighting", () => {
    mhHomePage.searchBtnFighting.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnFighting
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxFighting.should("be.checked");
    cy.url().should("include", "/games?genre=fighting");
    verifyHomePage();
  });

  it("Search Popular Genres With Simulation", () => {
    mhHomePage.searchBtnSimulation.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnSimulation
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSimulation.should("be.checked");
    cy.url().should("include", "/games?genre=simulation");
    verifyHomePage();
  });

  it("Search Popular Genres With Survival", () => {
    mhHomePage.searchBtnSurvival.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnSurvival
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxSurvival.should("be.checked");
    cy.url().should("include", "/games?genre=survival");
    verifyHomePage();
  });

  it("Search Popular Genres With Build Battle", () => {
    mhHomePage.searchBtnBuildBattle.scrollIntoView().should("be.visible");
    cy.wait(5000);
    mhHomePage.searchBtnBuildBattle
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    mhHomePage.checkBoxBuildBattle.should("be.checked");
    cy.url().should("include", "/games?genre=build-and-battle");
    verifyHomePage();
  });

  it("Verify Button Start Voting Now! On Banner Greenlight", () => {
    mhHomePage.btnStartVotingNow.scrollIntoView().should("be.visible");
    cy.wait(2000);
    mhHomePage.btnStartVotingNow
      .should("be.visible")
      .click({ force: true, waitForAnimations: true });
    cy.title().should("eq", "Greenlight - Mavis Hub");
    cy.url().should("include", "/greenlight");
  });
});
