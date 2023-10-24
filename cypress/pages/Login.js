export class Login {

    navigate() {
        cy.visit('https://www.edu.goit.global/account/login')
    }

    validateLoginTitle() {
        cy.get('#__next > div > div > div > div > h2').should('be.visible')
        cy.get('#__next > div > div > div > div > h2').should('have.text', 'Login')
    }

    validateInputs() {
        cy.get('#user_email').should('be.visible')
        cy.get('#user_password').should('be.visible')
    }

    validateButton() {
        cy.get('[type="submit"]').should('be.visible')
        cy.get('[type="submit"]').should('have.text', 'Log in')
    }

    validatePasswordLink() {
        cy.get('.next-1qrvie4.e48fpw0').first().should('be.visible')
        cy.get('.next-1qrvie4.e48fpw0').eq(0).should('have.text', 'I can\'t remember the password')
    }

}