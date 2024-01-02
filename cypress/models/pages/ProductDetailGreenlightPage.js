
const Button_See_More = "//div[starts-with(@class,'_button')]//div";
const Button_Yes = "//span[starts-with(@class,'_votecount')]";
const Button_No = "//div[normalize-space()='No']";
const Button_Patch_Notes = "//button[text()='Patch Notes']"

// List Game
const Game_Axie_TactiCards = "//div[normalize-space()='TactiCards']";
const Game_Inter_The_Dungeon = "//div[normalize-space()='Inter The Dungeon']";
const Game_Infinity_Soccer = "//div[normalize-space()='Infinity Soccer: The Ultimate Axie Champions']";
const Game_Axie_Tri_Force = "//div[normalize-space()='Axie Tri-force']";
const Game_Axie_Infinity_War = "//div[normalize-space()='Axie Infinity War']";
const Game_Axie_Sky_Smash = "//div[normalize-space()='Axie Sky Smash']";
const Game_Axie_Culinary_Wars = "//div[normalize-space()='Axie Infinity: Culinary Wars']";
const Game_Axie_Quest = "//div[normalize-space()='Axie Quest']"
const Game_Lunacia_Cup = "//div[normalize-space()='Lunacia Cup']"

export class ProductDetailGreenlightPage {
  get gameAxieTactiCards() {
    return cy.xpath(Game_Axie_TactiCards);
  }

  get gameInterTheDungeon() {
    return cy.xpath(Game_Inter_The_Dungeon);
  }

  get gameInfinitySoccer() {
    return cy.xpath(Game_Infinity_Soccer);
  }

  get gameAxieTriForce() {
    return cy.xpath(Game_Axie_Tri_Force);
  }

  get gameAxieInfinityWar() {
    return cy.xpath(Game_Axie_Infinity_War);
  }

  get gameAxieSkySmash() {
    return cy.xpath(Game_Axie_Sky_Smash);
  }

  get gameAxieCulinaryWars() {
    return cy.xpath(Game_Axie_Culinary_Wars);
  }

  get gameAxieQuest(){
    return cy.xpath(Game_Axie_Quest)
  }

  get gameLunaciaCup(){
    return cy.xpath(Game_Lunacia_Cup)
  }

  get btnSeeMore(){
    return cy.xpath(Button_See_More)
  }

  get btnYes(){
    return cy.xpath(Button_Yes)
  }

  get btnNo(){
    return cy.xpath(Button_No)
  }

  get btnPatchNotes(){
    return cy.xpath(Button_Patch_Notes)
  }

  listMenuPatchNotes = () => cy.xpath("//div[starts-with(@class,'_list')]//figure")
  get menuPatchNotes(){
    let titlePatchNotes = [];
    this.listMenuPatchNotes().each(($item)=>{
      const style = $item.attr("style");
      titlePatchNotes.push({
        text: $item.text()
      })
    })
    return new Cypress.Promise((resolve)=>{
      cy.wrap("").then(() => resolve(titlePatchNotes));
    })
  } 
}
