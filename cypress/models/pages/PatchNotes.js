export class CardPatchNotes {
    _getcardDetailPatchNotes() {
      let cardDetailPatchNotes = {};
      cy.xpath("(//figcaption[starts-with(@class,'_caption')]//div[starts-with(@class,'text')])").eq(0).then($title => cardDetailPatchNotes.itemTitle = $title.text().trim())
      return new Cypress.Promise(resolve => resolve(cardDetailPatchNotes))
    }
  
    getAllCardPatchNotes() {
      let cardPatchNotesData = [];
      cy.xpath("//div[starts-with(@class,'_list')]").each(($card) => {
          cy.wrap($card).within(()=>{
              this._getcardDetailPatchNotes().then(cardDetailPatchNotes => cardPatchNotesData.push(cardDetailPatchNotes))
          })
      });
      return new Cypress.Promise((resolve) => {
        cy.wrap("").then(() => resolve(cardPatchNotesData));
      });
    }
  }