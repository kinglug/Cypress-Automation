export class CardGame {
  _getcardDetail() {
    let cardDetail = {};
    cy.get("[class*='_text_l']").then($title => cardDetail.itemName = $title.text().trim())
    return new Cypress.Promise(resolve => resolve(cardDetail))
  }

  getAllCardGame() {
    let cardGameData = [];
    cy.xpath("//div[starts-with(@class,'_grid')]//a").each(($card) => {
        cy.wrap($card).within(()=>{
            this._getcardDetail().then(cardDetail => cardGameData.push(cardDetail))
        })
    });
    return new Cypress.Promise((resolve) => {
      cy.wrap("").then(() => resolve(cardGameData));
    });
  }
}
