// Header
const Logo_Mavis_Hub = "[class*='_brand']"
const Btn_Home = "//button[normalize-space()='Home']"
const Btn_Community = "//button[normalize-space()='Community']"
const Btn_Login = "//button[normalize-space()='Log in']"

// Footer
const Logo_MH_Footer = "[class*='_logo']"
const Signature_MH = "[class*='_label']"

export class MavisHubHeaderAndFooter {
    get logoMavisHub(){
        return cy.get(Logo_Mavis_Hub)
    }

    get btnHome(){
        return cy.xpath(Btn_Home)
    }

    get btnCommunity(){
        return cy.xpath(Btn_Community)
    }

    get btnLogin(){
        return cy.xpath(Btn_Login)
    }

    // Menu Footer
    get logoFooter(){
        return cy.get(Logo_MH_Footer)
    }

    get signatureMH(){
        return cy.get(Signature_MH)
    }
    listMenuItem = () => cy.xpath("//nav/a") 
    get menuFooterDetail(){
        let menuDetail = [];
        this.listMenuItem().each($item =>{
            const style = $item.attr("style");
                menuDetail.push({
                    text: $item.text(),
                    href: $item.attr("href")
                  })
        })
        return new Cypress.Promise(resolve =>{
            cy.wrap('').then(()=>resolve(menuDetail));
        })
    }
}