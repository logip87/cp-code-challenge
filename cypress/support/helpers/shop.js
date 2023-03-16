import { mainPageSelectors } from "../selectors/mainPage";

export function addToCart(name) {
  cy.get(mainPageSelectors.inventory.item)
    .contains(name)
    .should("be.visible")
    .parents(mainPageSelectors.inventory.item)
    .within(() => {
      cy.contains("Add to cart").should("be.visible").click();
    });
}

export function assertShoppingCartItemsCount(value) {
  if (value == 0) {
    cy.get(mainPageSelectors.shoppingCart.badge).should("not.exist");
  } else {
    cy.get(mainPageSelectors.shoppingCart.badge)
      .contains(value)
      .should("be.visible");
  }
}

export function assertShoppingCartItem(name, description, qty, price) {
  cy.get(mainPageSelectors.shoppingCart.item)
    .contains(name)
    .should("be.visible")
    .parents(mainPageSelectors.shoppingCart.item)
    .within(() => {
      cy.contains(description).should("be.visible");
      cy.contains(qty).should("be.visible");
      cy.contains(price).should("be.visible");
    });
}

export function fillInformationFrom(firstName, lastName, zipCode) {
  cy.get(mainPageSelectors.shoppingCart.inputs.firstName)
    .should("be.visible")
    .type(firstName);
  cy.get(mainPageSelectors.shoppingCart.inputs.lastName)
    .should("be.visible")
    .type(lastName);
  cy.get(mainPageSelectors.shoppingCart.inputs.zipCode)
    .should("be.visible")
    .type(zipCode);
}

export function assertCheckoutOverview(
  name,
  description,
  qty,
  price,
  shippingInfo,
  tax,
  priceTotal
) {
  cy.get(mainPageSelectors.shoppingCart.item)
    .contains(name)
    .should("be.visible")
    .parents(mainPageSelectors.shoppingCart.item)
    .within(() => {
      cy.contains(description).should("be.visible");
      cy.contains(qty).should("be.visible");
      cy.contains(price).should("be.visible");
    });
  cy.contains(shippingInfo).should("be.visible");
  cy.contains(tax).should("be.visible");
  cy.contains(priceTotal).should("be.visible");
}

export function removeItemFromCart(name) {
  cy.get(mainPageSelectors.shoppingCart.item)
    .contains(name)
    .should("be.visible")
    .parents(mainPageSelectors.shoppingCart.item)
    .within(() => {
      cy.contains("button", "Remove").should("be.visible").click();
    });
}

export function assertItemNotInCart(name) {
  cy.contains(mainPageSelectors.shoppingCart.item, name).should("not.exist");
}
