class LoginPage {
  visit() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  fillEmail(email) {
    cy.get("#user_email").type(email);
  }

  fillPassword(password) {
    cy.get("#user_password").type(password);
  }

  clickLogInButton() {
    cy.get(".next-1jphuq5").click();
  }

  verifyUrl() {
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  }
}

export default new LoginPage();
