import { mainPageSelectors } from "../selectors/mainPage";

export function navigateBurgerMenu(buttonName) {
  cy.get(mainPageSelectors.menu.button).should("be.visible").click();
  cy.contains(buttonName).should("be.visible").click();
}
