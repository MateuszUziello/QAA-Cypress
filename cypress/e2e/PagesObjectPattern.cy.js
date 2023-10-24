import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

describe("Homework Test", () => {
  it("Logowanie użytkownika i wylogowanie - Test 1", () => {
    LoginPage.visit();

    LoginPage.fillEmail("user888@gmail.com");
    LoginPage.fillPassword("1234567890");
    LoginPage.clickLogInButton();

    HomePage.findRightCornerButton();
    HomePage.openUserMenu();
    HomePage.clickLogOutButton();

    LoginPage.verifyUrl();
  });

  it("Logowanie użytkownika i wylogowanie - Test 2", () => {
    LoginPage.visit();

    LoginPage.fillEmail("testowyqa@qa.team");
    LoginPage.fillPassword("QA!automation-1");
    LoginPage.clickLogInButton();

    HomePage.findRightCornerButton();
    HomePage.openUserMenu();
    HomePage.clickLogOutButton();

    LoginPage.verifyUrl();
  });
});
