import { USERS } from "../../support/constants.js";
import {
  enterLoginCredentials,
  assertFailedLogin,
} from "../../support/helpers/authentication";
import { loginPageSelectors } from "../../support/selectors/loginPage";

describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login as standard user", () => {
    cy.login("standard");
  });

  it("Login as locked user shows proper validation message", () => {
    cy.login("locked");
    assertFailedLogin("lockedOut");
    cy.inputHasError(loginPageSelectors.inputs.username);
    cy.inputHasError(loginPageSelectors.inputs.password);
  });

  it("Login as not existing user shows proper validation message", () => {
    const user = USERS.standard;
    enterLoginCredentials(`${user.username}a`, user.password);
    assertFailedLogin("wrongCredentials");
    cy.inputHasError(loginPageSelectors.inputs.username);
    cy.inputHasError(loginPageSelectors.inputs.password);
  });

  it("Login without a password shows proper validation message", () => {
    const user = USERS.standard;
    enterLoginCredentials(user.username, "");
    assertFailedLogin("noPassword");
    cy.inputHasError(loginPageSelectors.inputs.username);
    cy.inputHasError(loginPageSelectors.inputs.password);
  });

  it("Login without an username shows proper validation message", () => {
    const user = USERS.standard;
    enterLoginCredentials("", user.password);
    assertFailedLogin("noUsername");
    cy.inputHasError(loginPageSelectors.inputs.username);
    cy.inputHasError(loginPageSelectors.inputs.password);
  });
});
