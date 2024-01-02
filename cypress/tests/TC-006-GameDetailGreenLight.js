import { ProductDetailPage } from "../models/pages/ProductDetailPage";
import { ProductDetailGreenlightPage } from "../models/pages/ProductDetailGreenlightPage";
import SlugGameGreenLight from "../jsonfile/sluggameingreenlight.json";
let detailGame = new ProductDetailPage();
let detailGameGreenLight = new ProductDetailGreenlightPage();
let genres = "";
let detailGenres = "";
let collectibles = "";
let detailCollectibles = "";
const urlAPI = Cypress.env("ENDPOINTAPI");

describe("Game Detail", () => {
  beforeEach(() => {
    cy.visit("/greenlight");
    cy.wait(3000);
  });

  it("Verify Detail Game Infinity Soccer: The Ultimate Axie Champions", () => {
    detailGameGreenLight.gameInfinitySoccer.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gamesoccer
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGameGreenLight.btnSeeMore.click();
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Inter The Dungeon", () => {
    detailGameGreenLight.gameInterTheDungeon.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gamethedungeon
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie TactiCards", () => {
    detailGameGreenLight.gameAxieTactiCards.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gametacticards
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie Infinity: Culinary Wars", () => {
    detailGameGreenLight.gameAxieCulinaryWars.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gameculinarywars
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie Sky Smash", () => {
    detailGameGreenLight.gameAxieSkySmash.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gameskysmash
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", " ")).to.be.deep.eq(datagame.response.body.about.replaceAll("\n",""));
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie Infinity War", () => {
    detailGameGreenLight.gameAxieInfinityWar.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gameinfinitywar
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGameGreenLight.btnSeeMore.click();
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie Tri-force", () => {
    detailGameGreenLight.gameAxieTriForce.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gametriforce
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Axie Quest", () => {
    detailGameGreenLight.gameAxieQuest.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gameaxiequest
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      detailGame.textDescription.invoke("text").then((text) => {
        expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
          datagame.response.body.about.replaceAll("\n", "")
        );
      });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });

  it("Verify Detail Game Lunacia Cup", () => {
    detailGameGreenLight.gameLunaciaCup.click({
      force: true,
      waitForAnimations: true,
    });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept(
      "GET",
      urlAPI + "/v2/public/games/" + SlugGameGreenLight.gamelunaciacup
    ).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should("be.visible");
      detailGameGreenLight.btnYes
        .should("have.text", datagame.response.body.upvoteCount)
        .should("be.visible");
      detailGameGreenLight.btnNo.should("be.visible");
      // detailGame.textDescription.invoke("text").then((text) => {
      //   expect(text.trim().replaceAll("\n", "")).to.be.deep.eq(
      //     datagame.response.body.about.replaceAll("\n", "")
      //   );
      // });
      genres = datagame.response.body.genres;
      collectibles = datagame.response.body.collectibles;
      // Get genres in detail game
      genres = genres.map((item) => {
        return {
          text: item.name.replace("\n", ""),
        };
      });
      // Verify Genres display
      detailGame.menuGameGenres.then((genresDetailDisplay) => {
        cy.wrap("").then(() => {
          detailGenres = genresDetailDisplay;
          detailGenres = detailGenres.map((item) => {
            return {
              text: item.text.replace("\n", ""),
            };
          });
          expect(genres).to.be.deep.equal(detailGenres);
        });
      });
      // Get collectibles in detail game
      collectibles = collectibles.map((item) => {
        return {
          number: item.address.replace("\n", ""),
        };
      });
      // Verify Collectibles display
      detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
        cy.wrap("").then(() => {
          detailCollectibles = collectiblesDisplay;
          detailCollectibles = detailCollectibles.map((item) => {
            return {
              number: item.href,
            };
          });
          expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
        });
      });
    });
  });
});
