import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login } from "../../../pages/Login";

let loginPage = new Login()


Given('The user goes to the webpage {string}', function (webpage) {
    cy.visit(webpage)
    cy.log("Visiting webpage")
})

Given('The user goes to the webpage Login', function () {
    loginPage.navigate()

})