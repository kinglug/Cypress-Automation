// Element Popular Genres
const Account_Login_Success = "//div[starts-with(@class,'_information')]//div"
const Btn_Back_To_Home = "//span[normalize-space()='Back to Home']"
const Btn_Browse = "//button[normalize-space()='Browse']"
const Btn_Home = "//button[normalize-space()='Home']"
const Btn_Discover = "//button[normalize-space()='Discover']"
const Dot_Blue = "[class*='_indicator']"
const Btn_Browse_All_Genres = "//button[normalize-space()='Browse all genres']"
const Btn_Start_Voting_Now = "//button[normalize-space()='Start voting now!']"
const Search_Btn_Early_Access = "//button[normalize-space()='Early access']"
const Search_Btn_Turn_Based = "//button[normalize-space()='Turn-based']"
const Search_Btn_Strategy = "//button[normalize-space()='Strategy']"
const Search_Btn_Adventure = "//button[normalize-space()='Adventure']"
const Search_Btn_RPG = "//button[normalize-space()='RPG']"
const Search_Btn_ActionRPG = "//button[normalize-space()='Action RPG']"
const Search_Btn_xxxx = "//button[normalize-space()='4x']"
const Search_Btn_MMORPG = "//button[normalize-space()='MMORPG']"
const Search_Btn_Puzzle = "//button[normalize-space()='Puzzle']"
const Search_Btn_Hypercasual = "//button[normalize-space()='Hypercasual']"
const Search_Btn_Sports = "//button[normalize-space()='Sports']"
const Search_Btn_Fighting = "//button[normalize-space()='Fighting']"
const Search_Btn_Simulation = "//button[normalize-space()='Simulation']"
const Search_Btn_Survival = "//button[normalize-space()='Survival']"
const Search_Btn_Build_Battle = "//button[normalize-space()='Build & Battle']"
const Search_Btn_Auto_Battler = "//button[normalize-space()='Auto Battler']"
const Search_Btn_Battle_Royale = "//button[normalize-space()='Battle Royale']"
const Search_Btn_Match_3 = "//button[normalize-space()='Match-3']"
const Search_Btn_Merge = "//button[normalize-space()='Merge']"
const Search_Btn_Racing = "//button[normalize-space()='Racing']"
// Check Box Game Genre In Tab Browse
const Check_Box_Turn_Based = "//input[@value='turn-based']"
const Check_Box_Early_Access = "//input[@value='early-access']"
const Check_Box_Strategy = "//input[@value='strategy']"
const Check_Box_Adventure = "//input[@value='adventure']"
const Check_Box_Rpg = "//input[@value='rpg']"
const Check_Box_ActionRPG = "//input[@value='action-rpg']"
const Check_Box_XXXX = "//input[@value='4x']"
const Check_Box_MMORPG = "//input[@value='mmorpg']"
const Check_Box_Puzzle = "//input[@value='puzzle']"
const Check_Box_Hypercasual = "//input[@value='hypercasual']"
const Check_Box_Sports = "//input[@value='sports']"
const Check_Box_Fighting = "//input[@value='fighting']"
const Check_Box_Simulation = "//input[@value='simulation']"
const Check_Box_Survival = "//input[@value='survival']"
const Check_Box_Build_Battle = "//input[@value='build-and-battle']"
const Check_Box_Auto_Battler = "//input[@value='auto-battler']"
const Check_Box_Battle_Royale = "//input[@value='battle-royale']"
const Check_Box_Match_3 = "//input[@value='match-3']"
const Check_Box_Merge = "//input[@value='merge']"
const Check_Box_Racing = "//input[@value='racing']"
export class MavisHubHomePage{
    get btnBrowse(){
        return cy.xpath(Btn_Browse)
    }

    get btnHome(){
        return cy.xpath(Btn_Home)
    }

    get btnDiscover(){
        return cy.xpath(Btn_Discover)
    }

    get dotBlue(){
        return cy.get(Dot_Blue)
    }

    get checkAccountLoginSuccess(){
        return cy.xpath(Account_Login_Success)
    }

    get btnBackToHome(){
        return cy.xpath(Btn_Back_To_Home)
    }

