import { MavisHubHeaderAndFooter } from "../models/pages/MavisHubHeaderAndFooter";
import datahref from "../jsonfile/hrefdatafooter.json"

let mhMenu = new MavisHubHeaderAndFooter()
describe('Mavis Hub Header And Footer', () => {
    const SIGNATURE = "© 2023 Sky Mavis"
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Verify Logo Mavis Hub', () => {
        mhMenu.logoMavisHub.should('be.visible');
    });

    it('Header Menu', () => {
        mhMenu.btnHome.should('be.visible');
        mhMenu.btnCommunity.should('be.visible');
        mhMenu.btnLogin.should('be.visible');
    });

    it('Footer Menu', () => {
        mhMenu.logoFooter.scrollIntoView().should('be.visible');
        mhMenu.signatureMH.should('contain.text', SIGNATURE)
        mhMenu.menuFooterDetail.then((menu)=>{
            cy.wrap('').then(()=>{
                cy.log(JSON.stringify(menu))
                expect(menu).to.be.deep.equal(datahref)
              })
        })
    });
});