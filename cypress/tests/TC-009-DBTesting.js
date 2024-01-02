describe('Login Test', function() {
    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.wait(5000)
        cy.fixture('testdata').then(function(testdata){
            this.testdata = testdata
        })
    })

    it('Validate successful Login', function () {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.testdata.username)
        cy.get('#txtPassword').type(this.testdata.password)
        cy.get('#btnLogin').click()
        cy.get('#welcome').contains(this.testdata.welcomeText)
    });
});
