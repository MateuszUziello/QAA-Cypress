class HomePage {
  findRightCornerButton() {
    cy.get("#open-navigation-menu-mobile").should("exist");
  }

  openUserMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }

  clickLogOutButton() {
    cy.get(":nth-child(9) > .next-bve2vl").click();
  }
}

export default new HomePage();
