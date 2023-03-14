import { loginPageSelectors } from "../selectors/loginPage";

export function enterLoginCredentials(username, password) {
  cy.get(loginPageSelectors.inputs.username)
    .should("be.visible")
    .type(username);
  cy.get(loginPageSelectors.inputs.password)
    .should("be.visible")
    .type(password);
  cy.get(loginPageSelectors.buttons.submit).should("be.visible").click();
}
