import {
  SHOP_MENU_ITEMS,
  SHOP_MENU_ITEMS_DESCRIPTION,
  CHECKOUT_INFORMATION,
} from "../../support/constants";
import {
  addToCart,
  assertShoppingCartItemsCount,
  assertShoppingCartItem,
  fillInformationFrom,
  assertCheckoutOverview,
  removeItemFromCart,
  assertItemNotInCart,
} from "../../support/helpers/shop";
import { mainPageSelectors } from "../../support/selectors/mainPage";
import { generateFakeUserData } from "../../support/methods/generate-data";
const user = generateFakeUserData;
const shippingInfo = CHECKOUT_INFORMATION.shipping;

describe("Main page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("As a user buy a product and proceed checkout", () => {
    const quantity = "1";
    const tShirtPrice = "15.99";
    const backpackPrice = "29.99";
    const tax = "3.68";
    const total = "49.66";
    cy.login("standard");
    addToCart(SHOP_MENU_ITEMS.tShirt);
    assertShoppingCartItemsCount("1");
    addToCart(SHOP_MENU_ITEMS.backpack);
    assertShoppingCartItemsCount("2");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.tShirt,
      SHOP_MENU_ITEMS_DESCRIPTION.tShirt,
      quantity,
      tShirtPrice
    );
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.backpack,
      SHOP_MENU_ITEMS_DESCRIPTION.backpack,
      quantity,
      backpackPrice
    );
    cy.get(mainPageSelectors.shoppingCart.checkout)
      .should("be.visible")
      .click();
    fillInformationFrom(
      user.firstName.correct,
      user.lastName.correct,
      user.zipCode.correct
    );
    cy.get(mainPageSelectors.shoppingCart.continueButton)
      .should("be.visible")
      .click();
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.tShirt,
      SHOP_MENU_ITEMS_DESCRIPTION.tShirt,
      quantity,
      tShirtPrice
    );
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.backpack,
      SHOP_MENU_ITEMS_DESCRIPTION.backpack,
      quantity,
      backpackPrice
    );
    assertCheckoutOverview(shippingInfo, tax, total);
    cy.get(mainPageSelectors.shoppingCart.finishButton)
      .should("be.visible")
      .click();
    cy.contains("Thank you for your order!").should("be.visible");
  });

  it("As a user I can remove item from cart", () => {
    cy.login("standard");
    addToCart(SHOP_MENU_ITEMS.jacket);
    assertShoppingCartItemsCount("1");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.jacket,
      SHOP_MENU_ITEMS_DESCRIPTION.jacket,
      "1",
      "49.99"
    );
    removeItemFromCart(SHOP_MENU_ITEMS.jacket);
    assertShoppingCartItemsCount("0");
    assertItemNotInCart(SHOP_MENU_ITEMS.jacket);
  });

  it("As a user I can continue shopping", () => {
    cy.login("standard");
    addToCart(SHOP_MENU_ITEMS.onesie);
    assertShoppingCartItemsCount("1");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.onesie,
      SHOP_MENU_ITEMS_DESCRIPTION.onesie,
      "1",
      "7.99"
    );
    cy.get(mainPageSelectors.shoppingCart.continueShoppingButton)
      .should("be.visible")
      .click();
    addToCart(SHOP_MENU_ITEMS.bikeLight);
    assertShoppingCartItemsCount("2");
    cy.get(mainPageSelectors.shoppingCart.button).should("be.visible").click();
    assertShoppingCartItem(
      SHOP_MENU_ITEMS.bikeLight,
      SHOP_MENU_ITEMS_DESCRIPTION.bikeLight,
      "1",
      "9.99"
    );
  });
});
