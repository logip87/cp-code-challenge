import { USER_MENU_ITEMS } from "../../support/constants";
import { navigateBurgerMenu } from "../../support/helpers/menu";
import { loginPageSelectors } from "../../support/selectors/loginPage";

describe("Logout tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Logout as user", () => {
    cy.login("standard");
    navigateBurgerMenu(USER_MENU_ITEMS.logout);
    cy.get(loginPageSelectors.buttons.submit).should("be.visible");
  });
});
