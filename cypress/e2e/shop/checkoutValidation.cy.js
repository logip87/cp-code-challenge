import {
  fillInformationFrom,
  assertFailedCheckout,
} from "../../support/helpers/shop";
import { mainPageSelectors } from "../../support/selectors/mainPage";
import { generateFakeUserData } from "../../support/methods/generate-data";
const user = generateFakeUserData;

describe("Checkout validation tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Checkout without first name shows proper validation message", () => {
    cy.login("standard");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    cy.get(mainPageSelectors.shoppingCart.checkout)
      .should("be.visible")
      .click();
    fillInformationFrom("", user.lastName.correct, user.zipCode.correct);
    cy.get(mainPageSelectors.shoppingCart.continueButton)
      .should("be.visible")
      .click();
    assertFailedCheckout("noFirstName");
  });

  it("Checkout without last name shows proper validation message", () => {
    cy.login("standard");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    cy.get(mainPageSelectors.shoppingCart.checkout)
      .should("be.visible")
      .click();
    fillInformationFrom(user.firstName.correct, "", user.zipCode.correct);
    cy.get(mainPageSelectors.shoppingCart.continueButton)
      .should("be.visible")
      .click();
    assertFailedCheckout("noLastName");
  });

  it("Checkout without postal code shows proper validation message", () => {
    cy.login("standard");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    cy.get(mainPageSelectors.shoppingCart.checkout)
      .should("be.visible")
      .click();
    fillInformationFrom(user.firstName.correct, user.lastName.correct, "");
    cy.get(mainPageSelectors.shoppingCart.continueButton)
      .should("be.visible")
      .click();
    assertFailedCheckout("noPostalCode");
  });
});
