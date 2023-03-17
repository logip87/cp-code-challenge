import { USERS } from "./constants";
import { loginPageSelectors } from "./selectors/loginPage";
import { mainPageSelectors } from "./selectors/mainPage";

Cypress.Commands.add("login", (role) => {
  const username = USERS[role].username;
  const password = USERS[role].password;
  cy.get(loginPageSelectors.inputs.username)
    .should("be.visible")
    .type(username);
  cy.get(loginPageSelectors.inputs.password)
    .should("be.visible")
    .type(password);
  cy.get(loginPageSelectors.buttons.submit).should("be.visible").click();
  cy.contains("Products").should("be.visible");
  cy.get(mainPageSelectors.inventory.item).should("have.length.above", 2);
});

Cypress.Commands.add("inputHasError", (selector, value = true) => {
  if (value) {
    cy.get(selector).should("have.class", "input_error");
  } else {
    cy.get(selector).should("not.have.class", "input_error");
  }
});