    get btnStartVotingNow(){
        return cy.xpath(Btn_Start_Voting_Now)
    }

// Search Button
    get searchBtnAllGenres(){
        return cy.xpath(Btn_Browse_All_Genres)
    }
    
    get searchBtnTurnBased(){
        return cy.xpath(Search_Btn_Turn_Based)
    }

    get searchBtnEarlyAccess(){
        return cy.xpath(Search_Btn_Early_Access)
    }

    get searchBtnStrategy(){
        return cy.xpath(Search_Btn_Strategy)
    }

    get searchBtnAdvenrure(){
        return cy.xpath(Search_Btn_Adventure)
    }

    get searchBtnRPG(){
        return cy.xpath(Search_Btn_RPG)
    }

    get searchBtnActionRPG(){
        return cy.xpath(Search_Btn_ActionRPG)
    }

    get searchBtnXXXX(){
        return cy.xpath(Search_Btn_xxxx)
    }

    get searchBtnAutoBattler(){
        return cy.xpath(Search_Btn_Auto_Battler)
    }

    get searchBtnBattleRoyale(){
        return cy.xpath(Search_Btn_Battle_Royale)
    }

    get searchBtnMMORPG(){
        return cy.xpath(Search_Btn_MMORPG)
    }

    get searchBtnPuzzle(){
        return cy.xpath(Search_Btn_Puzzle)
    }

    get searchBtnMatch3(){
        return cy.xpath(Search_Btn_Match_3)
    }

    get searchBtnMerge(){
        return cy.xpath(Search_Btn_Merge)
    }

    get searchBtnHypercasual(){
        return cy.xpath(Search_Btn_Hypercasual)
    }

    get searchBtnSports(){
        return cy.xpath(Search_Btn_Sports)
    }

    get searchBtnFighting(){
        return cy.xpath(Search_Btn_Fighting)
    }

    get searchBtnSimulation(){
        return cy.xpath(Search_Btn_Simulation)
    }

    get searchBtnSurvival(){
        return cy.xpath(Search_Btn_Survival)
    }

    get searchBtnBuildBattle(){
        return cy.xpath(Search_Btn_Build_Battle)
    }

    get searchBtnRacing(){
        return cy.xpath(Search_Btn_Racing)
    }

// Checked Box
    get checkBoxEarlyAccess(){
        return cy.xpath(Check_Box_Early_Access)
    }

    get checkBoxTurnBased(){
        return cy.xpath(Check_Box_Turn_Based)
    }

    get checkBoxStrategy(){
        return cy.xpath(Check_Box_Strategy)
    }

    get checkBoxAdventure(){
        return cy.xpath(Check_Box_Adventure)
    }

    get checkBoxRPG(){
        return cy.xpath(Check_Box_Rpg)
    }

    get checkBoxActionRPG(){
        return cy.xpath(Check_Box_ActionRPG)
    }

    get checkBox4x(){
        return cy.xpath(Check_Box_XXXX)
    }

    get checkBoxAutoBattler(){
        return cy.xpath(Check_Box_Auto_Battler)
    }

    get checkBoxBattleRoyale(){
        return cy.xpath(Check_Box_Battle_Royale)
    }

    get checkBoxMMORPG(){
        return cy.xpath(Check_Box_MMORPG)
    }

    get checkBoxPuzzle(){
        return cy.xpath(Check_Box_Puzzle)
    }

    get checkBoxMatch3(){
        return cy.xpath(Check_Box_Match_3)
    }

    get checkBoxMerge(){
        return cy.xpath(Check_Box_Merge)
    }

    get checkBoxHypercasual(){
        return cy.xpath(Check_Box_Hypercasual)
    }

    get checkBoxSports(){
        return cy.xpath(Check_Box_Sports)
    }

    get checkBoxFighting(){
        return cy.xpath(Check_Box_Fighting)
    }

    get checkBoxSimulation(){
        return cy.xpath(Check_Box_Simulation)
    }

    get checkBoxSurvival(){
        return cy.xpath(Check_Box_Survival)
    }

    get checkBoxBuildBattle(){
        return cy.xpath(Check_Box_Build_Battle)
    }

    get checkBoxRacing(){
        return cy.xpath(Check_Box_Racing)
    }
}