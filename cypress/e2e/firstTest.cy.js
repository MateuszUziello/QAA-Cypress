describe("Nasz pierwszy blok testów", () => {
  it.only("1 Badanie na miejscu LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("2 Znajdź wejście z pocztą i wpisz email", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
  });

  it("3 Sprawdź przycisk submit", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should(
      "have.css",
      "background-color",
      "rgb(255, 107, 10)"
    );
  });

  it("4 Scrollowanie", () => {
    cy.visit(
      "https://docs.cypress.io/api/commands/scrollintoview#docusaurus_skipToContent_fallback"
    );
    cy.get('[id="Examples"]').scrollIntoView().should("be.visible");
  });

  it("5 admin login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
  });

  it("6 manager login", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
  });
});
