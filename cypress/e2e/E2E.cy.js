describe("Test 1", () => {
  it("Logowanie użytkownika user888@gmail.com", () => {
    // Otwórz stronę logowania
    cy.visit("https://www.edu.goit.global/account/login");

    // Użyj polecenia logowania
    cy.get('input[name="email"]').type("user888@gmail.com");
    cy.get('input[name="password"]').type("1234567890");
    cy.get('button[type="submit"]').click();

    // Znajdź przycisk w prawym górnym rogu i otwórz menu
    cy.get("#open-navigation-menu-mobile").click();

    // Kliknij przycisk "Log outnp
    cy.contains("Log out").click();

    // Upewnij się, że wrócono do strony logowania
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});
describe("Test 2", () => {
  it("Logowanie użytkownika testowyqa@qa.team", () => {
    // Otwórz stronę logowania
    cy.visit("https://www.edu.goit.global/account/login");

    // Użyj własnego polecenia logowania
    cy.get('input[name="email"]').type("testowyqa@qa.team");
    cy.get('input[name="password"]').type("QA!automation-1");
    cy.get('button[type="submit"]').click();

    // Znajdź przycisk w prawym górnym rogu i otwórz menu
    cy.get("#open-navigation-menu-mobile").click();

    // Kliknij przycisk "Log out"
    cy.contains("Log out").click();

    // Upewnij się, że wrócono do strony logowania
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});
