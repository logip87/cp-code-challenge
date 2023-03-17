import { loginPageSelectors } from "../selectors/loginPage";

export function enterLoginCredentials(username, password) {
  if (username != "") {
    cy.get(loginPageSelectors.inputs.username)
      .should("be.visible")
      .type(username);
    cy.get(loginPageSelectors.buttons.submit).should("be.visible").click();
  }
  if (password != "") {
    cy.get(loginPageSelectors.inputs.password)
      .should("be.visible")
      .type(password);
    cy.get(loginPageSelectors.buttons.submit).should("be.visible").click();
  }
}

export function assertFailedLogin(error) {
  const errorMessage = {
    lockedOut: "Sorry, this user has been locked out.",
    wrongCredentials:
      "Username and password do not match any user in this service",
    noPassword: "Password is required",
    noUsername: "Username is required",
  };
  cy.contains(errorMessage[error]).should("be.visible");
}
