import { USERS } from "../support/constants.js";
import { enterLoginCredentials } from "../support/helpers/authentication";

describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login as standard user", () => {
    const user = USERS.standard;
    enterLoginCredentials(user.username, user.password);
  });
});
