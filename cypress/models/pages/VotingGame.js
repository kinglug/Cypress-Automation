const Btn_Confirm_Voting = "//button[normalize-space()='Confirm Voting']"

export class VotingGame {
    get confirmVoting() {
        return cy.xpath(Btn_Confirm_Voting);
    }
}

