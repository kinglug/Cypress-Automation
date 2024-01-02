import { CardGame } from "../models/pages/CardGame";
import { ProductDetailPage } from "../models/pages/ProductDetailPage";
import SlugGame from "../jsonfile/sluggame.json"

let cardGame = new CardGame();
let detailGame = new ProductDetailPage();
let genres = "";
let detailGenres = "";
let collectibles = "";
let detailCollectibles = "";
const urlAPI = Cypress.env("ENDPOINTAPI");

describe("Game Detail", () => {
  beforeEach(() => {
    cy.visit("/games");
  });

  it("Verify Detail Game Random", () => {
    cy.title().should("eq", "Browse Game - Mavis Hub");
    cardGame.getAllCardGame().then((cardData) => {
      cy.wrap("").then(() => {
        cy.log(JSON.stringify(cardData));
        const randomGameTitle =
          cardData[Math.floor(Math.random() * cardData.length)];
        const titleGame = randomGameTitle.itemName.trim().replace("\n", "");
        cy.contains(titleGame).click();
        cy.wait(2000);
        detailGame.logoGame.should("be.visible");
        detailGame.btnShareWithFriends.should('be.visible')
        detailGame.titleGame.should("have.text", titleGame);
        detailGame.menuGameGenres.then((genres) => {
          cy.wrap("").then(() => {
            cy.log(JSON.stringify(genres));
          });
        });
      });
    });
  });

  it("Verify Detail Game Axie Infinity: Origins", () => {
    detailGame.gameOrigins.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gameorigins).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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
  
  it("Verify Detail Game Axie Infinity: Homeland", () => {
    detailGame.gameHomeLand.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gamehomeland).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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

  it("Verify Detail Game Axie Classic", () => {
    detailGame.gameClassic.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gameclassic).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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

  it("Verify Detail Game Axie Infinity: Raylights", () => {
    detailGame.gameRaylights.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gameraylights).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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

  it("Verify Detail Game Defenders of Lunacian Land", () => {
    detailGame.gameDoll.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gamedoll).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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

  // it("Verify Detail Game The Machines Arena", () => {
  //   detailGame.gameTMA.click({ force: true, waitForAnimations: true });
  //   detailGame.logoGame.should("be.visible");
  //   // Compare with response BE
  //   cy.url().then((url) => {
  //     cy.log("Current URL is: " + url);
  //     cy.visit(url);
  //   });
  //   cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gametma).as("data");
  //   cy.wait("@data");
  //   cy.get("@data").then((datagame) => {
  //     detailGame.titleGame.should("have.text", datagame.response.body.name);
  //     detailGame.btnShareWithFriends.should('be.visible')
  //     detailGame.textDescription.should("have.text", datagame.response.body.about.replace("\n\n\n\n", ""))
  //     genres = datagame.response.body.genres;
  //     collectibles = datagame.response.body.collectibles;
  //     // Get genres in detail game
  //     genres = genres.map((item) => {
  //       return {
  //         text: item.name.replace("\n", ""),
  //       };
  //     });
  //     // Verify Genres display
  //     detailGame.menuGameGenres.then((genresDetailDisplay) => {
  //       cy.wrap("").then(() => {
  //         detailGenres = genresDetailDisplay;
  //         detailGenres = detailGenres.map((item) => {
  //           return {
  //             text: item.text.replace("\n", ""),
  //           };
  //         });
  //         expect(genres).to.be.deep.equal(detailGenres);
  //       });
  //     });
  //     // Get collectibles in detail game
  //     collectibles = collectibles.map((item) => {
  //       return {
  //         number: item.address.replace("\n", ""),
  //       };
  //     });
  //     // Verify Collectibles display
  //     detailGame.menuGameCollectibles.then((collectiblesDisplay) => {
  //       cy.wrap("").then(() => {
  //         detailCollectibles = collectiblesDisplay;
  //         detailCollectibles = detailCollectibles.map((item) => {
  //           return {
  //             number: item.href,
  //           };
  //         });
  //         expect(collectibles.length).to.be.deep.eq(detailCollectibles.length);
  //       });
  //     });
  //   });
  // });

  it("Verify Detail Game Project T prototype", () => {
    detailGame.gameProjectT.click({ force: true, waitForAnimations: true });
    detailGame.logoGame.should("be.visible");
    // Compare with response BE
    cy.url().then((url) => {
      cy.log("Current URL is: " + url);
      cy.visit(url);
    });
    cy.intercept("GET", urlAPI + "/v2/public/games/" + SlugGame.gameproject).as("data");
    cy.wait("@data");
    cy.get("@data").then((datagame) => {
      detailGame.titleGame.should("have.text", datagame.response.body.name);
      detailGame.btnShareWithFriends.should('be.visible')
      detailGame.textDescription.should("have.text", datagame.response.body.about)
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
