const Title_Game = "//div[starts-with(@class,'_display')]";
const Logo_Game = "//div[starts-with(@class,'_absoluteLayer')]//figure//img";
const Btn_Share_With_Friends = "//button[normalize-space()='Share with friends']";
const Text_Description = "//div[@class='prose']";
// List Game
const Game_Axie_Origins = "//div[normalize-space()='Axie Infinity: Origins']";
const Game_Axie_HomeLand = "//div[normalize-space()='Axie Infinity: Homeland']";
const Game_Origins_Esports_Server = "//div[normalize-space()='Origins Esports Server']";
const Game_Axie_Classic = "//div[normalize-space()='Axie Classic']";
const Game_Axie_Raylights = "//div[normalize-space()='Axie Infinity: Raylights']";
const Game_Doll = "//div[normalize-space()='Defenders of Lunacian Land']";
const Game_TMA = "//div[normalize-space()='The Machines Arena']";
const Game_ProjectT = "//div[normalize-space()='Project T prototype']"

export class ProductDetailPage {
  get titleGame() {
    return cy.xpath(Title_Game);
  }

  get logoGame() {
    return cy.xpath(Logo_Game);
  }

  get btnShareWithFriends(){
    return cy.xpath(Btn_Share_With_Friends)
  }

  get textDescription(){
    return cy.xpath(Text_Description)
  }

  listMenuGenres = () => cy.xpath("//div[starts-with(@class,'_tags')]//a");
  get menuGameGenres() {
    let menuGenres = [];
    this.listMenuGenres().each(($item) => {
      const style = $item.attr("style");
      menuGenres.push({
        text: $item.text(),
        href: $item.attr("href"),
      });
    });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => resolve(menuGenres));
    });
  }

  listMenuCollectibles = () => cy.xpath("//div[starts-with(@class,'_tokenContainer')]//a");
  get menuGameCollectibles() {
    let menuCollectibles = [];
    this.listMenuCollectibles().each(($item) => {
      const style = $item.attr("style");
      menuCollectibles.push({
        href: $item.attr("href")
      });
    });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => resolve(menuCollectibles));
    });
  }

  get gameOrigins(){
    return cy.xpath(Game_Axie_Origins)
  }

  get gameHomeLand(){
    return cy.xpath(Game_Axie_HomeLand)
  }

  get gameOriginsEsportsServer(){
    return cy.xpath(Game_Origins_Esports_Server)
  }

  get gameClassic(){
    return cy.xpath(Game_Axie_Classic)
  }

  get gameRaylights(){
    return cy.xpath(Game_Axie_Raylights)
  }

  get gameDoll(){
    return cy.xpath(Game_Doll)
  }

  get gameTMA(){
    return cy.xpath(Game_TMA)
  }

  get gameProjectT(){
    return cy.xpath(Game_ProjectT)
  }
}
