import { CardPatchNotes } from "../models/pages/PatchNotes";
import { ProductDetailGreenlightPage } from "../models/pages/ProductDetailGreenlightPage";
import SlugGameGreenLight from "../jsonfile/sluggameingreenlight.json";
import { MavisHubCommunityPage } from "../models/pages/MavisHubCommunityPags";
let mhCommunity = new MavisHubCommunityPage();
let patchNotes = new CardPatchNotes();
let detailGameGreenLight = new ProductDetailGreenlightPage();
const urlAPI = Cypress.env("ENDPOINTAPI");
const urlMH = Cypress.env("ENDPOINTMH");
const errorVersionNotFound = {
  errorCode: "VERSION_NOT_FOUND",
  message: "Version not found",
};
describe("Patch Notes In Detail Game GreenLight", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Patch Notes Game Axie TactiCards", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieTactiCards.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gametacticards +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gametacticards +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Infinity Soccer: The Ultimate Axie Champions", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameInfinitySoccer.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH + "games/" + SlugGameGreenLight.gamesoccer + "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gamesoccer +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Inter The Dungeon", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameInterTheDungeon.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gamethedungeon +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gamethedungeon +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Axie Infinity War", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieInfinityWar.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gameinfinitywar +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gameinfinitywar +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Axie Infinity: Culinary Wars", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieCulinaryWars.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gameculinarywars +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gameculinarywars +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Axie Sky Smash", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieSkySmash.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH + "games/" + SlugGameGreenLight.gameskysmash + "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gameskysmash +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Axie Tri-force", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieTriForce.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH + "games/" + SlugGameGreenLight.gametriforce + "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gametriforce +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Axie Quest", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameAxieQuest.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gameaxiequest +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gameaxiequest +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Lunacia Cup", () => {
    mhCommunity.btnCommunity.trigger("mouseover");
    mhCommunity.btnGreenlight.click({ force: true, waitForAnimations: true });
    cy.wait(2000);
    detailGameGreenLight.gameLunaciaCup.click({
      force: true,
      waitForAnimations: true,
    });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit(
      urlMH +
        "games/" +
        SlugGameGreenLight.gamelunaciacup +
        "?section=patchnotes"
    );
    cy.intercept(
      "GET",
      urlAPI +
        "/v2/public/games/" +
        SlugGameGreenLight.gamelunaciacup +
        "/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
            expect(tag[0].itemTitle).to.be.deep.eq(
              datagame.response.body.data[0].patchNotes.title
            );
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });
});
