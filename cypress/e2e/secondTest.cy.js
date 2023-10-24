import { Login } from "../pages/Login"

let loginPage

before( () => {
    loginPage = new Login()
})

describe("Page object pattern example", () => {

    it("Login page test", () => {

        //visit page
        loginPage.navigate()

        //check title
        loginPage.validateLoginTitle()
        
        //check inputs
        loginPage.validateInputs()

        //check button
        loginPage.validateButton()

        //check link
        loginPage.validatePasswordLink()

    })
})