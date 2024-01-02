import { CardPatchNotes } from "../models/pages/PatchNotes";
import { MavisHubHomePage } from "../models/pages/MavisHubHomePage";
import { ProductDetailPage } from "../models/pages/ProductDetailPage";
import { ProductDetailGreenlightPage } from "../models/pages/ProductDetailGreenlightPage";
import SlugGame from "../jsonfile/sluggame.json";

let mhHomePage = new MavisHubHomePage();
let patchNotes = new CardPatchNotes();
let detailGame = new ProductDetailPage();
let detailGameGreenLight = new ProductDetailGreenlightPage();
const urlAPI = Cypress.env("ENDPOINTAPI");
const urlMH = Cypress.env("ENDPOINTMH");
const errorVersionNotFound = {
  errorCode: "VERSION_NOT_FOUND",
  message: "Version not found",
};
describe("Patch Notes In Detail Game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Patch Notes Game Axie Infinity: Origins", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameOrigins.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gameorigins+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gameorigins+"/patchnotes?pageSize=5&page=1&desc=true"
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

  it("Verify Patch Notes Game Axie Infinity: Homeland", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameHomeLand.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gamehomeland+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gamehomeland+"/patchnotes?pageSize=5&page=1&desc=true"
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

  it("Verify Patch Notes Game Axie Classic", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameClassic.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gameclassic+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gameclassic+"/patchnotes?pageSize=5&page=1&desc=true"
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

  it("Verify Patch Notes Game Axie Infinity: Raylights", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameRaylights.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gameraylights+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gameraylights+"/patchnotes?pageSize=5&page=1&desc=true"
    ).as("res");
    cy.wait("@res");
    cy.get("@res").then((datagame) => {
      let status = datagame.response.statusCode;
      cy.log(status);
      if (status === 200) {
        patchNotes.getAllCardPatchNotes().then((tag) => {
          cy.wrap("").then(() => {
            expect(datagame.response.body.data[0].isLatest).to.be.deep.eq(true);
          });
        });
      } else {
        expect(datagame.response.body).to.be.deep.eq(errorVersionNotFound);
      }
    });
  });

  it("Verify Patch Notes Game Defenders of Lunacian Land", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameDoll.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gamedoll+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gamedoll+"/patchnotes?pageSize=5&page=1&desc=true"
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

  it("Verify Patch Notes Game Project T prototype", () => {
    mhHomePage.btnHome.trigger("mouseover");
    mhHomePage.btnDiscover.click({ force: true, waitForAnimations: true });
    detailGame.gameProjectT.click({ force: true, waitForAnimations: true });
    detailGameGreenLight.btnPatchNotes.click();
    // Compare with response BE show version latest
    cy.visit( urlMH + "games/"+SlugGame.gameproject+"?section=patchnotes");
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/"+SlugGame.gameproject+"/patchnotes?pageSize=5&page=1&desc=true"
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
